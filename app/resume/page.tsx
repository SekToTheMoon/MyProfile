"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaPhp,
  FaPython,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiTypescript,
  SiPostman,
} from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { DiMongodb } from "react-icons/di";
const about = {
  title: "About me",
  describe: `จบจาก สาขาเทคโนโลยีสารสนเทศ วิทยาลัยเทคโนโลยีภาคตะวันออก
ปัจจุบัน กำลังศึกษาที่ คณะ วิศวกรรมศาสตร์และเทคโนโลยี   สาขา วศ.บ.วิศวกรรมคอมพิวเตอร์และปัญญาประดิษฐ์ (รอจบการศึกษา) 
มีความสนใจในตำแหน่ง Fullstack Programmer`,
  info: [
    { fieldName: "Name", fieldValue: "อัครพงศ์ สุขประเสริฐ" },
    { fieldName: "Phone", fieldValue: "(+66) 987 765 988" },
    { fieldName: "Experience", fieldValue: "0+ Years" },
    { fieldName: "Nationality", fieldValue: "Thai" },
    { fieldName: "Email", fieldValue: "Punniyom1@gmai.com" },
    { fieldName: "Languages", fieldValue: "Thai , English(B1 CEFR)" },
  ],
};

const experience = {
  icon: "",
  title: "My experience",
  description: `เป็นนักศักษาจบใหม่ แม้ว่ายังไม่มีประสบการณ์การทำงานอย่างเป็นทางการ 
  แต่ก็พัฒนาทักษะทางด้านการเขียนโปรแกรมและการพัฒนาซอฟต์แวร์ผ่านการศึกษาและการเข้าร่วมแข่งขันต่างๆ 
  ผมเชื่อว่าทักษะจะช่วยพัฒนาบริษัทได้`,
  items: [
    {
      company: "NSC 2022",
      position: "Compete in NSC (2022)",
      duration: "August - September 2022",
    },
  ],
};

const education = {
  icon: "",
  title: "My education",
  description:
    "การเดินทางทางการศึกษาของผมในด้านเทคโนโลยี ช่วยเสริมสร้างความรู้และทักษะให้พร้อมสำหรับการทำงานในอุตสาหกรรมเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็ว",
  items: [
    {
      institution: "Vocational Certificate ",
      degree: "Information Technology (IT)",
      duration: "2017",
    },
    {
      institution: "HIGH VOCATIONAL CERTIFICATE ",
      degree: "Software Development",
      duration: "2022",
    },
    {
      institution: "Bachelor of Engineering ",
      degree: "Computer and Artificial Intelligence Engineering",
      duration: "2024",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Programming, Framework, Database และ Tool ต่างๆ ผมใช้บ่อยในปัจจุบัน",
  items: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },

    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
    {
      icon: <GrOracle />,
      name: "Oracle",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <DiMongodb />,
      name: "Mongodb",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaVuejs />,
      name: "VueJS",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="font-scendary max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[162px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="font-scendary max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-nowrap">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="font-scendary max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.items.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent-hover transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="font-scendary max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.describe}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[628px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 ">{item.fieldName}</span>
                        <span className="font-scendary text-xl">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;