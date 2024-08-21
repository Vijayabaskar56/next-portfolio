"use client";
import { TextEffect } from "@/components/ui/textEffect";
import AnimatedBackground from "@/components/ui/animatedBackground";
import { motion } from "framer-motion";
import { InView } from "@/components/ui/inView";
import { ProjectCard } from "@/components/DialogBase";
import { Separator } from "@/components/ui/separator";
import { MOBILEPROJECTS, WEBPROJECTSONE, WEBPROJECTSTWO } from "./data";
import { useRive } from "@rive-app/react-canvas";
import { Bootstrap, CSSSVG, FigmaSVg, GitSvg, GraphqlSvg, HtmlSvg, JavascriptSvg, JavaSVG, MongodbSvg, MySQLSvg, NextJsSvg, NodeSvg, PHP, ReactSvg, Tailwind, TypeScriptSvg } from "@/svg";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNavigation,
// } from "@/components/ui/carosol";

export default function Home() {
  const { rive, RiveComponent } = useRive({
    src: "https://utfs.io/f/f9a951bf-d89f-49f4-a8e1-9ee07c65ee9f-v45c7x.riv",
    autoplay: true,
    artboard: "Laptop",
    animations: ["Turn-copy"],
  });

  return (
    <main className="flex  md:pl-32 pl-24 flex-col items-center justify-between py-24 md:p-0 sm:w-md md:px-14 px-7">
      <section
        id="hero"
        className="grid grid-cols-1 my-auto lg:grid-cols-2 w-sm md:w-full align-middle justify-center items-center h-screen"
      >
        <div className="justify-center text-left sm:justify-center">
          <h1 className="text-5xl font-bold font-prospec">
            Hi👋, I am <br />{" "}
            <TextEffect
              per="char"
              preset="fade"
              className="text-green-500 font-extrabold font-prospec"
            >
              Vijaya baskar
            </TextEffect>
            <TextEffect
              per="word"
              as="p"
              preset="blur"
              className="pt-6 font-sans w-fit text-base dark:text-neutral-400"
            >
              a Full Stack Developer from India. Learning, Exploring and
              Experience Something New Everyday.
            </TextEffect>
          </h1>
        </div>
        <div className="md:flex items-center md:visible justify-center">
          <div className="md:w-[30rem] h-80 sm:display-none">
            <RiveComponent />
          </div>
        </div>
      </section>
      <div className="flex items-start justify-start w-full">
        <h1 className="text-green-500 font-extrabold text-5xl font-prospec text-left">
          SKILL & <br />
          {""}
          Tools
        </h1>
      </div>
      <section id="skills" className="md:w-[800px] my-10 w-full md:px-10 h-full">
        <InView
          viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          <AnimatedBackground
            className="rounded-lg w-full fill-green-500 bg-green-400 dark:bg-green-500 text-transparent"
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.6,
            }}
            enableHover
          >
            {[
              [<HtmlSvg key={1} className="rounded w-20 h-20 fill-inherit" pathClassName=""/>, "HTML"],
              [<CSSSVG key={2} className="rounded w-20 h-20 fill-inherit" pathClassName=""/>, "CSS"],
              [<JavascriptSvg key={3} className="rounded w-20 h-20 fill-inherit" pathClassName=""/>, "Javascript"],
              [<TypeScriptSvg key={4} className="rounded w-20 h-20 fill-inherit" pathClassName=""/>, "Typescript"],
              [<ReactSvg key={5} className="rounded w-20 h-20 fill-inherit" pathClassName=""/>, "React JS"],
              [<Tailwind key={6} className="rounded w-20 h-20 fill-inherit" pathClassName=""/>, "Tailwind"],
              [<Bootstrap key={7} className="rounded w-20 h-20 fill-inherit" pathClassName=""/>, "Bootstrap"],
              [<NextJsSvg key={8} className="rounded w-20 h-20 fill-inherit" pathClassName="rounded w-20 h-20 fill-inherit"/>, "Next JS"],
              [<NodeSvg key={9} className="rounded w-20 h-20 fill-inherit" pathClassName=""/>, "Node JS"],
              [<GraphqlSvg key={10} className="rounded w-20 h-20 fill-inherit" pathClassName=""/>, "GraphQL"],
              [<MySQLSvg key={11} className="rounded w-20 h-20 fill-inherit" pathClassName=""/>, "MySQL"],
              [<MongodbSvg key={12} className="rounded w-20 h-20 fill-inherit" pathClassName=""/>, "MongoDB"],
              [<JavaSVG key={13} className="rounded w-20 h-20 fill-inherit" pathClassName=""/>, "Java"],
              [<GitSvg key={14} className="rounded w-20 h-20 fill-inherit" pathClassName=""/>, "Git"],
              [<PHP key={15} className="rounded w-20 h-20 fill-inherit" pathClassName=""/>, "PHP"],
              [<FigmaSVg key={15} className="rounded w-20 h-20 fill-inherit" pathClassName=""/>, "Figma"],
            ].map((v, index) => {
              return (
                <div
                  key={index}
                  data-id={`card-${index}`}
                  className="text-center aria-selected:fill-green-400 aria-selected:text-green-400  fill-black text-black"
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                      },
                    }}
                    key={index}
                    className="mb-4  fill-inherit text-inherit bg-zinc-100/70 border-zinc-800 border-4 rounded-lg p-6 m-3"
                  >
                    <div className="rounded-sm fill-inherit text-inherit">
                      <h3 className="text-base font-medium bg-transparent text-inherit">
                        {v[1]}
                      </h3>
                      {v[0]}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </AnimatedBackground>
        </InView>
      </section>
      <div className="flex items-start justify-start w-full">
        <h1 className="text-green-500 font-extrabold text-5xl font-prospec text-left">
          EDUCATION <br />
          {""}
        </h1>
      </div>
      <section
        id="education"
        className="w-full my-10 flex flex-col justify-start items-start"
      >
        <InView
          variants={{
            hidden: {
              opacity: 0,
              scale: 1.5,
            },
            visible: {
              opacity: 1,
              scale: 1,
            },
          }}
          className="w-fit max-w-96"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewOptions={{ margin: "0px 0px -150px 0px" }}
        >
          <div className="border-l-4 dark:border-white border-l-black px-2 my-2 flex flex-col gap-2">
            <span className="text-xl font-semibold text-green-500">
              SECONDARY
            </span>
            <p className="mx-3">Sourashtra Boys High School, Madurai</p>
            <p className="mx-3">Completed in 2018 with 85.8%</p>
            <br />
          </div>
        </InView>
        <InView
          variants={{
            hidden: {
              opacity: 0,
              scale: 1.5,
            },
            visible: {
              opacity: 1,
              scale: 1,
            },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewOptions={{ margin: "0px 0px -150px 0px" }}
          className="w-fit max-w-96"
        >
          <div className="border-l-4 dark:border-white border-l-black px-2 my-2 flex flex-col gap-2">
            <span className="text-xl font-semibold text-green-500">
              HIGHER SECONDARY
            </span>
            <p className="mx-3">Sourashtra Boys High School, Madurai</p>
            <p className="mx-3">Completed in 2020 with 61%</p>
            <br />
          </div>
        </InView>
        <InView
          variants={{
            hidden: {
              opacity: 0,
              scale: 1.5,
            },
            visible: {
              opacity: 1,
              scale: 1,
            },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewOptions={{ margin: "0px 0px -150px 0px" }}
          className="w-fit max-w-96"
        >
          <div className="border-l-4 dark:border-white border-l-black px-2 my-2 flex flex-col gap-2">
            <span className="text-xl font-semibold text-green-500">
              B.SC IT
            </span>
            <p className="mx-3">The Madura College, Madurai</p>
            <p className="mx-3">Completed in 2023 with 73.6%</p>
            <br />
          </div>
        </InView>
      </section>
      <div className="flex items-start justify-start w-full">
        <h1 className="text-green-500 font-extrabold text-5xl font-prospec text-left">
          Web Projects
        </h1>
      </div>
      <section id="Web Projects" className="w-11/12 my-10">
        <InView
          viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
              width: "100%",
            },
          }}
          className="w-fit justify-center flex"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
              visible: {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                width: "100%",
              },
            }}
            className={`mb-4 w-fit h-full flex flex-col items-center gap-20 justify-center`}
          >
            <InView
              variants={{
                hidden: {
                  opacity: 0,
                  x: 100,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewOptions={{ margin: "0px 0px -350px 0px" }}
              className="w-fit flex md:flex-row flex-col h-full justify-between  gap-10"
            >
              {WEBPROJECTSONE.map((v, index) => {
                return <ProjectCard key={index} {...v} />;
              })}
            </InView>
            <InView
              variants={{
                hidden: {
                  opacity: 0,
                  x: 100,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewOptions={{ margin: "0px 0px -350px 0px" }}
              className="w-fit flex md:flex-row flex-col h-full justify-between  gap-10"
            >
              {WEBPROJECTSTWO.map((v, index) => {
                return <ProjectCard key={index} {...v} />;
              })}
            </InView>
          </motion.div>
        </InView>
      </section>
      <div className="flex items-start justify-start w-full">
        <h1 className="text-green-500 font-extrabold text-5xl font-prospec text-left">
          Mobile Projects
        </h1>
      </div>
      <section id="Mobilr Project" className="w-11/12 my-10">
        <InView
          viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
              width: "100%",
            },
          }}
          className="w-fit justify-center flex"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
              visible: {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                width: "100%",
              },
            }}
            className={`mb-4 w-fit h-full flex flex-col items-center justify-center`}
          >
            <InView
              variants={{
                hidden: {
                  opacity: 0,
                  x: 100,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewOptions={{ margin: "0px 0px -350px 0px" }}
              className="w-fit flex md:flex-row flex-col h-full justify-between  gap-10"
            >
              {MOBILEPROJECTS.map((v, index) => {
                return <ProjectCard key={index} {...v} />;
              })}
            </InView>
          </motion.div>
        </InView>
      </section>
      {/* <section className="w-10/12 h-fit">
        <div className='relative w-full px-4'>
          <Carousel>
            <CarouselContent className='-ml-4'>
              <CarouselItem className='basis-1/3 pl-4'>
                <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                  1
                </div>
              </CarouselItem>
              <CarouselItem className='basis-1/3 pl-4'>
                <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                  2
                </div>
              </CarouselItem>
              <CarouselItem className='basis-1/3 pl-4'>
                <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                  3
                </div>
              </CarouselItem>
              <CarouselItem className='basis-1/3 pl-4'>
                <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                  4
                </div>
              </CarouselItem>
              <CarouselItem className='basis-1/3 pl-4'>
                <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                  5
                </div>
              </CarouselItem>
              <CarouselItem className='basis-1/3 pl-4'>
                <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                  6
                </div>
              </CarouselItem>
              <CarouselItem className='basis-1/3 pl-4'>
                <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                  7
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselNavigation
              className='absolute -bottom-14 left-auto top-auto w-full justify-end gap-2'
              classNameButton='bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800'
              alwaysShow
            />
          </Carousel>
        </div>
      </section> */}
      <section className="w-full h-28  flex justify-center items-center ">
        <footer className="w-10/12 flex flex-col justify-center items-center">
          <section className="text-center m-4 w-full">
            <Separator className="bg-green-600 text-center mb-4" />
            Crafted with ❤️ by Vijaya baskar
            <p>&copy; 2024 vijayabaskar 2024.</p>
          </section>
        </footer>
      </section>
    </main>
  );
}
