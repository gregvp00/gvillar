"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IconBrandAstro } from "@tabler/icons-react";
import { IconBrandTailwind } from "@tabler/icons-react";
import { IconBrandNextjs } from "@tabler/icons-react";
import { IconBrandDocker } from "@tabler/icons-react";
import { IconBrandNextcloud } from "@tabler/icons-react";
import { IconBrandAdobePhotoshop } from "@tabler/icons-react";
import { IconBrandDebian } from "@tabler/icons-react";
import { IconBrandGit } from "@tabler/icons-react";
import { IconBrandFigma } from "@tabler/icons-react";
import { IconBrandMysql } from "@tabler/icons-react";

export default function Carousel() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div className="slider-container w-lg [mask-image:linear-gradient(to_right,transparent,black_30%,black_70%,transparent)]">
      <Slider
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
        {...settingsNav1}
        className="text-center"
      >
        <div>
          <h3>Astro</h3>
        </div>
        <div>
          <h3>Tailwind</h3>
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
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        {...settingsNav2}
        className="items-center justify-center text-center mt-4"
      >
        <div>
          <IconBrandAstro className="color-[var(--nav-foreground)]" size={30} />
        </div>
        <div className="flex justify-center">
          <IconBrandTailwind
            className="color-[var(--nav-foreground)]"
            size={30}
          />
        </div>
        <div>
          <IconBrandNextjs
            className="color-[var(--nav-foreground)]"
            size={30}
          />
        </div>
        <div>
          <IconBrandDocker
            className="color-[var(--nav-foreground)]"
            size={30}
          />
        </div>
        <div>
          <IconBrandNextcloud
            className="color-[var(--nav-foreground)]"
            size={30}
          />
        </div>
        <div>
          <IconBrandAdobePhotoshop
            className="color-[var(--nav-foreground)]"
            size={30}
          />
        </div>
        <div>
          <IconBrandDebian
            className="color-[var(--nav-foreground)]"
            size={30}
          />
        </div>
        <div>
          <IconBrandGit className="color-[var(--nav-foreground)]" size={30} />
        </div>
        <div>
          <IconBrandFigma className="color-[var(--nav-foreground)]" size={30} />
        </div>
        <div>
          <IconBrandMysql className="color-[var(--nav-foreground)]" size={30} />
        </div>
      </Slider>
    </div>
  );
}
