'use client';

import { useState } from "react";
import { Project } from "../lib/types";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const [view, setView] = useState<"images" | "videos">("images");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="mb-4">
        <button
          onClick={() => setView("images")}
          className={`mr-2 p-2 ${view === "images" ? "bg-blue-500 text-white" : "bg-gray-200"} rounded`}
        >
          Images
        </button>
        <button
          onClick={() => setView("videos")}
          className={`p-2 ${view === "videos" ? "bg-blue-500 text-white" : "bg-gray-200"} rounded`}
        >
          Videos
        </button>
      </div>
      {view === "images" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((url, index) => (
            <img key={index} src={url} alt={`Project ${project.name} image`} className="w-full h-48 object-cover rounded" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.videos.map((url, index) => (
            <video key={index} controls className="w-full h-48 object-cover rounded">
              <source src={url} type="video/mp4" />
            </video>
          ))}
        </div>
      )}
    </div>
  );
}