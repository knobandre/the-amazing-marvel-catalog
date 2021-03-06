import { Thumbnail } from './CommonTypes';

type Series = {
  available: number;
};

type Stories = {
  available: number;
};

type Link = {
  type: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  description: string;
  resourceURI: string;
  thumbnail: Thumbnail;
  series: Series;
  stories: Stories;
  urls: Link[];
};
