"use client";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import AppPreview from "@/components/AppPreview";
import CodeEditor from "@/components/CodeEditor";
import AppTabs from "@/components/AppTabs";
import { projects } from "@/data/pageData";
import { IconCode, IconUserCheck, IconPhoneRinging } from "@tabler/icons-react";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import AnimatedBlobBackground from "@/components/AnimatedBlobBackground";
import ContactForm from "@/components/Form";
import FluidBackground from "@/components/FluidBackground";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1536);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const explicitTheme = {
    light: ["#ffffff", "#a8f0be", "#51e17c", "#1eae49", "#116329"],
    dark: ["#000000", "#103d15", "#1f7a2a", "#2fb63f", "#56d364"],
  };

  const animatedRefs = useRef<Map<string, Element | null>>(new Map());

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-10% 0px -10% 0px", // Se activa cuando está más centrado
      threshold: window.innerWidth < 1024 ? [0.1, 0.3, 0.5, 0.7] : 0.2,
    };

    const observerCallback: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        const ratio = entry.intersectionRatio;

        if (window.innerWidth < 1024) {
          // Efecto progresivo para móvil basado en cuánto está visible
          if (ratio > 0.5) {
            // Totalmente activo cuando más del 50% está visible
            element.classList.remove("opacity-75", "grayscale-50", "p-0");
            element.classList.add("opacity-100", "grayscale-0", "p-0.75");
            element.style.transform = "scale(1.02)"; // Pequeño zoom
          } else if (ratio > 0.2) {
            // Parcialmente activo
            element.classList.remove("opacity-75", "grayscale-50", "p-0");
            element.classList.add("opacity-90", "grayscale-25");
            element.style.transform = "scale(1.01)";
          } else {
            // Estado inicial
            element.classList.remove(
              "opacity-100",
              "opacity-90",
              "grayscale-0",
              "grayscale-25",
              "p-0.75"
            );
            element.classList.add("opacity-75", "grayscale-50", "p-0");
            element.style.transform = "scale(1)";
          }
        } else {
          // Comportamiento original para desktop
          if (entry.isIntersecting) {
            element.classList.remove("opacity-75", "grayscale");
            element.classList.add("opacity-100", "grayscale-0");
            observer.unobserve(entry.target);
          }
        }
      });
    };
    const emailLink = document.getElementById(
      "email-link"
    ) as HTMLElement | null;

    const handleEmailClick = (event: Event) => {
      const el = event.currentTarget as HTMLElement | null;
      if (!el) return;
      const usuario = el.getAttribute("data-usuario") ?? "";
      const dominio = el.getAttribute("data-dominio") ?? "";
      if (!usuario || !dominio) return;
      window.location.href = `mailto:${usuario}@${dominio}?subject=Consulta desde la web`;
    };

    if (emailLink) {
      emailLink.addEventListener("click", handleEmailClick);
    }

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    animatedRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      if (emailLink) {
        emailLink.removeEventListener("click", handleEmailClick);
      }
      observer.disconnect();
    };
  }, []);

  const CodeTabPage = () => (
    <div className="text-sm">
      <CodeEditor />
    </div>
  );

  const myTabs = [
    {
      id: "app",
      label: "Demo Preview",
      content: <AppPreview />,
    },
    {
      id: "code",
      label: "Code",
      content: <CodeTabPage />,
    },
  ];

  return (
    <div>
      {isMobile ? <MobileNav /> : <Nav />}
      <div className="grid items-center justify-items-center px-8 py-12 gap-16 lg:px-20">
        <div className="flex items-center w-full border-b border-solid border-gray-800 dark:border-gray-400">
          <section className="grid grid-cols-1 xl:grid-cols-2 grid-rows-1 gap-7 justify-between items-center w-full my-14">
            <div className="space-y-4 mb-12">
              <h1 className="text-6xl lg:text-7xl max-w-md lg:max-w-lg font-[Oooh_Baby] text-center lg:text-center mx-auto text-[#adccc2]">
                Gregory Villar P.
              </h1>
              <h3
                className="text-md lg:text-lg max-w-sm lg:max-w-lg text-center lg:text-center mx-auto bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "radial-gradient(59.95% 118.21% at 50% 19.91%, #adccc2 0px, #adccc2 0%, #b3b3b3 50%)",
                }}
              >
                Creative and enthusiastic web developer & designer with a focus
                on practical interfaces and web tools.
              </h3>
              <Link
                href="#contact"
                className="flex w-56 mx-auto items-center cursor-pointer [text-shadow:2px_2px_3px_rgba(0,0,0,0.4)] bg-[#d8cfc0] hover:bg-[#e6ddce] rounded-lg p-2 text-md py-2 px-4 text-gray-800 hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] transition-all duration-50 border-1 shadow-white/70"
              >
                <IconPhoneRinging
                  className="mr-4 text-gray-700"
                  size={30}
                  stroke={1.5}
                />
                Let's get in touch
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="w-full left-0 md:max-w-md shadow-2xl bg-gray-800 border border-[#525f6f] rounded-t-lg">
                <AppTabs tabs={myTabs} initialTabId="app" />
              </div>
            </div>
          </section>
        </div>

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1
            id="projects"
            className="text-5xl font-medium inline-flex bg-clip-text bg-[linear-gradient(91deg,#474747_0%,#d0d0d0_55%,#474747_100%)] text-transparent"
          >
            <IconCode className="mr-4 text-[#d0d0d0]" size={50} stroke={1.5} />
            Projects
          </h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-8 lg:mx-20">
            {projects.map((data) => (
              <article
                key={data.id}
                ref={(element) => {
                  animatedRefs.current.set(String(data.id), element);
                }}
                className="relative rounded-lg opacity-75 grayscale-50 lg:hover:grayscale-0 lg:hover:opacity-100 p-0 hover:p-0.75 transition-all shadow-xl duration-100 overflow-hidden group"
              >
                <div className="absolute -z-10 bg-[#8b3037] inset-0">
                  <AnimatedBlobBackground />
                </div>

                <div className="rounded-lg bg-[#303030] p-4 sm:p-6 h-full w-full justify-between flex flex-col relative z-10">
                  <div>
                    <a
                      style={{ display: "flex", flexDirection: "column" }}
                      href={data.href}
                    >
                      <Image
                        src={data.src}
                        alt={data.alt}
                        width={1500}
                        height={1500}
                        sizes="(max-width: 768px) 80vw, 450px"
                        className="w-full h-auto object-cover rounded-t-md"
                      />
                    </a>
                    <h5 className="mt-1 block text-xs">{data.category}</h5>
                  </div>
                  <div>
                    <a href={data.href}>
                      <h3 className="mt-0.5 text-xl font-medium">
                        {data.title}
                      </h3>
                      <h4 className="mt-0.5 text-sm ">{data.description}</h4>
                    </a>
                  </div>
                  <div className="gap-4 lg:gap-8 mt-4 flex flex-none justify-between">
                    <div className="flex flex-wrap gap-1.5 items-end">
                      {data.badges.map((badges) => (
                        <span
                          key={badges.id}
                          className={`rounded-full bg-white px-2.5 py-0.5 text-xs whitespace-nowrap ${badges.color} inline-flex items-center gap-1`}
                        >
                          <badges.componentName
                            className=""
                            size={20}
                            stroke={1.25}
                          />
                          {badges.name}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-nowrap gap-1 mt-0 mb-auto">
                      {data.socials.map((socials) => (
                        <a href={socials.href} key={socials.id}>
                          <socials.componentName
                            className=""
                            size={20}
                            stroke={1.25}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <h1
            id="about"
            className="text-5xl font-medium inline-flex bg-clip-text bg-[linear-gradient(91deg,#474747_0%,#d0d0d0_60%,#474747_100%)] text-transparent"
          >
            <IconUserCheck
              className=" mr-4 text-[#d0d0d0]"
              size={50}
              stroke={1.5}
            />
            About me
          </h1>
          <div className="flex flex-col gap-2 text-md max-w-2xl">
            <p>My name is Gregory, and I'm a 24-year-old working student.</p>
            <p>
              My passion for technology began at a young age, It has been fueled
              by a continuous desire to learn through creation, making servers,
              building computers and developing practical ideas. Each project
              serves as an opportunity to learn and refine my skills.
            </p>
            <p>
              Currently, my goal is to enter into the IT industry and deepen my
              expertise in a specialized area to become a more proficient and
              impactful developer.
            </p>
          </div>
          <Carousel />

          <h1 className="text-5xl font-medium inline-flex bg-clip-text bg-[linear-gradient(91deg,#474747_0%,#d0d0d0_55%,#474747_100%)] text-transparent">
            <IconPhoneRinging
              className=" mr-4 text-[#d0d0d0]"
              size={50}
              stroke={1.5}
            />
            Let's get in touch
          </h1>
          <div
            id="contact"
            className="relative inline-block hover:scale-101  duration-300 w-full"
          >
            <div className="absolute -inset-1 -z-10 rounded-md overflow-hidden bg-yellow-300 grayscale-50">
              <AnimatedBlobBackground
                colors={{
                  first: "#525f6f",
                  second: "#ED254E",
                  third: "#FFFFFF",
                }}
              />
            </div>
            <div className="mx-auto mt-6">
              <ContactForm />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 my-6 mx-6">
              <Link
                href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:ad63d264-d78b-432d-ac1f-ebe272684569"
                className="relative [text-shadow:2px_2px_4px_rgba(0,0,0,1)] bg-black/80 rounded-lg p-2 text-xl py-2 px-4 text-white hover:-translate-y-1 transition-transform duration-200 shadow-lg shadow-black/70"
              >
                Download my resume
              </Link>
              <button
                id="email-link"
                data-usuario="contact"
                data-dominio="gregvillar.com"
                className="relative cursor-pointer [text-shadow:2px_2px_4px_rgba(0,0,0,1)] bg-red-700/80 rounded-lg p-2 text-xl py-2 px-4 text-white hover:-translate-y-1 transition-transform duration-200 shadow-lg shadow-black/70"
              >
                Send me an email
              </button>
              <Link
                href="https://calendly.com/gregvp002/30min"
                className="relative [text-shadow:2px_2px_4px_rgba(0,0,0,1)] bg-blue-700/80 rounded-lg p-2 text-xl py-2 px-4 text-white hover:-translate-y-1 transition-transform duration-200 shadow-lg shadow-black/70"
              >
                Schedule a meeting
              </Link>
            </div>
          </div>
          <div className="fixed -z-10 top-0 left-0 w-screen h-screen opacity-15">
            <FluidBackground
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              mouseForce={20}
              cursorSize={100}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.2}
              isBounce={true}
              autoDemo={true}
              autoSpeed={0.2}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </div>
        </main>
        <footer className="grid grid-cols-2 w-full">
          <div className="justify-self-start text-left">
            <h3>Location</h3>
            <h3 className="opacity-70">Valencia, Spain</h3>
          </div>
          <div className="justify-self-end text-right">
            <h3>Developed by Gregory Villar</h3>
            <h3 className="opacity-70">© 2025</h3>
          </div>
        </footer>
      </div>
    </div>
  );
}
