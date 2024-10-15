"use client";

import { motion } from "framer-motion";
import { Moirai_One } from "next/font/google";
import Image from "next/image";
function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.9, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.9, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten
          absolute"
        >
          <Image
            src="/assets/rgphoto.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain rounded-full shadow-[inset_0_-1px_20px_rgba(0,0,0,0.6)] "
          />
        </motion.div>
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] "
          fill="transparent"
          viewBox={"0 0 506 506"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx={"253"}
            cy={"253"}
            r="250"
            stroke={"#DDA0DD"}
            strokeWidth={"4"}
            strokeLinecap="round"
            strokeLinejoin={"round"}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default Photo;
