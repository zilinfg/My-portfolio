"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import myGif from "../public/5Sv9.gif";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const skills = [
  { skill: "Java" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "C/C++" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "SQL" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p className="text-lg">
              Hi, I am Zilin and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> CS undergraduate
              student at UW.
            </p>
            <br />
            {/* make font bigger */}
            <p className="text-lg">
              My passion for technology and innovation has led me to pursue a
              major in Computer Science. My journey in this field is driven by a
              deep-seated love for creating things, whether it is coding a new
              app, developing software solutions, or exploring the latest in
              tech advancements (through youtube mainly).
            </p>
            <br />
            <p className="text-lg">
              I thrive on challenges and enjoy collaborating with others to
              bring ideas to life. Outside of my academic pursuits, I am
              constantly experimenting with new projects and technologies, eager
              to learn and grow in this ever-evolving field.
            </p>
            <br />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src={myGif}
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-30 md:z-0 md:top-3"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
