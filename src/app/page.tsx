import Image from "next/image";
import Nav from "../components/Nav";
import { projects } from "../data/pageData.js";
import { IconCode } from "@tabler/icons-react";
import { IconUserCheck } from "@tabler/icons-react";
import Carousel from "@/components/Carousel";
import SplitPage from "@/components/SplitPage";
import GitHubCalendar from "react-github-calendar";

export default function Home() {
  const explicitTheme: ThemeInput = {
    light: ["#ffffff", "#a8f0be", "#51e17c", "#1eae49", "#116329"],
    dark: ["#000000", "#103d15", "#1f7a2a", "#2fb63f", "#56d364"],
  };
  return (
    <div>
      <Nav />
      <div className="grid items-center justify-items-center min-h-screen px-8 py-12 gap-16 sm:px-20 ]">
        <div className="flex items-center w-full min-h-screen border-b border-solid border-gray-800 dark:border-gray-400">
          <section className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 justify-stretch items-center w-full">
            <div className="space-y-4">
              <h1 className="text-7xl font-[Oooh_Baby] text-[#adccc2]">
                Gregory Villar P.
              </h1>
              <h3 className="text-lg max-w-lg">
                Creative and enthusiastic web developer & designer with a focus
                on practical interfaces and web tools.
              </h3>
            </div>
            <div className="flex justify-center">
              <SplitPage />
              <div className="absolute top-1/4 w-[601px] h-[601px] bg-[repeating-linear-gradient(0deg,#99a1af_0,#99a1af_1px,transparent_1px,transparent_75px),repeating-linear-gradient(90deg,#99a1af_0,#99a1af_1px,transparent_1px,transparent_75px)]"></div>
            </div>
          </section>
        </div>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-5xl font-medium inline-flex">
            <IconCode
              className="color-[var(--foreground)] mr-4"
              size={50}
              stroke={1.5}
            />
            Projects
          </h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-20">
            {projects.map((data) => (
              <article
                className="rounded-xl hover:bg-gradient-to-r hover:scale-105 lg:opacity-75 lg:hover:opacity-100 bg-blur from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition-transform duration-300"
                key={data.id}
              >
                <div className="rounded-[10px] bg-[#303030] p-4 sm:p-6 h-full w-full">
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
                  <h5 className="mt-1 block text-xs text-[var(--nav-foreground)]">
                    {data.category}
                  </h5>
                  <a href={data.href}>
                    <h3 className="mt-0.5 text-xl font-medium text-[var(--nav-foreground-hover)]">
                      {data.title}
                    </h3>
                    <h4 className="mt-0.5 text-sm ">{data.description}</h4>
                  </a>
                  <div className="gap-4 md:gap-8 mt-4 flex flex-none justify-between">
                    <div className="flex flex-wrap gap-1.5 items-end">
                      {data.badges.map((badges) => (
                        <span
                          key={badges.id}
                          className={`rounded-full bg-white px-2.5 py-0.5 text-xs whitespace-nowrap ${badges.color} inline-flex items-center gap-1`}
                        >
                          <badges.componentName
                            className="color-[var(--nav-foreground)]"
                            size={20}
                            stroke={1.25}
                          />
                          {badges.name}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-nowrap gap-1 mt-0 mb-auto">
                      {data.socials.map((socials) => (
                        <>
                          <a href={socials.href} key={socials.id}>
                            <socials.componentName
                              className="color-[var(--nav-foreground)]"
                              size={20}
                              stroke={1.25}
                            />
                          </a>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <h1 className="text-5xl font-medium inline-flex">
            <IconUserCheck
              className="color-[var(--foreground)] mr-4"
              size={50}
              stroke={1.5}
            />
            About me
          </h1>
          <Carousel />
          <div className="border-1 border-black dark:border-gray-400 rounded-t-md p-3 bg-[var(--nav-background)]">
            <GitHubCalendar username="gregvp00" theme={explicitTheme} />
          </div>
          <h1 className="text-5xl font-medium inline-flex">
            <IconUserCheck
              className="color-[var(--foreground)] mr-4"
              size={50}
              stroke={1.5}
            />
            Let's get in touch
          </h1>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
          <div className="h-10 w-10 bg-[#adccc2]"></div>
        </footer>
      </div>
    </div>
  );
}
