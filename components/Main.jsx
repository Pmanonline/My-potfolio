import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import heroimage8 from "../public/assets/heroimage9.jpg";
import heroimage21 from "../public/assets/heroimage8.jpg";
import Typed from "react-typed";
import Navbar from "./Navbar";
import Modal from "./Modal";

const Main = () => {
  return (
    <>
      {/* large screen start */}
      <div
        id="main"
        className=" w-full h-screen text-center  "
        style={{
          backgroundImage: `url(${heroimage8.src})`,
          height: "55rem",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" w-full h-full mx-auto p-2 flex justify-center items-center mod:pb-[350px]">
          {/* <div className="lg:pb-[250px] midium:pb-[50px] bg-whit"> */}
          <div className="sm:pb-[250px]  bg-whit">
            <p className="uppercase text-sm tracking-widest  text-white">
              LET&#39;S BUILD SOMETHING TOGETHER
            </p>
            <h1 className="py-4 text-white text-5xl mod:text-4xl">
              Hi, I&#39;m{" "}
              <span className=" text-[#5AFBD9] mod:text-4xl"> Peter Uche</span>
            </h1>
            {/* <h1 className="py-2 ">A Front-End Web Developer</h1> */}
            <div>
              <Typed
                // className="Typewriter1 text-[#9921e9]"
                className=" text-[#5AFBD9] text-[45px] font-semibold mod:text-4xl"
                strings={[
                  "I'm a Full Stack Developer",
                  "I Love Software Development",
                  "I Love UI/UX Designing",
                ]}
                typeSpeed={150}
                backSpeed={10}
                loop
              />
            </div>
            <p className="py-4 text-white sm:max-w-[70%] m-auto">
              I’m focused on building responsive front-end web applications
              integrating back-end technologies.
            </p>
            <div className=" ">
              <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                <Link
                  href="https://www.linkedin.com/in/uche-c-peter/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full  border border-white   shadow-md  shadow-[#d1cece] text-white  p-4 mid:p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </Link>

                <Link
                  href="https://github.com/pmanonline"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full  border border-white   shadow-md  shadow-[#f6f2f2] text-white   p-4  mid:p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link href="/#contact">
                  <div className="rounded-full  border border-white   shadow-md  shadow-[#f6f2f2] text-white  p-4  mid:p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div className="rounded-full  border border-white   shadow-md  shadow-[#f6f2f2] text-white   p-4  mid:p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>

            <div className="mt-4  ">
              {/* <button className="rounded-tr-[10px]  rounded-bl-[10px] rounded-tl-[5px] rounded-br-[5px]    px-4 py-1 hover:scale-110 ease-in duration-300 bg-[#FF7B57] text-lg mr-3 hover:bg-[#FFBF49] text-white ">
                Contact Now
              </button> */}
              <Link href="/#contact">
                <button className="hover:scale-90 ease-in duration-300  relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-purple border-1.5 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none ">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-blue rounded-md group-hover:bg-opacity-0 ">
                    Contact Now
                  </span>
                </button>
              </Link>
              <Link href="/#contacts"></Link>

              {/* MODAL */}
              <Modal />
              {/* MODAL */}
            </div>
          </div>
        </div>
      </div>
      {/* large screen ends */}
    </>
  );
};

export default Main;
