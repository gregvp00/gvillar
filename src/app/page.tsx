"use client";
import { useEffect } from "react";

import Image from "next/image";
import Nav from "@/components/Nav";
import AppPreview from "@/components/AppPreview";
import CodeEditor from "@/components/CodeEditor"; // <-- 1. Importa el componente de editor de código
import AppTabs from "@/components/AppTabs"; // <-- 1. Importa el componente de pestañas
import { projects } from "@/data/pageData";
import { IconCode, IconUserCheck } from "@tabler/icons-react";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import AnimatedBlobBackground from "@/components/AnimatedBlobBackground";

export default function Home() {
  const explicitTheme = {
    light: ["#ffffff", "#a8f0be", "#51e17c", "#1eae49", "#116329"],
    dark: ["#000000", "#103d15", "#1f7a2a", "#2fb63f", "#56d364"],
  };

  // --- 2. Define el contenido para las pestañas ---
  const CodeTabPage = () => (
    <div className="text-sm">
      <CodeEditor />
    </div>
  );

  const myTabs = [
    {
      id: "app",
      label: "App Preview",
      content: <AppPreview />,
    },
    {
      id: "code",
      label: "Code",
      content: <CodeTabPage />,
    },
  ];
  // --- Fin de la definición ---

  useEffect(() => {
    const emailLink = document.getElementById("email-link");

    const handleEmailClick = () => {
      const usuario = emailLink.getAttribute("data-usuario");
      const dominio = emailLink.getAttribute("data-dominio");
      window.location.href = `mailto:${usuario}@${dominio}?subject=Consulta desde la web`;
    };

    if (emailLink) {
      emailLink.addEventListener("click", handleEmailClick);
    }

    // Limpieza: elimina el event listener cuando el componente se desmonte
    return () => {
      if (emailLink) {
        emailLink.removeEventListener("click", handleEmailClick);
      }
    };
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez

  return (
    <div>
      <Nav />
      <div className="grid items-center justify-items-center px-8 py-12 gap-16 lg:px-20">
        <div className="flex items-center w-full border-b border-solid border-gray-800 dark:border-gray-400">
          <section className="grid grid-cols-1 xl:grid-cols-2 grid-rows-1 gap-7 justify-between items-center w-full my-14">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl max-w-md lg:max-w-lg font-[Oooh_Baby] text-center lg:text-left mx-auto text-[#adccc2]">
                Gregory Villar P.
              </h1>
              <h3
                className="text-md lg:text-lg max-w-sm lg:max-w-lg text-center lg:text-left mx-auto bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "radial-gradient(59.95% 118.21% at 50% 19.91%, #adccc2 0px, #adccc2 0%, #b3b3b3 50%)",
                }}
              >
                Creative and enthusiastic web developer & designer with a focus
                on practical interfaces and web tools.
              </h3>
            </div>
            <div className="flex justify-center">
              <div className="w-full left-0 md:max-w-md aspect-[9:16] shadow-2xl bg-gray-800 border border-[#525f6f] rounded-t-lg">
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
                className="relative rounded-lg hover:-translate-y-1 lg:opacity-75 lg:grayscale lg:hover:grayscale-0 lg:hover:opacity-100 hover:p-0.75 shadow-xl transition-transform duration-300 overflow-hidden group"
                key={data.id}
              >
                {/* El fondo SVG animado */}
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
            <IconUserCheck
              className=" mr-4 text-[#d0d0d0]"
              size={50}
              stroke={1.5}
            />
            Let's get in touch
          </h1>
          <div
            id="contact"
            className="relative inline-block hover:scale-101 grayscale-75 hover:grayscale-0 duration-300 w-full"
          >
            <div className="absolute -inset-1 -z-10 rounded-md overflow-hidden bg-yellow-300">
              <AnimatedBlobBackground
                colors={{
                  first: "#525f6f",
                  second: "#ED254E",
                  third: "#FFFFFF",
                }}
              />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 my-6 mx-6">
              <Link
                href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:123b4dda-fe60-4e77-8348-974374fc767c"
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
        </main>
        <footer className="grid grid-cols-2 justify-between items-center gap-80">
          {/* <div className="border-1 border-gray-400 rounded-t-md p-3">
            <GitHubCalendar username="gregvp00" theme={explicitTheme} />
          </div>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>

          <div className="h-10 w-10 bg-[#525f6f]"></div>
          <div className="h-10 w-10 bg-[#8b3037]"></div>
          <div className="h-10 w-10 bg-[#d8cfc0]"></div>
          <div className="h-10 w-10 bg-[#adccc2]"></div> */}

          <div>
            <h3 className="">Location</h3>
            <h3 className="opacity-70">Valencia, Spain</h3>
          </div>
          <div>
            <h3 className="">Developed by Gregory Villar</h3>
            <h3 className="opacity-70">© 2025</h3>
          </div>
        </footer>
      </div>
    </div>
  );
}
