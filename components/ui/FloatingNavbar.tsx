"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { FloatingDock } from "@/components/ui/FloatingDock";
import { AiOutlineHome } from "react-icons/ai";
import { SiAlchemy } from "react-icons/si";

import { SiBmcsoftware } from "react-icons/si";

import { SiInformatica } from "react-icons/si";
import { FaSlideshare } from "react-icons/fa";

const links = [
  {
    title: "Home",
    icon: (
      <AiOutlineHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },

  {
    title: "About",
    icon: (
      <SiInformatica className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#about",
  },
  {
    title: "Projects",
    icon: (
      <SiBmcsoftware className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects",
  },
  {
    title: "Testimonials",
    icon: (
      <SiAlchemy className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#testimonials",
  },
  {
    title: "Contact",
    icon: (
      <FaSlideshare className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#contact",
  },
];

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // change rounded-full to rounded-lg
          // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
          // change  pr-2 pl-8 py-2 to px-10 py-5
          "flex items-center justify-center max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-12 inset-x-0 mx-auto space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <FloatingDock items={links} />
      </motion.div>
    </AnimatePresence>
  );
};
