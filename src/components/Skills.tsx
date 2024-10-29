import React from "react";
import Title from "./ui/Title";
import IconCloud from "@/components/ui/icon-cloud";

const Skills = () => {
  return (
    <div className="w-2/3 max-lg:w-full max-sm:w-full flex flex-col items-center mt-4 pb-8">
      <Title title="Skills" />
      <IconCloudDemo />
    </div>
  );
};

export default Skills;

const skillSlugs = {
  NextJS: "nextdotjs",
  TypeScript: "typescript",
  React: "react",
  "Tailwind CSS": "tailwindcss",
  NodeJS: "nodedotjs",
  Express: "express",
  MongoDB: "mongodb",
  MySQL: "mysql",
  "REST APIs": "restapi",
  GitHub: "github",
  Vercel: "vercel",
  "VS Code": "visualstudiocode",
  "C++": "cplusplus",
  Java: "java",
  Redux: "redux",
  Zod: "zod",
  MUI: "mui",
  Shadcn: "shadcn",
  Remix: "remix",
  "Framer Motion": "framer",
  Python: "python",
  Streamlit: "streamlit",
  Clerk: "clerk",
  Prisma: "prisma",
  Docker: "docker",
};

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8">
      <IconCloud iconSlugs={Object.values(skillSlugs)} />
    </div>
  );
}
