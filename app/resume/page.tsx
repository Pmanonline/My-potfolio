import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Navbar from "../../components/Navbar";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Clint | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Navbar />
      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Peter Uche Chidubem</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/uche-c-peter/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/pmanonline"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          I am a self-motivated and passionate IT personnel with a keen interest
          in full stack web development. Proficient in writing HTML, CSS,
          Tailwind, SASS, Git & Github, Figma, and Bootstrap. Experienced in
          database management with SQL and MongoDB databases. Able to design and
          implement responsive user interfaces, ensuring seamless user
          experiences. Strong problem-solving and collaboration abilities,
          dedicated to delivering high-quality code and meeting project
          deadlines. Continuously learning and adapting to the latest industry
          trends to deliver cutting-edge solutions. Analytical, innovative, and
          motivated web development professional with experience in customer
          service, team leadership, and organizational effectiveness in
          fast-paced and challenging environments.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> RESTAPI
          </p>
          <p className="py-2">
            <span className="font-bold">Amazon Web Services</span>
            <span className="px-2">|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              8thGear Hub & Venture Studio
            </span>
            <span className="px-2">|</span>Lagos, Nigeria
          </p>
          <p className="py-1 italic">Front End Web Developer (2022 - 2023)</p>
          {/* <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li>
          </ul> */}
          <ul className="list-disc list-inside px-4">
            <li className="mb-2">
              Collaborated with UI/UX designers to create wireframes and visual
              design mockups for websites/web apps.
            </li>
            <li className="mb-2">
              Conducted research to understand target audience, competitors, and
              goals of the website.
            </li>
            <li className="mb-2">
              Built front-end responsive websites using HTML, CSS, JavaScript,
              React, Next.js, based on approved designs.
            </li>
            <li className="mb-2">
              Collaborated with content creators and colleagues to ensure
              website responsiveness and user-friendly content.
            </li>
            <li className="mb-2">
              Prepared websites for launch on live servers or hosting platforms.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Diamond-Heart-Technologies</span>
            <span className="px-2">|</span>Lagos, Nigeria
          </p>
          <p className="py-1 italic">Front End Web Developer (2023)</p>
          <ul className="list-disc list-inside px-4">
            <li className="mb-2">
              Conducted client conversations to understand website journey,
              mission, and vision.
            </li>
            <li className="mb-2">
              Collaborated with UI/UX designers to create wireframes and visual
              design mockups for websites/web apps.
            </li>
            <li className="mb-2">
              Conducted research to understand target audience, competitors, and
              goals of the website.
            </li>
            <li className="mb-2">
              Built front-end responsive websites using HTML, CSS, JavaScript,
              React.js, Next.js, and back-end using Express, Node.js, Redux,
              based on approved designs and functionality.
            </li>
            <li className="mb-2">
              Worked on back-end, setting up server, database, and business
              logic as needed.
            </li>
            <li className="mb-2">
              Ensured website responsiveness and user-friendly content.
            </li>
            <li className="mb-2">
              Prepared websites for launch on live servers or hosting platforms.
            </li>
          </ul>
        </div>

        {/*  */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">NEA Global Technology</span>
            <span className="px-2">|</span>NAirobi, Kenya
          </p>
          <p className="py-1 italic">Front End Web Developer (2023- Current)</p>
          <ul className="list-disc list-inside px-4">
            <li className="mb-2">
              Conducted client conversations to understand website journey,
              mission, and vision.
            </li>
            <li className="mb-2">
              Collaborated with UI/UX designers to create wireframes and visual
              design mockups for websites/web apps.
            </li>
            <li className="mb-2">
              Conducted research to understand target audience, competitors, and
              goals of the website.
            </li>
            <li className="mb-2">
              Built front-end responsive websites using HTML, CSS, JavaScript,
              React.js, Next.js, and back-end using Express, Node.js, Redux,
              based on approved designs and functionality.
            </li>
            <li className="mb-2">
              Worked on back-end, setting up server, database, and business
              logic as needed.
            </li>
            <li className="mb-2">
              Ensured website responsiveness and user-friendly content.
            </li>
            <li className="mb-2">
              Prepared websites for launch on live servers or hosting platforms.
            </li>
          </ul>
        </div>
        {/*  */}
        {/* Education */}
        <div className="py-4">
          <h5 className=" underline text-[18px] py-4">Education</h5>
          <p className="py-2">
            <h4>
              Michael Okpara University of Agriculture Umudike, Abia State,
            </h4>
            <span className=" italic"> Bachelor of Science (B.Sc)</span>{" "}
            <br></br>
            <span className=" font-medium">
              Computer Science
            </span> <br></br>{" "}
            <span className=" font-extralight">completed in 2017.</span>
          </p>
        </div>
        {/*  */}
        {/* Languages */}
        <div className="py-4">
          <h5 className=" underline text-[18px] ">Languages</h5>
          <p className="py-2">English (Fluent)</p>
        </div>

        {/* Certifications */}
        <div className="py-4">
          <h5 className=" underline text-[18px]">Certifications</h5>
          <ul className=" list-inside ">
            <li>Jobberman Soft Skills Training</li>
            <li>Web Development Certificate | Innkeeper.work</li>
          </ul>
        </div>
        {/* References */}
        <div className="py-4">
          <h5 className=" underline text-[18px] ">References</h5>
          <p className="py-2">Available on request.</p>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default Resume;
