"use client";

import React from "react";
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

export default function Carousel() {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "40px",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div className="slider-container max-w-lg [mask-image:linear-gradient(to_right,transparent,black_30%,black_70%,transparent)]">
      <Slider {...settings}>
        <div>
          <IconBrandAstro className="color-[var(--nav-foreground)]" size={30} />
        </div>
        <div>
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
      </Slider>
    </div>
  );
}
