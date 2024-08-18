import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from '@/components/ui/dialog';
import { MousePointer, PlusIcon } from 'lucide-react';
import twitterImage from '../../public/Twitter-Clone.png';
import { Cursor } from './ui/cursor';
import { useState } from 'react';
import { TransitionPanel } from './ui/transistionPanel';


export function DialogBasicOne({ className }: { className?: string }) {
  return (
    <Dialog
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: '12px',
        }}
        className={className}
      >
        <DialogImage
          src='https://utfs.io/f/53030c8a-9c40-4981-ad5b-4414bee08939-plyu9p.png'
          alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
          className='w-full object-contain'
        />
        <div className='flex flex-grow flex-row items-end justify-between p-2'>
          <div>
            <DialogTitle className='text-zinc-950 dark:text-zinc-50'>
              EB27
            </DialogTitle>
            <DialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
              Edouard Wilfrid Buquet
            </DialogSubtitle>
          </div>
          <button
            type='button'
            className='relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500'
            aria-label='Open dialog'
          >
            <PlusIcon size={12} />
          </button>
        </div>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: '24px',
          }}
          className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
        >
          <DialogImage
            src="https://utfs.io/f/53030c8a-9c40-4981-ad5b-4414bee08939-plyu9p.png"
            alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
            className='h-full w-full'
          />
          <div className='p-6'>
            <DialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
              EB27
            </DialogTitle>
            <DialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
              Edouard Wilfrid Buquet
            </DialogSubtitle>
            <DialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
                Little is known about the life of Édouard-Wilfrid Buquet. He was
                born in France in 1866, but the time and place of his death is
                unfortunately a mystery.
              </p>
              <p className='text-zinc-500'>
                Research conducted in the 1970s revealed that he’d designed the
                “EB 27” double-arm desk lamp in 1925, handcrafting it from
                nickel-plated brass, aluminium and varnished wood.
              </p>
              <a
                className='mt-2 inline-flex text-zinc-500 underline'
                href='https://www.are.na/block/12759029'
                target='_blank'
                rel='noopener noreferrer'
              >
                Are.na block
              </a>
            </DialogDescription>
          </div>
          <DialogClose className='text-zinc-50' />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
}
export function DialogBasicTwo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ITEMS = [
    {
      title: 'Aesthetics',
      subtitle: 'Refining Visual Harmony',
      content:
        'Explore the principles of motion aesthetics that enhance the visual appeal of interfaces. Learn to balance timing, easing, and the flow of motion to create seamless user experiences.',
    },
    {
      title: 'Art',
      subtitle: 'Narrative and Expression',
      content:
        'Delve into how motion can be used as an artistic tool to tell stories and evoke emotions, making digital interactions feel more human and expressive.',
    },
    {
      title: 'Technique',
      subtitle: 'Mastering Motion Tools',
      content:
        'Gain proficiency in advanced techniques such as physics-based animations, 3D transformations, and complex sequencing to elevate your design skills and implementation.',
    },
  ];
  return (
    <Dialog
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: '12px',
        }}
        className='flex  max-w-[400px] max-h-[400px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
      >
        <DialogImage
          src='https://utfs.io/f/53030c8a-9c40-4981-ad5b-4414bee08939-plyu9p.png'
          alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
          className='h-4/6 w-full object-cover'
        />
        <div className='flex flex-grow flex-row items-end justify-between p-2'>
          <div>
            <DialogTitle className='text-zinc-950 dark:text-zinc-50'>
              EB27
            </DialogTitle>
            <DialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
              Edouard Wilfrid Buquet
            </DialogSubtitle>
          </div>
          <button
            type='button'
            className='relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500'
            aria-label='Open dialog'
          >
            <PlusIcon size={12} />
          </button>
        </div>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: '24px',
          }}
          className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
        >
          <div>
            <DialogImage
              src="https://utfs.io/f/53030c8a-9c40-4981-ad5b-4414bee08939-plyu9p.png"
              alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
              className='h-full w-full'
            />
             <Cursor
                  attachToParent
                  variants={{
                    initial: { scale: 0.3, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    exit: { scale: 0.3, opacity: 0 },
                  }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 0.15,
                  }}
                  className='left-12 top-4'
                >
                  <div>
                    <MousePointer className='h-6 w-6' />
                    <div className='ml-4 mt-1 rounded-[4px] bg-green-500 px-2 py-0.5 text-neutral-50'>
                      Live Site
                    </div>
                  </div>
                </Cursor>
          </div>

          <div className='p-6'>
            <DialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
              EB27
            </DialogTitle>
            <DialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
              Edouard Wilfrid Buquet
            </DialogSubtitle>
            <DialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <div className='mb-4 flex space-x-2'>
                {ITEMS.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-md px-3 py-1 mt-6 text-sm font-medium ${activeIndex === index
                      ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                      : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400'
                      }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              <div className='overflow-hidden border-t border-zinc-200 dark:border-zinc-700'>
                <TransitionPanel
                  activeIndex={activeIndex}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  variants={{
                    enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
                    center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                    exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
                  }}
                >
                  {ITEMS.map((item, index) => (
                    <div key={index} className='py-2'>
                      <h3 className='mb-2 font-medium text-zinc-800 dark:text-zinc-100'>
                        {item.subtitle}
                      </h3>
                      <p className='text-zinc-600 dark:text-zinc-400'>{item.content}</p>
                    </div>
                  ))}
                </TransitionPanel>
              </div>
              <a
                className='mt-2 inline-flex text-zinc-500 underline'
                href='https://www.are.na/block/12759029'
                target='_blank'
                rel='noopener noreferrer'
              >
                Are.na block
              </a>
            </DialogDescription>
          </div>
          <DialogClose className='text-zinc-50' />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
}
