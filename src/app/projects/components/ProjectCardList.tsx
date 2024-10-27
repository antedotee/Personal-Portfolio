import { Project } from "@/types/project";
import React from "react";
import ProjectCard from "./ProjectCard";
import Title from "@/components/ui/Title";

const ProjectCardList = () => {
  return (
    <div className="w-full px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-4 pb-8 ">
      <Title title="Projects" />
      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-2 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10 bg-content">
        {data.map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            logo={project.logo}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCardList;

const data: Project[] = [
  {
    logo: "/whiteboard.jpg",
    title: "Whiteboard",
    description:
      "Using whiteboard, you can make anything on your screen. Implemented useful functionalities like redo and undo,ability to erase and option to download the image.",
    techStack: ["React", "Rough.js", "Tailwind CSS"],
    link: "https://whiteboard-plum.vercel.app/",
    source: "https://github.com/antedotee/whiteboard",
  },
  {
    logo: "/aiportfolio.jpg",
    title: "AI Portfolio",
    description:
      "Made a chatbot application which gives answers about myself. Used Vector embeddings to store custom data.",
    techStack: ["Next JS", "Datastax", "TailwindCSS", "Framer Motion"],
    link: "https://ai-portfolio-project.vercel.app/",
    source: "https://github.com/antedotee/ai_portfolio_project",
  },
];
