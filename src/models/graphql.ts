import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: InputMaybe<ImageTransformOptions>;
};

export type AssetCollection = {
  __typename: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  mockupCollection?: Maybe<MockupCollection>;
  projectCollection?: Maybe<ProjectCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsMockupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/client) */
export type Client = Entry & {
  __typename: 'Client';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ClientLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/client) */
export type ClientLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/client) */
export type ClientNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ClientCollection = {
  __typename: 'ClientCollection';
  items: Array<Maybe<Client>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ClientFilter = {
  AND?: InputMaybe<Array<InputMaybe<ClientFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ClientFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ClientLinkingCollections = {
  __typename: 'ClientLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  projectCollection?: Maybe<ProjectCollection>;
};


export type ClientLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ClientLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ClientOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/mockup) */
export type Mockup = Entry & {
  __typename: 'Mockup';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<MockupLinkingCollections>;
  media?: Maybe<Asset>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/mockup) */
export type MockupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/mockup) */
export type MockupMediaArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/mockup) */
export type MockupTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type MockupCollection = {
  __typename: 'MockupCollection';
  items: Array<Maybe<Mockup>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MockupFilter = {
  AND?: InputMaybe<Array<InputMaybe<MockupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MockupFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  media_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MockupLinkingCollections = {
  __typename: 'MockupLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MockupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum MockupOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/project) */
export type Project = Entry & {
  __typename: 'Project';
  body?: Maybe<Scalars['String']>;
  client?: Maybe<Client>;
  contentfulMetadata: ContentfulMetadata;
  excerpt?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ProjectLinkingCollections>;
  mockupsCollection?: Maybe<AssetCollection>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  technologiesCollection?: Maybe<ProjectTechnologiesCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/project) */
export type ProjectBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/project) */
export type ProjectClientArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/project) */
export type ProjectExcerptArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/project) */
export type ProjectLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/project) */
export type ProjectMockupsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/project) */
export type ProjectNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/project) */
export type ProjectSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/project) */
export type ProjectTechnologiesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ProjectCollection = {
  __typename: 'ProjectCollection';
  items: Array<Maybe<Project>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ProjectFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  body?: InputMaybe<Scalars['String']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_not?: InputMaybe<Scalars['String']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  client?: InputMaybe<CfClientNestedFilter>;
  client_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  excerpt?: InputMaybe<Scalars['String']>;
  excerpt_contains?: InputMaybe<Scalars['String']>;
  excerpt_exists?: InputMaybe<Scalars['Boolean']>;
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  excerpt_not?: InputMaybe<Scalars['String']>;
  excerpt_not_contains?: InputMaybe<Scalars['String']>;
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mockupsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  technologiesCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectLinkingCollections = {
  __typename: 'ProjectLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ProjectLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ProjectOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ProjectTechnologiesCollection = {
  __typename: 'ProjectTechnologiesCollection';
  items: Array<Maybe<Technology>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type Query = {
  __typename: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  client?: Maybe<Client>;
  clientCollection?: Maybe<ClientCollection>;
  entryCollection?: Maybe<EntryCollection>;
  mockup?: Maybe<Mockup>;
  mockupCollection?: Maybe<MockupCollection>;
  project?: Maybe<Project>;
  projectCollection?: Maybe<ProjectCollection>;
  structure?: Maybe<Structure>;
  structureCollection?: Maybe<StructureCollection>;
  technology?: Maybe<Technology>;
  technologyCollection?: Maybe<TechnologyCollection>;
  typography?: Maybe<Typography>;
  typographyCollection?: Maybe<TypographyCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryClientArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryClientCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ClientOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClientFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryMockupArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMockupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MockupOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MockupFilter>;
};


export type QueryProjectArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProjectOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectFilter>;
};


export type QueryStructureArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryStructureCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<StructureOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StructureFilter>;
};


export type QueryTechnologyArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTechnologyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TechnologyOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TechnologyFilter>;
};


export type QueryTypographyArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTypographyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TypographyOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TypographyFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/structure) */
export type Structure = Entry & {
  __typename: 'Structure';
  available?: Maybe<Scalars['Boolean']>;
  clients?: Maybe<Scalars['Boolean']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<StructureLinkingCollections>;
  projects?: Maybe<Scalars['Boolean']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/structure) */
