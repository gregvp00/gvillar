import Image from "next/image";
import Nav from "../components/Nav";
import Warning from "../components/Warning";
import { projects } from "../data/pageData.js";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ]">
        <div className="flex justify-self-start items-center w-full min-h-screen border-b border-solid border-black dark:border-white">
          <section className="space-y-2">
            <h1 className="text-7xl Obaby">Gregory Villar P.</h1>
            <h3 className="text-lg max-w-lg">
              Desarrollador & diseñador web creativo y entusiasta con enfoque en
              interfaces prácticas y herramientas web.
            </h3>
          </section>
        </div>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-5xl font-medium">Projects</h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-20">
            {projects.map((data) => (
              <>
                <article
                  className="rounded-xl hover:bg-gradient-to-r hover:scale-105 bg-blur from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition-transform duration-300"
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
                          <>
                            <span
                              className={`rounded-full bg-white px-2.5 py-0.5 text-xs whitespace-nowrap ${badges.color} inline-flex items-center gap-1`}
                            >
                              <badges.componentName
                                className="color-[var(--nav-foreground)]"
                                size={20}
                                stroke={1.25}
                              />
                              {badges.name}
                            </span>
                          </>
                        ))}
                      </div>
                      <div className="flex flex-nowrap gap-1 mt-0 mb-auto">
                        {data.socials.map((socials) => (
                          <>
                            <a href={socials.href}>
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
              </>
            ))}
          </div>
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#ffffff] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
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

      <Warning />
    </div>
  );
}
