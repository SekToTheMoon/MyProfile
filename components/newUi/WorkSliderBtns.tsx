"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { Container } from "postcss";

interface workSliderType {
  containerStype: string;
  btnStyles: string;
  iconsStyles: string;
}
function WorkSliderBtns({
  containerStype,
  btnStyles,
  iconsStyles,
}: workSliderType) {
  const swiper = useSwiper();
  return (
    <div className={containerStype}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>

      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
}

export default WorkSliderBtns;
