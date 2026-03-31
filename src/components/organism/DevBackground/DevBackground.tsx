import React, { useEffect, useRef } from "react";
import "./_DevBackground.scss";

// ─── Code / tag snippets that float in the background ────────────────────────
const CODE_TOKENS = [
  "<div>",
  "</div>",
  "const",
  "=>",
  "return",
  "import",
  "export",
  "async",
  "await",
  "{...}",
  "[]",
  "npm i",
  "git push",
  "tsx",
  "</>",
  "0x1A",
  "true",
  "false",
  "null",
  "void",
  "func()",
  "type T",
  "interface",
  "⌘K",
  "404",
  "200",
  "[]byte",
  "&&",
  "||",
  "??",
];

// ─── Types ────────────────────────────────────────────────────────────────────
interface Arc {
  // Control points for the cubic bezier
  x0: number;
  y0: number;
  cx0: number;
  cy0: number;
  cx1: number;
  cy1: number;
  x1: number;
  y1: number;
  progress: number; // 0 → 1 drawing progress
  speed: number;
  opacity: number;
  color: string;
  lineWidth: number;
  // Tail / head lengths (fraction of total t that are fading in/out)
  tailLength: number;
}

interface Token {
  text: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  fontSize: number;
  color: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function randomColor(palette: string[]) {
  return palette[Math.floor(Math.random() * palette.length)];
}

// Evaluate a cubic bezier at t
function bezier(
  t: number,
  p0: number,
  p1: number,
  p2: number,
  p3: number
): number {
  const u = 1 - t;
  return u * u * u * p0 + 3 * u * u * t * p1 + 3 * u * t * t * p2 + t * t * t * p3;
}

function createArc(w: number, h: number, palette: string[]): Arc {
  // Start/end on random edges to create sweeping curves
  const edge = () => Math.floor(rand(0, 4));
  const pointOnEdge = (e: number) => {
    switch (e) {
      case 0: return { x: rand(0, w), y: 0 };
      case 1: return { x: w, y: rand(0, h) };
      case 2: return { x: rand(0, w), y: h };
      default: return { x: 0, y: rand(0, h) };
    }
  };
  const start = pointOnEdge(edge());
  const end = pointOnEdge(edge());
  return {
    x0: start.x,
    y0: start.y,
    cx0: rand(w * 0.1, w * 0.9),
    cy0: rand(h * 0.1, h * 0.9),
    cx1: rand(w * 0.1, w * 0.9),
    cy1: rand(h * 0.1, h * 0.9),
    x1: end.x,
    y1: end.y,
    progress: 0,
    speed: rand(0.0008, 0.003),
    opacity: rand(0.06, 0.22),
    color: randomColor(palette),
    lineWidth: rand(0.4, 1.4),
    tailLength: rand(0.15, 0.35),
  };
}

function createToken(w: number, h: number, palette: string[]): Token {
  return {
    text: CODE_TOKENS[Math.floor(Math.random() * CODE_TOKENS.length)],
    x: rand(0, w),
    y: rand(0, h),
    vx: rand(-0.08, 0.08),
    vy: rand(-0.06, 0.06),
    opacity: rand(0.04, 0.14),
    fontSize: rand(10, 18),
    color: randomColor(palette),
  };
}

// ─── Component ────────────────────────────────────────────────────────────────
export const DevBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Color palette derived from project tokens
    const PALETTE = [
      "#db2955", // raspberry
      "#ffd176", // green-munsell / gold
      "#4fc3f7", // electric blue
      "#7c4dff", // purple
      "#00e5ff", // cyan
      "#eadeda", // platinum (light)
    ];

    let w = 0;
    let h = 0;
    let rafId: number;

    const ARC_COUNT = 18;
    const TOKEN_COUNT = 40;
    let arcs: Arc[] = [];
    let tokens: Token[] = [];

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;
      // Re-seed on resize
      arcs = Array.from({ length: ARC_COUNT }, () => createArc(w, h, PALETTE));
      tokens = Array.from({ length: TOKEN_COUNT }, () => createToken(w, h, PALETTE));
    };

    // ── Draw a single arc segment using many small bezier samples ────────────
    const drawArc = (arc: Arc) => {
      const steps = 120;
      const headT = arc.progress;
      const tailT = Math.max(0, arc.progress - arc.tailLength);
      if (headT <= 0) return;

      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const t = tailT + (i / steps) * (headT - tailT);
        if (t < 0 || t > 1) continue;
        const x = bezier(t, arc.x0, arc.cx0, arc.cx1, arc.x1);
        const y = bezier(t, arc.y0, arc.cy0, arc.cy1, arc.y1);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      // Gradient along the stroke (tail transparent → head bright)
      const startX = bezier(tailT, arc.x0, arc.cx0, arc.cx1, arc.x1);
      const startY = bezier(tailT, arc.y0, arc.cy0, arc.cy1, arc.y1);
      const endX = bezier(headT, arc.x0, arc.cx0, arc.cx1, arc.x1);
      const endY = bezier(headT, arc.y0, arc.cy0, arc.cy1, arc.y1);

      const grad = ctx.createLinearGradient(startX, startY, endX, endY);
      grad.addColorStop(0, `${arc.color}00`);
      grad.addColorStop(0.7, `${arc.color}${Math.round(arc.opacity * 255).toString(16).padStart(2, "0")}`);
      grad.addColorStop(1, `${arc.color}ff`);

      ctx.strokeStyle = grad;
      ctx.lineWidth = arc.lineWidth;
      ctx.lineCap = "round";
      ctx.stroke();

      // Glowing head dot
      const glow = ctx.createRadialGradient(endX, endY, 0, endX, endY, arc.lineWidth * 5);
      glow.addColorStop(0, `${arc.color}cc`);
      glow.addColorStop(1, `${arc.color}00`);
      ctx.beginPath();
      ctx.arc(endX, endY, arc.lineWidth * 5, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();
    };

    // ── Main loop ─────────────────────────────────────────────────────────────
    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      // ── Arcs ──
      for (const arc of arcs) {
        arc.progress += arc.speed;
        if (arc.progress > 1 + arc.tailLength) {
          // Respawn
          Object.assign(arc, createArc(w, h, PALETTE));
        }
        drawArc(arc);
      }

      // ── Tokens ──
      ctx.textBaseline = "middle";
      for (const tok of tokens) {
        tok.x += tok.vx;
        tok.y += tok.vy;
        // Wrap around
        if (tok.x < -60) tok.x = w + 60;
        if (tok.x > w + 60) tok.x = -60;
        if (tok.y < -20) tok.y = h + 20;
        if (tok.y > h + 20) tok.y = -20;

        ctx.globalAlpha = tok.opacity;
        ctx.font = `${tok.fontSize}px "JetBrains Mono", "Fira Code", monospace`;
        ctx.fillStyle = tok.color;
        ctx.fillText(tok.text, tok.x, tok.y);
      }
      ctx.globalAlpha = 1;

      rafId = requestAnimationFrame(tick);
    };

    resize();
    tick();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement ?? document.body);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="DevBackground" aria-hidden="true">
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

DevBackground.displayName = "DevBackground";
