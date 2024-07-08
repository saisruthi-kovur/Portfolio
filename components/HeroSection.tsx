"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { GoArrowUpRight } from "react-icons/go";
import { HiArrowDown, HiDownload } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.jpg"
            alt=""
            width={325}
            height={125}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-4xl ">Hi, I&#39;m Sai Sruthi Kovur!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-rose-300">
              Software Engineer{" "}
            </span>
            based in Sunnyvale, CA. Working towards creating software that
            makes life easier and more meaningful.
          </p>
          <div className="flex space-x-4 text-center items-center justify-center">


            <div className="flex items-center gap-4 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black dark:bg-white/10">
              <span className="text-neutral-100 font-semibold px-6 py-3 bg-rose-400 rounded shadow hover:bg-rose-600 flex items-center gap-2">
                Resume
                <div className="flex space-x-2">
                  <a
                    className="group flex items-center transition cursor-pointer"
                    href="/SaiSruthiKovur_Resume.pdf"
                    download
                  >
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                  </a>
                  <a
                    className="group flex items-center transition cursor-pointer"
                    href="https://drive.google.com/file/d/1103S2MZL6A-EfemEEswuYWSFOBD6lk5K/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GoArrowUpRight className="opacity-60 group-hover:translate-y-1 transition" />
                  </a>
                </div>
              </span>
            </div>
            <Link
              to="contact"
              className="hover:scale-110 active:scale-105 transition cursor-pointer text-neutral-100 font-semibold px-6 py-3 bg-rose-400 rounded shadow hover:bg-rose-600"
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            >
              Contact
            </Link>
          </div>


        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <Link
          to="about"
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

export default HeroSection;
