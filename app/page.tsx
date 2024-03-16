"use client";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import heroimage8 from "../public/assets/heroimage9.jpg";
import heroimage21 from "../public/assets/heroimage8.jpg";
import Typed from "react-typed";
import Navbar from "../components/Navbar";
import About from "../components/About";
import { Skills } from "../components/Skills";
import Projects from "../components/Projects";
import Main from "../components/Main";
import Contact from "../components/Contact";
import ScrollButton from "../components/scrollToTop";
import Footer from "../components/footer";
import Paralax from "../components/paralax";

const Home = () => {
  return (
    <>
      <Navbar />

      <Main />
      <About />
      {/* <Skills /> */}
      <Paralax />
      <Projects />
      <Contact />
      <ScrollButton />
      <Footer />
    </>
  );
};

export default Home;
