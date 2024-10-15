"use client";
import { animate, motion } from "framer-motion";
import { exit } from "process";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};
const reverseIndex = (index: number) => {
  const totalSteps = 3;
  return totalSteps - index - 1;
};
function Stairs() {
  return (
    <>
      {}
      {[...Array(3)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
}

export default Stairs;