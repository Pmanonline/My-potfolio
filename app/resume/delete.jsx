import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Navbar from "../../components/Navbar";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Peter Uche | Resume</title>
        <meta
          name="description"
          content="I am a self-motivated and passionate IT personnel with a keen interest in full stack web development."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Navbar />
      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>

        {/* Professional Summary */}
        <div className="py-4">
          <h3 className="text-xl font-semibold">Professional Summary</h3>
          <p className="py-2">
            I am a self-motivated and passionate IT personnel with a keen
            interest in full stack web development. Proficient in writing HTML,
            CSS, Tailwind, SASS, Git & Github, Figma, and Bootstrap. Experienced
            in database management with SQL and MongoDB databases. Able to
            design and implement responsive user interfaces, ensuring seamless
            user experiences. Strong problem-solving and collaboration
            abilities, dedicated to delivering high-quality code and meeting
            project deadlines. Continuously learning and adapting to the latest
            industry trends to deliver cutting-edge solutions.
          </p>
        </div>

        {/* Professional Work Experience */}
        <div className="py-4">
          <h3 className="text-xl font-semibold">
            Professional Work Experience
          </h3>
          <div className="py-2">
            <h4 className="font-semibold">
              8thGear Hub & Venture Studio | 2022 - 2023
            </h4>
            <ul className="list-disc list-inside px-4">
              {/* Experience details */}
            </ul>
          </div>
          <div className="py-2">
            <h4 className="font-semibold">
              Diamond-Heart-Technologies | 2023 - Present
            </h4>
            <ul className="list-disc list-inside px-4">
              {/* Experience details */}
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="py-4">
          <h3 className="text-xl font-semibold">Skills</h3>
          <ul className="list-disc list-inside px-4">
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>Git/Github</li>
            <li>UI/UX design</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Node.js/Express</li>
            <li>TypeScript</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        {/* Education */}
        <div className="py-4">
          <h3 className="text-xl font-semibold">Education</h3>
          <p className="py-2">
            Bachelor of Science (B.Sc) degree in Computer Science, Michael
            Okpara University of Agriculture Umudike, Abia State, completed in
            2016.
          </p>
        </div>

        {/* Languages */}
        <div className="py-4">
          <h3 className="text-xl font-semibold">Languages</h3>
          <p className="py-2">English (Fluent)</p>
        </div>

        {/* Certifications */}
        <div className="py-4">
          <h3 className="text-xl font-semibold">Certifications</h3>
          <ul className="list-disc list-inside px-4">
            <li>Jobberman Soft Skills Training</li>
            <li>Web Development Certificate | Innkeeper.work</li>
          </ul>
        </div>

        {/* References */}
        <div className="py-4">
          <h3 className="text-xl font-semibold">References</h3>
          <p className="py-2">Available on request.</p>
        </div>
      </div>
    </>
  );
};

export default Resume;
