"use client";

import dynamic from "next/dynamic";

const ProjectCard = dynamic(
  () => import("./project-card").then((mod) => mod.ProjectCard),
  { ssr: false }
);

export default ProjectCard;
