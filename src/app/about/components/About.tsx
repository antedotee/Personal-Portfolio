"use client";
import React, { useState } from "react";
import { I_About } from "@/types/project";
import { bricolage_grotesque } from "@/utils/fonts";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Badge, Separator } from "@radix-ui/themes";
import Title from "@/components/ui/Title";

const About = () => {
  const [isMore, setIsMore] = useState<boolean>(false);
  return (
    <div className="w-full px-64 max-[1285px]:px-52 max-lg:px-4 max-sm:px-5 flex flex-col items-center mt-4 pb-8">
      <Title title="The Evolution of My Tech Journey" />

      <div className="w-full pl-36 pr-28 max-sm:px-2">
        {data.slice(0, 3).map((item, idx) => (
          <div key={idx}>
            <h1
              className={`text-2xl max-sm:text-xl mt-8 font-medium ${bricolage_grotesque}`}
            >
              {item.year}
            </h1>
            <div className="flex pl-2 mt-4 bg-content">
              <div className={`w-full flex flex-col gap-3`}>
                {item.events.map((event, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 ${bricolage_grotesque}`}
                  >
                    <span>
                      <Separator
                        orientation="horizontal"
                        size="1"
                        className="w-8 bg-black dark:bg-gray-400"
                      />
                    </span>
                    <span className="text-[15px] max-sm:text-sm dark:text-[#dfdede] ">
                      {event}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div
          className={`flex justify-center mt-5 ${isMore ? "hidden" : "block"}`}
        >
          <Badge
            color="gray"
            variant="solid"
            highContrast
            onClick={() => setIsMore(true)}
            className={`text-xs max-sm:text-[10px] w-20 flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 ${bricolage_grotesque}`}
          >
            <span>See More</span>
            <span className="!ml-[-3px] mt-[1px]">
              <ChevronDownIcon className="h-3 w-3 dark:!text-black !text-white  shrink-0 text-muted-foreground transition-transform duration-200" />
            </span>
          </Badge>
        </div>

        {isMore &&
          data.slice(3).map((item, idx) => (
            <div key={idx}>
              <h1
                className={`text-2xl mt-8 font-medium ${bricolage_grotesque}`}
              >
                {item.year}
              </h1>
              <div className="flex pl-2 mt-4">
                <div
                  className={`w-full flex flex-col gap-3 ${bricolage_grotesque}`}
                >
                  {item.events.map((event, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 ${bricolage_grotesque}`}
                    >
                      <span>
                        <Separator
                          orientation="horizontal"
                          size="1"
                          className="w-8 bg-black dark:bg-gray-400"
                        />
                      </span>
                      <span className="text-[15px] dark:text-[#dfdede]">
                        {event}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

        <div
          className={`flex justify-center mt-5 ${isMore ? "block" : "hidden"}`}
        >
          <Badge
            color="gray"
            variant="solid"
            highContrast
            onClick={() => setIsMore(false)}
            className={`text-xs max-sm:text-[10px] w-20 flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 ${bricolage_grotesque}`}
          >
            <span>See Less</span>
            <span className="!ml-[-3px] mt-[1px]">
              <ChevronDownIcon className="rotate-180 h-3 w-3 dark:!text-black !text-white shrink-0 text-muted-foreground transition-transform duration-200" />
            </span>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default About;

const data: I_About[] = [
  {
    year: 2024,
    events: [
      // "Dove deep into Web Development, mastering cutting-edge technologies and building several innovative projects (and counting). 🚀",
      "Started taking learning seriously. Learning about web3 and backend development. ⛓",
      // "Proud of the progress I've made so far—each step has been a leap forward in my career.",
    ],
  },
  {
    year: 2023,
    events: [
      "Started my B.tech. Tried every new shiny thing I could lay my hands on, got to know that its just better to stick to one thing.",
    ],
  },
  {
    year: 2022,
    events: [
      "Graduated from 12th with a 91% score. 📜",
      "Gave JEE exam and failed pretty badly. I guess that is what you get when you don't study straight for 2 years.",
    ],
  },
  {
    year: 2020,
    events: [
      "Completed 10th grade with 98.2%, felt first time in life that I can do anything if I put my mind to it.",
    ],
  },
  {
    year: 2019,
    events: [
      // "Like any curious engineer, I spent my teenage years exploring, tinkering, and experimenting with technology.",
      "Started playing PUBG mobile and went into the very deep rabbit hole, practiced competitively for 2 years.",
    ],
  },
  {
    year: 2011,
    events: [
      "Discovered computers for the first time, played games on it day in and day out like IGI 2 and Counter Strike. 💻",
    ],
  },
  {
    year: 2004,
    events: [
      // "The year I was born, the first future software engineer in the family! 👶🏼 🍼",
      "Year I was born",
    ],
  },
];
