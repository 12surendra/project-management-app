import { Project } from "./types";

export const sampleProjects: Project[] = [
  {
    id: "1",
    name: "Solar Energy Farm",
    description: "A renewable energy project in California.",
    location: { lat: 34.0522, lon: -118.2437 },
    images: ["/images/project1.jpg"],
    videos: ["/videos/project1.mp4"],
  },
  {
    id: "2",
    name: "Urban Redevelopment",
    description: "Revitalizing downtown Seattle.",
    location: { lat: 47.6062, lon: -122.3321 },
    images: ["/images/project2.jpg"],
    videos: ["/videos/project2.mp4"],
  },
  {
    id: "3",
    name: "Coastal Restoration",
    description: "Restoring Florida's coastline.",
    location: { lat: 25.7617, lon: -80.1918 },
    images: ["/images/project3.jpg"],
    videos: ["/videos/project3.mp4"],
  },
];