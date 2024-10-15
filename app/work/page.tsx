"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import WorkSliderBtns from "@/components/newUi/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Accounting Software",
    title: "fullsack",
    description: `จัดการข้อมูลพื้นฐาน เช่น ลูกค้า พนักงาน บริษัท สินค้า แผนก และตำแหน่ง โดยสามารถกำหนดสิทธิ์การเข้าถึงแต่ละหน้าต่างได้อย่างง่ายดาย
โปรแกรมรองรับการจัดการบัญชีธนาคารเพื่อรับเงิน ซึ่งช่วยให้การดำเนินธุรกรรมทางการเงินเป็นไปอย่างราบรื่น
ระบบทำการขายด้วยการออก ใบเสนอราคา ใบวางบิล ใบแจ้งหนี้ และใบเสร็จรับเงิน รวมถึงใบเสร็จแบบย่อสำหรับการขายสินค้าหน้าร้าน
ก่อนการออกเอกสารต่างๆ โปรแกรมจะมีการอนุมัติจากพนักงานบัญชีที่ดำรงตำแหน่งหัวหน้า เพื่อความถูกต้องและโปร่งใสในการทำงาน
มี Dashboard เพื่อรายงานผลการดำเนินงาน 
   `,
    stack: [
      { name: "React.js" },
      { name: "Tailwind" },
      { name: "Node.js" },
      { name: "MySQL" },
    ],
    image: "/assets/project1.png",
    live: "https://hubwater.netlify.app/",
    github: "https://github.com/SekToTheMoon/hubwater",
  },
];

function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-1/2">
              <div className="text-8xl  leading-none font-extrabold text-accent ">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60 font-scendary">
                {project.description}
              </p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[100px] h-[70px] rounded-2xl bg-white/5 flex justify-center items-center group">
                        <p className="text-white text-2xl group-hover:text-accent-hover">
                          Demo
                        </p>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent-hover" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Githup repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20"></div>
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">
                      <div className="relative w-full h-full">
                        <video
                          autoPlay
                          muted
                          loop
                          controls
                          className="w-full h-full object-contain"
                          src="/assets/project1.mp4"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStype="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles="text-white"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
