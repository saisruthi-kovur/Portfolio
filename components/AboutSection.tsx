"use client";
import React from "react"
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";

const skills = [
  { skill: "Python" },
  { skill: "C#" },
  { skill: "Node.js" },
  { skill: "C++" },
  { skill: "ASP.NET" },
  { skill: "React" },
  { skill: "Vue.js" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "APIs" },
  { skill: "AWS" },
  { skill: "ETL" },
  { skill: "MongoDB" },
  { skill: "MySQL" },
  { skill: "Microsoft Azure" },
  { skill: "SSIS/SSRS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Visual Srudio" },
  { skill: "Jupyter Notebooks" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 ">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-rose-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-4 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Sai Sruthi and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Sunnyvale, CA.
            </p>
            <br />
            <p>
              I graduated from University of California, Riverside in 2023
              with an MS in Computer Science and have been working in the
              field ever since.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading and traveling to sketching portraits,
              I am always seeking new experiences and love to stay
              engaged and learn new things.
            </p>
            <br />
            <p>
              I believe in{" "}
              <span className="font-bold text-rose-500">
                continuous growth
              </span>{" "}
              and strive to embody that principle. I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.
            </p>
            <br />
            <div className="text-center md:text-left ">
              <h1 className="text-2xl font-bold mb-3">Activities</h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                <p>
                  I am a graduate student representative for Affordability Work Groups for Multi-Year Funding Compact at the University of California Graduate and Professional Council.
                </p>
                <br />
                <p>
                  I contribute inventive solutions while actively participating in the CS Graduate Student Club and Women in Computing Club at UCR.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 mb-6 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <Link
          to="experience"
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
  )
}

export default AboutSection