export type StructureAvailableArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/structure) */
export type StructureClientsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/structure) */
export type StructureLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/structure) */
export type StructureProjectsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type StructureCollection = {
  __typename: 'StructureCollection';
  items: Array<Maybe<Structure>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type StructureFilter = {
  AND?: InputMaybe<Array<InputMaybe<StructureFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StructureFilter>>>;
  available?: InputMaybe<Scalars['Boolean']>;
  available_exists?: InputMaybe<Scalars['Boolean']>;
  available_not?: InputMaybe<Scalars['Boolean']>;
  clients?: InputMaybe<Scalars['Boolean']>;
  clients_exists?: InputMaybe<Scalars['Boolean']>;
  clients_not?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  projects?: InputMaybe<Scalars['Boolean']>;
  projects_exists?: InputMaybe<Scalars['Boolean']>;
  projects_not?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type StructureLinkingCollections = {
  __typename: 'StructureLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type StructureLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum StructureOrder {
  AvailableAsc = 'available_ASC',
  AvailableDesc = 'available_DESC',
  ClientsAsc = 'clients_ASC',
  ClientsDesc = 'clients_DESC',
  ProjectsAsc = 'projects_ASC',
  ProjectsDesc = 'projects_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Sys = {
  __typename: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/technology) */
export type Technology = Entry & {
  __typename: 'Technology';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TechnologyLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/technology) */
export type TechnologyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/technology) */
export type TechnologyNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TechnologyCollection = {
  __typename: 'TechnologyCollection';
  items: Array<Maybe<Technology>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TechnologyFilter = {
  AND?: InputMaybe<Array<InputMaybe<TechnologyFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TechnologyFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TechnologyLinkingCollections = {
  __typename: 'TechnologyLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  projectCollection?: Maybe<ProjectCollection>;
};


export type TechnologyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TechnologyLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TechnologyOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/typography) */
export type Typography = Entry & {
  __typename: 'Typography';
  content?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TypographyLinkingCollections>;
  reference?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/typography) */
export type TypographyContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/typography) */
export type TypographyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/39f5y6g7sdnk/content_types/typography) */
export type TypographyReferenceArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TypographyCollection = {
  __typename: 'TypographyCollection';
  items: Array<Maybe<Typography>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TypographyFilter = {
  AND?: InputMaybe<Array<InputMaybe<TypographyFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TypographyFilter>>>;
  content?: InputMaybe<Scalars['String']>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  content_not?: InputMaybe<Scalars['String']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  reference?: InputMaybe<Scalars['String']>;
  reference_contains?: InputMaybe<Scalars['String']>;
  reference_exists?: InputMaybe<Scalars['Boolean']>;
  reference_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  reference_not?: InputMaybe<Scalars['String']>;
  reference_not_contains?: InputMaybe<Scalars['String']>;
  reference_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TypographyLinkingCollections = {
  __typename: 'TypographyLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TypographyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TypographyOrder {
  ReferenceAsc = 'reference_ASC',
  ReferenceDesc = 'reference_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CfClientNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfClientNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfClientNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Asset: ResolverTypeWrapper<Asset>;
  AssetCollection: ResolverTypeWrapper<AssetCollection>;
  AssetFilter: AssetFilter;
  AssetLinkingCollections: ResolverTypeWrapper<AssetLinkingCollections>;
  AssetOrder: AssetOrder;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Client: ResolverTypeWrapper<Client>;
  ClientCollection: ResolverTypeWrapper<ClientCollection>;
  ClientFilter: ClientFilter;
  ClientLinkingCollections: ResolverTypeWrapper<ClientLinkingCollections>;
  ClientOrder: ClientOrder;
  ContentfulMetadata: ResolverTypeWrapper<ContentfulMetadata>;
  ContentfulMetadataFilter: ContentfulMetadataFilter;
  ContentfulMetadataTagsFilter: ContentfulMetadataTagsFilter;
  ContentfulTag: ResolverTypeWrapper<ContentfulTag>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Dimension: ResolverTypeWrapper<Scalars['Dimension']>;
  Entry: ResolversTypes['Client'] | ResolversTypes['Mockup'] | ResolversTypes['Project'] | ResolversTypes['Structure'] | ResolversTypes['Technology'] | ResolversTypes['Typography'];
  EntryCollection: ResolverTypeWrapper<EntryCollection>;
  EntryFilter: EntryFilter;
  EntryOrder: EntryOrder;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  HexColor: ResolverTypeWrapper<Scalars['HexColor']>;
  ImageFormat: ImageFormat;
  ImageResizeFocus: ImageResizeFocus;
  ImageResizeStrategy: ImageResizeStrategy;
  ImageTransformOptions: ImageTransformOptions;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mockup: ResolverTypeWrapper<Mockup>;
  MockupCollection: ResolverTypeWrapper<MockupCollection>;
  MockupFilter: MockupFilter;
  MockupLinkingCollections: ResolverTypeWrapper<MockupLinkingCollections>;
  MockupOrder: MockupOrder;
  Project: ResolverTypeWrapper<Project>;
  ProjectCollection: ResolverTypeWrapper<ProjectCollection>;
  ProjectFilter: ProjectFilter;
  ProjectLinkingCollections: ResolverTypeWrapper<ProjectLinkingCollections>;
  ProjectOrder: ProjectOrder;
  ProjectTechnologiesCollection: ResolverTypeWrapper<ProjectTechnologiesCollection>;
  Quality: ResolverTypeWrapper<Scalars['Quality']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Structure: ResolverTypeWrapper<Structure>;
  StructureCollection: ResolverTypeWrapper<StructureCollection>;
  StructureFilter: StructureFilter;
  StructureLinkingCollections: ResolverTypeWrapper<StructureLinkingCollections>;
  StructureOrder: StructureOrder;
  Sys: ResolverTypeWrapper<Sys>;
  SysFilter: SysFilter;
  Technology: ResolverTypeWrapper<Technology>;
  TechnologyCollection: ResolverTypeWrapper<TechnologyCollection>;
  TechnologyFilter: TechnologyFilter;
  TechnologyLinkingCollections: ResolverTypeWrapper<TechnologyLinkingCollections>;
  TechnologyOrder: TechnologyOrder;
  Typography: ResolverTypeWrapper<Typography>;
  TypographyCollection: ResolverTypeWrapper<TypographyCollection>;
  TypographyFilter: TypographyFilter;
  TypographyLinkingCollections: ResolverTypeWrapper<TypographyLinkingCollections>;
  TypographyOrder: TypographyOrder;
  cfClientNestedFilter: CfClientNestedFilter;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Asset: Asset;
  AssetCollection: AssetCollection;
  AssetFilter: AssetFilter;
  AssetLinkingCollections: AssetLinkingCollections;
  Boolean: Scalars['Boolean'];
  Client: Client;
  ClientCollection: ClientCollection;
  ClientFilter: ClientFilter;
  ClientLinkingCollections: ClientLinkingCollections;
  ContentfulMetadata: ContentfulMetadata;
  ContentfulMetadataFilter: ContentfulMetadataFilter;
  ContentfulMetadataTagsFilter: ContentfulMetadataTagsFilter;
  ContentfulTag: ContentfulTag;
  DateTime: Scalars['DateTime'];
  Dimension: Scalars['Dimension'];
  Entry: ResolversParentTypes['Client'] | ResolversParentTypes['Mockup'] | ResolversParentTypes['Project'] | ResolversParentTypes['Structure'] | ResolversParentTypes['Technology'] | ResolversParentTypes['Typography'];
  EntryCollection: EntryCollection;
  EntryFilter: EntryFilter;
  Float: Scalars['Float'];
  HexColor: Scalars['HexColor'];
  ImageTransformOptions: ImageTransformOptions;
  Int: Scalars['Int'];
  Mockup: Mockup;
  MockupCollection: MockupCollection;
  MockupFilter: MockupFilter;
  MockupLinkingCollections: MockupLinkingCollections;
  Project: Project;
  ProjectCollection: ProjectCollection;
  ProjectFilter: ProjectFilter;
  ProjectLinkingCollections: ProjectLinkingCollections;
  ProjectTechnologiesCollection: ProjectTechnologiesCollection;
  Quality: Scalars['Quality'];
  Query: {};
  String: Scalars['String'];
  Structure: Structure;
  StructureCollection: StructureCollection;
  StructureFilter: StructureFilter;
  StructureLinkingCollections: StructureLinkingCollections;
  Sys: Sys;
  SysFilter: SysFilter;
  Technology: Technology;
  TechnologyCollection: TechnologyCollection;
  TechnologyFilter: TechnologyFilter;
  TechnologyLinkingCollections: TechnologyLinkingCollections;
  Typography: Typography;
  TypographyCollection: TypographyCollection;
  TypographyFilter: TypographyFilter;
  TypographyLinkingCollections: TypographyLinkingCollections;
  cfClientNestedFilter: CfClientNestedFilter;
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['AssetLinkingCollections']>, ParentType, ContextType, RequireFields<AssetLinkedFromArgs, never>>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<AssetUrlArgs, never>>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetCollection'] = ResolversParentTypes['AssetCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetLinkingCollections'] = ResolversParentTypes['AssetLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  mockupCollection?: Resolver<Maybe<ResolversTypes['MockupCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsMockupCollectionArgs, 'limit' | 'skip'>>;
  projectCollection?: Resolver<Maybe<ResolversTypes['ProjectCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsProjectCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientResolvers<ContextType = any, ParentType extends ResolversParentTypes['Client'] = ResolversParentTypes['Client']> = {
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ClientLinkingCollections']>, ParentType, ContextType, RequireFields<ClientLinkedFromArgs, never>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ClientNameArgs, never>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClientCollection'] = ResolversParentTypes['ClientCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Client']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClientLinkingCollections'] = ResolversParentTypes['ClientLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ClientLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  projectCollection?: Resolver<Maybe<ResolversTypes['ProjectCollection']>, ParentType, ContextType, RequireFields<ClientLinkingCollectionsProjectCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulMetadata'] = ResolversParentTypes['ContentfulMetadata']> = {
  tags?: Resolver<Array<Maybe<ResolversTypes['ContentfulTag']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulTag'] = ResolversParentTypes['ContentfulTag']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DimensionScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Dimension'], any> {
  name: 'Dimension';
}

export type EntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entry'] = ResolversParentTypes['Entry']> = {
  __resolveType: TypeResolveFn<'Client' | 'Mockup' | 'Project' | 'Structure' | 'Technology' | 'Typography', ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
};

export type EntryCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryCollection'] = ResolversParentTypes['EntryCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface HexColorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexColor'], any> {
  name: 'HexColor';
}

export type MockupResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mockup'] = ResolversParentTypes['Mockup']> = {
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['MockupLinkingCollections']>, ParentType, ContextType, RequireFields<MockupLinkedFromArgs, never>>;
  media?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MockupMediaArgs, never>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MockupTitleArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MockupCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MockupCollection'] = ResolversParentTypes['MockupCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Mockup']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MockupLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MockupLinkingCollections'] = ResolversParentTypes['MockupLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<MockupLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ProjectBodyArgs, never>>;
  client?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType, RequireFields<ProjectClientArgs, never>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  excerpt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ProjectExcerptArgs, never>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ProjectLinkingCollections']>, ParentType, ContextType, RequireFields<ProjectLinkedFromArgs, never>>;
  mockupsCollection?: Resolver<Maybe<ResolversTypes['AssetCollection']>, ParentType, ContextType, RequireFields<ProjectMockupsCollectionArgs, 'limit' | 'skip'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ProjectNameArgs, never>>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ProjectSlugArgs, never>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  technologiesCollection?: Resolver<Maybe<ResolversTypes['ProjectTechnologiesCollection']>, ParentType, ContextType, RequireFields<ProjectTechnologiesCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectCollection'] = ResolversParentTypes['ProjectCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Project']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectLinkingCollections'] = ResolversParentTypes['ProjectLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ProjectLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectTechnologiesCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectTechnologiesCollection'] = ResolversParentTypes['ProjectTechnologiesCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Technology']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface QualityScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Quality'], any> {
  name: 'Quality';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetArgs, 'id'>>;
  assetCollection?: Resolver<Maybe<ResolversTypes['AssetCollection']>, ParentType, ContextType, RequireFields<QueryAssetCollectionArgs, 'limit' | 'skip'>>;
  client?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType, RequireFields<QueryClientArgs, 'id'>>;
  clientCollection?: Resolver<Maybe<ResolversTypes['ClientCollection']>, ParentType, ContextType, RequireFields<QueryClientCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<QueryEntryCollectionArgs, 'limit' | 'skip'>>;
  mockup?: Resolver<Maybe<ResolversTypes['Mockup']>, ParentType, ContextType, RequireFields<QueryMockupArgs, 'id'>>;
  mockupCollection?: Resolver<Maybe<ResolversTypes['MockupCollection']>, ParentType, ContextType, RequireFields<QueryMockupCollectionArgs, 'limit' | 'skip'>>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryProjectArgs, 'id'>>;
  projectCollection?: Resolver<Maybe<ResolversTypes['ProjectCollection']>, ParentType, ContextType, RequireFields<QueryProjectCollectionArgs, 'limit' | 'skip'>>;
  structure?: Resolver<Maybe<ResolversTypes['Structure']>, ParentType, ContextType, RequireFields<QueryStructureArgs, 'id'>>;
  structureCollection?: Resolver<Maybe<ResolversTypes['StructureCollection']>, ParentType, ContextType, RequireFields<QueryStructureCollectionArgs, 'limit' | 'skip'>>;
  technology?: Resolver<Maybe<ResolversTypes['Technology']>, ParentType, ContextType, RequireFields<QueryTechnologyArgs, 'id'>>;
  technologyCollection?: Resolver<Maybe<ResolversTypes['TechnologyCollection']>, ParentType, ContextType, RequireFields<QueryTechnologyCollectionArgs, 'limit' | 'skip'>>;
  typography?: Resolver<Maybe<ResolversTypes['Typography']>, ParentType, ContextType, RequireFields<QueryTypographyArgs, 'id'>>;
  typographyCollection?: Resolver<Maybe<ResolversTypes['TypographyCollection']>, ParentType, ContextType, RequireFields<QueryTypographyCollectionArgs, 'limit' | 'skip'>>;
};

