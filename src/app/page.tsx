'use client';
import { TextEffect } from "@/components/ui/textEffect";
import Image from "next/image";
import Rive, { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import AnimatedBackground from "@/components/ui/animatedBackground";
import { motion } from 'framer-motion';
import { InView } from "@/components/ui/inView";
import { DialogBasicOne, DialogBasicTwo } from "@/components/DialogBase";
import ThemeChanger from "@/components/ThemeSwitcher";
import { Carousel, CarouselContent, CarouselItem, CarouselNavigation } from "@/components/ui/carosol";

export default function Home() {
  const ITEMS = [
    {
      id: 1,
      title: 'Dialog',
      description: 'Enhances modal presentations.',
    },
    {
      id: 2,
      title: 'Popover',
      description: 'For small interactive overlays.',
    },
    {
      id: 3,
      title: 'Accordion',
      description: 'Collapsible sections for more content.',
    },
    {
      id: 4,
      title: 'Collapsible',
      description: 'Collapsible sections for more content.',
    },
    {
      id: 5,
      title: 'Drag to Reorder',
      description: 'Reorder items with drag and drop.',
    },
    {
      id: 6,
      title: 'Swipe to Delete',
      description: 'Delete items with swipe gestures.',
    },
  ];

  return (
    <main className="flex  md:pl-32 pl-24 flex-col items-center justify-between py-24 md:p-0 sm:w-md md:px-14 px-7">
      <section id='hero' className="grid grid-cols-1 my-auto lg:grid-cols-2 w-sm md:w-full align-middle justify-center items-center h-screen">
        <div className="justify-center text-left sm:justify-center">
          <h1 className="text-5xl font-bold font-prospec">
            Hi👋, I am <br />{" "}
            <TextEffect per='char' preset='fade' className="text-green-500 font-extrabold font-prospec">
              Vijaya baskar
            </TextEffect>
            <TextEffect per='word' as='p' preset='blur' className="pt-6 font-sans w-fit text-base dark:text-neutral-400">
              a Full Stack Developer from India.
              Learning, Exploring and Experience Something New Everyday.
            </TextEffect>
            {/* </span> */}
          </h1>
        </div>
        <div className="md:flex items-center md:visible justify-center">
          <div className="md:w-[30rem] h-80 sm:display-none">
            <Rive src='https://utfs.io/f/f9a951bf-d89f-49f4-a8e1-9ee07c65ee9f-v45c7x.riv' layout={new Layout({ fit: Fit.Contain, alignment: Alignment.TopCenter })} />
          </div>
        </div>
      </section>
      <TextEffect per='char' as="h1" preset='fade' className="text-green-500 font-extrabold text-2xl font-prospec">
        SKILL & Tools
      </TextEffect>
      <section id="skills" className="md:w-[800px] w-full md:px-10 h-full">
        <InView
          viewOptions={{ once: true, margin: '0px 0px -250px 0px' }}
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
            className='rounded-lg w-full bg-green-500 dark:bg-green-500'
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6,
            }}
            enableHover
          >
            {[
              'next.svg',
              'graphql.svg',
              'typescript.svg',
              'node.svg',
              'react.svg',
              'tailwind.svg',
              'mysql.svg',
              'mongodb.svg',
              'java.svg',
              'html.svg',
              'css3.svg',
              'git.svg',
              'bootstrap.svg',
              'php.svg',
              'figma.svg'
            ].map((imgSrc, index) => {
              return (
                <div key={index} data-id={`card-${index}`} className="text-center p-6 col">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        filter: 'blur(0px)',
                      },
                    }}
                    key={index}
                    className='mb-4 bg-black dark:bg-white'
                  >
                    <div className='rounded-sm'>
                      <h3 className='text-base font-medium text-zinc-800 dark:text-zinc-50'>
                        next.svg
                      </h3>
                      <Image
                        src={imgSrc}
                        height={0}
                        width={0}
                        alt={`Image placeholder from cosmos.so, index:${index}`}
                        className='rounded w-20 h-20'
                      />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </AnimatedBackground>
        </InView>
      </section>
      <TextEffect per='char' as="h1" preset='fade' className="text-green-500 font-extrabold text-2xl font-prospec">
        Education
      </TextEffect>
      <section id="education" className="w-full my-10 flex flex-col justify-start items-start">
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
          className='w-fit max-w-96'
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -150px 0px' }}
        >
          <div className="border-l-4 dark:border-white border-l-black px-2 my-2 flex flex-col gap-2">
            <span className="text-xl font-semibold text-green-500">SECONDARY</span>
            <p className="mx-3">Sourashtra Boys High School, Madurai</p>
            <p className="mx-3">SSC:[2018] 85.8%</p>
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
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -150px 0px' }}
          className='w-fit max-w-96'
        >
          <div className="border-l-4 dark:border-white border-l-black px-2 my-2 flex flex-col gap-2">
            <span className="text-xl font-semibold text-green-500">SECONDARY</span>
            <p className="mx-3">Sourashtra Boys High School, Madurai</p>
            <p className="mx-3">SSC:[2018] 85.8%</p>
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
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -150px 0px' }}
          className='w-fit max-w-96'
        >
          <div className="border-l-4 dark:border-white border-l-black px-2 my-2 flex flex-col gap-2">
            <span className="text-xl font-semibold text-green-500">SECONDARY</span>
            <p className="mx-3">Sourashtra Boys High School, Madurai</p>
            <p className="mx-3">SSC:[2018] 85.8%</p>
            <br />
          </div>
        </InView>
      </section>
      <TextEffect per='char' as="h1" preset='fade' className="text-green-500 font-extrabold text-3xl mb-3 font-prospec">
        Mobile Project
      </TextEffect>
      <section id="Mobilr Project" className="max-w-[890px]">
        <InView
          viewOptions={{ once: true, margin: '0px 0px -250px 0px' }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
              width: '100%',
            },
          }}
          className="w-fit justify-center flex"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
              visible: {
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
                width: '100%',
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
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              viewOptions={{ margin: '0px 0px -350px 0px' }}
              className="w-fit flex md:flex-row flex-col h-full justify-between  gap-10"
            >
              <DialogBasicTwo />
              <DialogBasicTwo />
              <DialogBasicTwo />
            </InView>
          </motion.div>
        </InView>
      </section>
      <TextEffect per='char' as="h1" preset='fade' className="text-green-500 font-extrabold text-3xl mb-3 font-prospec">
        Mobile Project
      </TextEffect>
      <section id="Mobilr Project" className="max-w-[890px]">
        <InView
          viewOptions={{ once: true, margin: '0px 0px -250px 0px' }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
              width: '100%',
            },
          }}
          className="w-fit justify-center flex"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
              visible: {
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
                width: '100%',
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
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              viewOptions={{ margin: '0px 0px -350px 0px' }}
              className="w-fit flex md:flex-row flex-col h-full justify-between  gap-10"
            >
              <DialogBasicTwo />
              <DialogBasicTwo />
              <DialogBasicTwo />
            </InView>
          </motion.div>
        </InView>
      </section>
      <section>
        <div className='grid grid-cols-2 p-10 md:grid-cols-3'>
          <AnimatedBackground
            className='rounded-lg bg-green-500 dark:bg-zinc-800'
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6,
            }}
            enableHover
          >
            {ITEMS.map((item, index) => (
              <div key={index} data-id={`card-${index}`} className="p-7">
                <div className='flex select-none flex-col space-y-1 p-4 w-full h-full bg-black rounded-sm'>
                  <h3 className='text-base font-medium text-zinc-800 dark:text-zinc-50'>
                    {item.title}
                  </h3>
                  <p className='text-base text-zinc-600 dark:text-zinc-400'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </AnimatedBackground>
        </div>
      </section>
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
    </main>
  );
}


// <div className="border-l-4 border-l-black dark:border-white px-2 my-2 flex flex-col">
// <span className="text-xl font-semibold text-green-500">HIGHER SECONDARY</span>
// <p className="mx-3">Sourashtra Boys High School, Madurai</p>
// <p className="mx-3">HSC Science:[2018] 61%</p>
// <br />
// </div>
// <div className="border-l-4 border-l-black px-2 my-2 flex dark:border-white flex-col">
// <span className="text-xl font-semibold text-green-500">BSc IT</span>
// <p className="mx-3">The Madura College, Madurai</p>
// <p className="mx-3">[2018] 92%</p>
// </div>