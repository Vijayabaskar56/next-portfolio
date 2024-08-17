'use client';
import { TextEffect } from "@/components/ui/textEffect";
import Image from "next/image";
import Rive, { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import AnimatedBackground from "@/components/ui/animatedBackground";
import { motion } from 'framer-motion';
import { InView } from "@/components/ui/inView";
import { DialogBasicOne, DialogBasicTwo } from "@/components/DialogBase";

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
    <main className="flex  md:pl-32 flex-col items-center justify-between py-24 md:p-0 sm:w-md px-14">
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
      <section id="skills" className="w-full h-full">
        <div className='flex md:h-[500px] h-fit items-center justify-center align-middle  mt-12 pb-12'>
          <InView
            viewOptions={{ once: true, margin: '0px 0px -250px 0px'  }}
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
            className="w-full"
          >
            <div className='h-full w-full justify-center items-center align-middle columns-2 md:columns-3'>
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
                    className='mb-8 justify-center self-center align-middle items-center flex'
                  >
                    <Image
                      src={imgSrc}
                      height={0}
                      width={0}
                      alt={`Image placeholder from cosmos.so, index:${index}`}
                      className='rounded-lg w-16 h-16'
                    />
                  </motion.div>
                );
              })}
            </div>
          </InView>
        </div>
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
          className='w-96'
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
          className='w-96'
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
          className='w-96'
        >
          <div className="border-l-4 dark:border-white border-l-black px-2 my-2 flex flex-col gap-2">
            <span className="text-xl font-semibold text-green-500">SECONDARY</span>
            <p className="mx-3">Sourashtra Boys High School, Madurai</p>
            <p className="mx-3">SSC:[2018] 85.8%</p>
            <br />
          </div>
        </InView>
      </section>
      <section id="Web Projects" className="w-fit h-full">
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
          <div className='w-full flex items-center justify-between gap-10'>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: 'blur(0px)',
                },
              }}
              className={`mb-4 w-full flex flex-col items-center justify-between`}
            >
              <div className="inline-flex flex-row gap-36 justify-between align-middle  w-full">
                <div className="flex justify-start">
                  <InView
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: 0,
                      },
                      visible: {
                        opacity: 1,
                        x: 100,
                      },
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    viewOptions={{ margin: '0px 0px -350px 0px' }}
                  >
                    <div className="flex flex-col gap-1">
                      <DialogBasicOne />
                      <DialogBasicOne />
                    </div>
                  </InView>
                </div>
                <div>
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
                  >
                    <DialogBasicTwo />
                  </InView>
                </div>
              </div>
            </motion.div>
          </div>
        </InView>
      </section>
      {/* <section id="Mobilr Project">
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
          <div className='w-full flex items-center justify-between gap-10'>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: 'blur(0px)',
                },
              }}
              className={`mb-4 w-screen h-full flex flex-col items-center justify-between`}
            >
              <div className="inline-flex flex-row w-full justify-between align-middle ">
                <div className="flex justify-start">
                  <InView
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: 0,
                      },
                      visible: {
                        opacity: 1,
                        x: 100,
                      },
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    viewOptions={{ margin: '0px 0px -350px 0px' }}
                  >
                    <div className="flex flex-col justify-center">
                      <DialogBasicOne />
                      <DialogBasicOne />
                    </div>
                  </InView>
                </div>
                <div className="mr-20">
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
                  >
                    <DialogBasicTwo />
                  </InView>
                </div>
              </div>
            </motion.div>
          </div>
        </InView>
      </section> */}

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