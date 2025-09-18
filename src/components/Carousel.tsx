"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  IconBrandAstro,
  IconBrandTailwind,
  IconBrandNextjs,
  IconBrandDocker,
  IconBrandNextcloud,
  IconBrandAdobePhotoshop,
  IconBrandDebian,
  IconBrandGit,
  IconBrandFigma,
  IconBrandMysql,
} from "@tabler/icons-react";

export default function Carousel() {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const settingsNav1 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };

  const settingsNav2 = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div className="items-center justify-center text-center slider-container w-lg mask-[linear-gradient(to_right,transparent,black_30%,black_70%,transparent)]">
      <Slider asNavFor={nav2 as Slider} ref={sliderRef1} {...settingsNav1}>
        <div>
          <h3>Astro</h3>
        </div>
        <div>
          <h3>TailwindCSS</h3>
        </div>
        <div>
          <h3>Next.js</h3>
        </div>
        <div>
          <h3>Docker</h3>
        </div>
        <div>
          <h3>Nextcloud</h3>
        </div>
        <div>
          <h3>Adobe Photoshop</h3>
        </div>
        <div>
          <h3>Debian</h3>
        </div>
        <div>
          <h3>Git</h3>
        </div>
        <div>
          <h3>Figma</h3>
        </div>
        <div>
          <h3>MySQL</h3>
        </div>
      </Slider>
      <Slider
        asNavFor={nav1 as Slider}
        ref={sliderRef2}
        {...settingsNav2}
        className="mt-4"
      >
        <IconBrandAstro className="" size={30} />
        <IconBrandTailwind className="" size={30} />
        <IconBrandNextjs className="" size={30} />
        <IconBrandDocker className="" size={30} />
        <IconBrandNextcloud className="" size={30} />
        <IconBrandAdobePhotoshop className="" size={30} />
        <IconBrandDebian className="" size={30} />
        <IconBrandGit className="" size={30} />
        <IconBrandFigma className="" size={30} />
        <IconBrandMysql className="" size={30} />
      </Slider>
    </div>
  );
}
