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
} from "@/components/ui/dialog";
import { Expand, MousePointer, PlusIcon } from "lucide-react";
import { Cursor } from "./ui/cursor";
import { useState } from "react";
import { TransitionPanel } from "./ui/transistionPanel";
import Link from "next/link";

export function ProjectCard({
  title,
  subtitle,
  image,
  imageDescription,
  liveLink,
  githubLink,
  content,
}: {
  title: string;
  subtitle: string;
  image: string;
  imageDescription: string;
  liveLink: string | null;
  githubLink: string;
  content: { title: string; subtitle: string; content: string }[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Dialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: "12px",
        }}
        className="flex  max-w-[400px] max-h-[400px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
      >
        <DialogImage
          src={image}
          alt={imageDescription}
          className="h-full w-full"
        />
        <div className="flex flex-grow flex-row items-end justify-between p-2">
          <div>
            <DialogTitle className="text-zinc-950 dark:text-zinc-50">
              {title}
            </DialogTitle>
            <DialogSubtitle className="text-zinc-700 dark:text-zinc-400">
              {subtitle}
            </DialogSubtitle>
          </div>
          <button
            type="button"
            className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
            aria-label="Open dialog"
          >
            <Expand size={12} />
          </button>
        </div>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: "24px",
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
        >
          <div>
            <Link
              href={!liveLink ? githubLink : liveLink}
              className="cursor-none"
            >
              <DialogImage
                src={image}
                alt={imageDescription}
                className="h-full w-full"
              />
            </Link>
            <Cursor
              attachToParent
              variants={{
                initial: { scale: 0.3, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.3, opacity: 0 },
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.15,
              }}
              className="left-12 top-4"
            >
              <div>
                <MousePointer className="h-6 w-6 text-green-500" />
                <div className="ml-4 mt-1 rounded-[4px] bg-green-500 px-2 py-0.5 text-neutral-50">
                  {!liveLink ? "View Code" : "View Live"}
                </div>
              </div>
            </Cursor>
          </div>

          <div className="p-6">
            <DialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
            {title}
            </DialogTitle>
            <DialogSubtitle className="text-zinc-700 dark:text-zinc-400">
            {subtitle}
            </DialogSubtitle>
            <DialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <div className="mb-4 flex space-x-2">
                {content?.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-md px-3 py-1 mt-6 text-sm font-medium ${
                      activeIndex === index
                        ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                        : "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              <div className="overflow-hidden border-t border-zinc-200 dark:border-zinc-700">
                <TransitionPanel
                  activeIndex={activeIndex}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  variants={{
                    enter: { opacity: 0, y: -50, filter: "blur(4px)" },
                    center: { opacity: 1, y: 0, filter: "blur(0px)" },
                    exit: { opacity: 0, y: 50, filter: "blur(4px)" },
                  }}
                >
                  {content.map((item, index) => (
                    <div key={index} className="py-2">
                      <h3 className="mb-2 font-medium text-zinc-800 dark:text-zinc-100">
                        {item.subtitle}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </TransitionPanel>
              </div>
              <a
                className="mt-2 inline-flex text-zinc-500 underline"
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </a>
            </DialogDescription>
          </div>
          <DialogClose className="text-zinc-50" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
}