export type StructureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Structure'] = ResolversParentTypes['Structure']> = {
  available?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<StructureAvailableArgs, never>>;
  clients?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<StructureClientsArgs, never>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['StructureLinkingCollections']>, ParentType, ContextType, RequireFields<StructureLinkedFromArgs, never>>;
  projects?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<StructureProjectsArgs, never>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StructureCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StructureCollection'] = ResolversParentTypes['StructureCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Structure']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StructureLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['StructureLinkingCollections'] = ResolversParentTypes['StructureLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<StructureLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SysResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sys'] = ResolversParentTypes['Sys']> = {
  environmentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstPublishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedVersion?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  spaceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TechnologyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Technology'] = ResolversParentTypes['Technology']> = {
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['TechnologyLinkingCollections']>, ParentType, ContextType, RequireFields<TechnologyLinkedFromArgs, never>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<TechnologyNameArgs, never>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TechnologyCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TechnologyCollection'] = ResolversParentTypes['TechnologyCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Technology']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TechnologyLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TechnologyLinkingCollections'] = ResolversParentTypes['TechnologyLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<TechnologyLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  projectCollection?: Resolver<Maybe<ResolversTypes['ProjectCollection']>, ParentType, ContextType, RequireFields<TechnologyLinkingCollectionsProjectCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TypographyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Typography'] = ResolversParentTypes['Typography']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<TypographyContentArgs, never>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['TypographyLinkingCollections']>, ParentType, ContextType, RequireFields<TypographyLinkedFromArgs, never>>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<TypographyReferenceArgs, never>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TypographyCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TypographyCollection'] = ResolversParentTypes['TypographyCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Typography']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TypographyLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TypographyLinkingCollections'] = ResolversParentTypes['TypographyLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<TypographyLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Asset?: AssetResolvers<ContextType>;
  AssetCollection?: AssetCollectionResolvers<ContextType>;
  AssetLinkingCollections?: AssetLinkingCollectionsResolvers<ContextType>;
  Client?: ClientResolvers<ContextType>;
  ClientCollection?: ClientCollectionResolvers<ContextType>;
  ClientLinkingCollections?: ClientLinkingCollectionsResolvers<ContextType>;
  ContentfulMetadata?: ContentfulMetadataResolvers<ContextType>;
  ContentfulTag?: ContentfulTagResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Dimension?: GraphQLScalarType;
  Entry?: EntryResolvers<ContextType>;
  EntryCollection?: EntryCollectionResolvers<ContextType>;
  HexColor?: GraphQLScalarType;
  Mockup?: MockupResolvers<ContextType>;
  MockupCollection?: MockupCollectionResolvers<ContextType>;
  MockupLinkingCollections?: MockupLinkingCollectionsResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  ProjectCollection?: ProjectCollectionResolvers<ContextType>;
  ProjectLinkingCollections?: ProjectLinkingCollectionsResolvers<ContextType>;
  ProjectTechnologiesCollection?: ProjectTechnologiesCollectionResolvers<ContextType>;
  Quality?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Structure?: StructureResolvers<ContextType>;
  StructureCollection?: StructureCollectionResolvers<ContextType>;
  StructureLinkingCollections?: StructureLinkingCollectionsResolvers<ContextType>;
  Sys?: SysResolvers<ContextType>;
  Technology?: TechnologyResolvers<ContextType>;
  TechnologyCollection?: TechnologyCollectionResolvers<ContextType>;
  TechnologyLinkingCollections?: TechnologyLinkingCollectionsResolvers<ContextType>;
  Typography?: TypographyResolvers<ContextType>;
  TypographyCollection?: TypographyCollectionResolvers<ContextType>;
  TypographyLinkingCollections?: TypographyLinkingCollectionsResolvers<ContextType>;
};

