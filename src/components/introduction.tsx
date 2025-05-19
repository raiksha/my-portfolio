"use client"

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return ( 
    <div className="z-20 w-full">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <div className="flex justify-center md:justify-center">
          <Image src="/home-4.png" priority width="400" height="400" alt="Profile pic" />
        </div>
        <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto text-center md:items-start md:justify-start">
          <h1 className="text-4xl font-bold text-[#1b030f] md:text-5xl">
            Hi! I am{" "}
            <span className="text-[#fff]">Akane⭐</span>
          </h1>
          <TypeAnimation
            sequence={[
              "I'm a Frontend Developer",
              2000,
              "I'm a Backend Developer",
              2000,
              "I'm a Fullstack Developer",
              2000,
            ]}
            speed={50}
            style={{ fontSize: "25px", color: "#1b030f" }}
            repeat={Infinity}
            className="font-bold"
          />
          <p className="mx-auto mb-2 text-xl text-left md:mx-0 md:mb-8">
            I&apos;m a developer in training who loves solving problems, building things, and learning every day.<br />
            I&apos;ve worked on scripting, web development, and 3D tools like Blender and Unity.<br />
            I&apos;m currently diving deeper into computer science with CS50x and preparing to start university in 2026.
          </p>
        </div>
      </div>
    </div>
   );
}
 
export default Introduction;