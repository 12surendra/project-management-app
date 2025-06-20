export interface Project {
  id: string;
  name: string;
  description: string;
  location: {
    lat: number;
    lon: number;
  };
  images: string[];
  videos: string[];
}