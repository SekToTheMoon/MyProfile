"use client";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

function page() {
  return (
    <section className="h-fll">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pd-24">
          <div className="text-center  xl:text-left order-2 xl:order-none">
            <span className="text-xl ">Software Developer</span>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h1 className="h1  font-scendary">
                สวัสดีผม <br />
                <span className="text-accent ">เสก</span>
              </h1>
            </motion.div>

            <p className="max-w-[500px] mb-9 font-scendary text-white/80">
              นี่คือการแนะนำตัวของผม
              เพื่อให้คุณได้รู้จักตัวตนและทักษะของผมมากยิ่งขึ้น
              พร้อมทั้งเปิดโอกาสให้เราได้ทำความรู้จักกันมากขึ้น
              ซึ่งผมหวังว่าจะเป็นหนึ่งในตัวเลือกที่คุณสามารถพิจารณาได้ครับ"
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a download href="/assets/Oakkharaphong sukprasroeth.pdf">
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="uppercase flex items-center gap-2"
                >
                  Download CV
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
