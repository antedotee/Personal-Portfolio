"use client";
import Avatar from "./components/Avatar";
import ProjectCardList from "../projects/components/ProjectCardList";
import Skills from "@/components/Skills";
// import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Link as ScrollLink } from "react-scroll";
import Coursework from "@/components/Coursework";
import { inter, bricolage_grotesque } from "@/utils/fonts";
import About from "../about/components/About";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-[350px]:overflow-hidden"
    >
      <div className="w-full flex justify-center py-5 pt-36 dark:bg-black">
        <div className="w-2/3 max-sm:w-full flex flex-col items-center">
          <div>
            <Avatar />
          </div>
          <div className="mt-4 px-32 max-sm:px-4">
            <h1
              className={`!text-[3rem] mt-2 max-sm:!text-[1.6rem] !whitespace-nowrap font-bold tracking-tight text-center ${bricolage_grotesque}`}
            >
              Hi, I&apos;m Kartik Yadav👋
            </h1>

            <h1
              className={`mt-2 max-sm:mt-5 max-sm:px-3 !text-base max-sm:!text-sm text-center !font-normal !tracking-normal inter !leading-6 ${inter}`}
            >
              Full Stack Web Developer Building Impactful Web Applications. I
              specialize in creating production-ready web apps from the ground
              up, with a focus on both frontend and backend development.
              Passionate about solving real-world problems and always open to
              new challenges.
            </h1>
          </div>
          <div className="mt-10">
            <RainbowButton>
              <ScrollLink
                to="contact-section"
                activeClass="active"
                smooth={true}
                offset={-120}
                duration={1100}
              >
                Get in touch
              </ScrollLink>
            </RainbowButton>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-16">
        <ProjectCardList />
      </div>

      <div className="w-full flex justify-center mt-4">
        <Skills />
      </div>

      {/* <div className="w-full flex justify-center mt-4">
        <Experience
          company_link={"https://www.apnacollege.in/"}
          company_logo={"/company1.jpeg"}
          company_name={"Apna College"}
          duration={"Feb 2024 - June 2024"}
          job_title={"Teaching Assistant (MERN Stack)"}
          description={
            "Mentored over 5,000 students in MERN Stack development, resolving 500+ coding issues and improving understanding. Achieved an average rating of 4.75 for effective teaching and support."
          }
        />
      </div> */}

      <div className="w-full flex justify-center mt-4">
        <Education
          institute_link={
            "https://www.newtonschool.co/newton-school-of-technology-nst/home"
          }
          institute_logo={
            "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/662fd209223247bee8fb3149_NST_LOGO-01%201.svg"
          }
          course_title={"Bachelors in Computer Science"}
          ending_date={"Expected July 2027"}
          institute_name={"Newton School of Technology"}
          cgpa={9.18}
          description={
            "Doing B.Tech, excited to learn about AI and ML.In first year, I learned about frontend development. In the second year, I learned about backend development."
          }
        />
      </div>

      <div className="w-full flex justify-center mt-4">
        <Coursework />
      </div>

      <div className="w-full flex justify-center mt-4">
        <About />
      </div>

      <div className="w-full flex justify-center mt-4" id="contact-section">
        <Contact />
      </div>
    </motion.div>
  );
}