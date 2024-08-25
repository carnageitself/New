"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";
import yash from "@/public/yash.png";
import { BsGithub } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: yash,
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: yash,
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: yash,
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: yash,
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: yash,
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: yash,
  },
];

export function Clients() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
