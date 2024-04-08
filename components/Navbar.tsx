"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { useRouter } from "next/router";
import NavLogo1 from "../public/assets/navLogo1.png";
import NavLogo2 from "../public/assets/navLogo2.png";
import NavLogo3 from "../public/assets/navLogo3.png";

export const Navimg = () => {
  return (
    <>
      <Link className="" href="/">
        <Image src={NavLogo2} alt="/" width="200" height="100" />
      </Link>
      ;
    </>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const [Navimg, setNavimg] = useState();

  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      // style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-2xl z-[100]  bg-white ease-in-out duration-300"
          : "fixed mod:sticky bg-blue p-0 m-0 w-full h-20 z-[100] "
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link className={shadow ? "" : "hidden"} href="/">
          <li>
            <Image
              src={NavLogo3}
              width="100"
              height="30"
              alt="/"
              className="cursor-pointer  "
            />
          </li>
        </Link>
        <Link className={shadow ? "hidden " : ""} href="/">
          <li>
            <Image
              src={NavLogo3}
              width="100"
              height="30"
              alt="/"
              className="cursor-pointer"
            />
          </li>
        </Link>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden sm:flex mr-5">
            <li
              className={
                shadow
                  ? "ml-10 text-sm uppercase hover:border-b font-medium"
                  : "ml-10 text-sm uppercase hover:border-b text-white font-medium"
              }
            >
              <Link href="/#main">Home</Link>
            </li>
            <li
              className={
                shadow
                  ? "ml-10 text-sm uppercase hover:border-b font-medium"
                  : "ml-10 text-sm uppercase hover:border-b text-white font-medium"
              }
            >
              <Link href="/#about">About</Link>
            </li>
            <li
              className={
                shadow
                  ? "ml-10 text-sm uppercase hover:border-b font-medium"
                  : "ml-10 text-sm uppercase hover:border-b text-white font-medium"
              }
            >
              <Link href="/#skills">Skills</Link>
            </li>
            <li
              className={
                shadow
                  ? "ml-10 text-sm uppercase hover:border-b font-medium"
                  : "ml-10 text-sm uppercase hover:border-b text-white font-medium"
              }
            >
              <Link href="/#projects">Projects</Link>
            </li>
            <li
              className={
                shadow
                  ? "ml-10 text-sm uppercase hover:border-b font-medium"
                  : "ml-10 text-sm uppercase hover:border-b text-white font-medium"
              }
            >
              <Link href="/resume">Resume</Link>
            </li>
            <li
              className={
                shadow
                  ? "ml-10 text-sm uppercase hover:border-b font-medium"
                  : "ml-10 text-sm uppercase hover:border-b text-white font-medium"
              }
            >
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="sm:hidden"
          >
            <AiOutlineMenu
              size={25}
              className="cursor-pointer hover:text-white"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "sm:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%]  h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={NavLogo3} width="80" height="35" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] sm:w-[90%] py-4">
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#main">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/resume">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link
                  href="https://www.linkedin.com/in/clint-briley-50056920a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link
                  href="https://github.com/fireclint"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
