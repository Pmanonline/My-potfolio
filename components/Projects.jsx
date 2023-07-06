import Image from "next/image";
import { react, useEffect } from "react";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import { ProjectItem } from "./ProjectItem";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div id="projects" className="w-full bg-white">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        {/* <h2 className="py-4  mod:text-2xl">What I&apos;ve Built</h2> */}
        <h2 className="pb-8  mod:text-2xl">My Recent Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="" data-aos="fade-down" data-aos-duration="1000">
            <ProjectItem
              title="Property Finder"
              backgroundImg={propertyImg}
              projectUrl1="/property"
              projectUrl2="/property"
              projectUrl3="/property"
              tech="React JS"
            />
          </div>
          <div className="" data-aos="fade-down" data-aos-duration="1000">
            <ProjectItem
              title="Crypto App"
              backgroundImg={cryptoImg}
              projectUrl1="/crypto"
              projectUrl2="/crypto"
              projectUrl3="/crypto"
              tech="React JS"
            />
          </div>
          <div className="" data-aos="fade-up" data-aos-duration="1000">
            <ProjectItem
              title="Netflix App"
              backgroundImg={netflixImg}
              projectUrl1="/netflix"
              projectUrl2="/netflix"
              projectUrl3="/netflix"
              tech="Next JS"
            />
          </div>
          <div className="" data-aos="fade-up" data-aos-duration="1000">
            <ProjectItem
              title="Twitch UI"
              backgroundImg={twitchImg}
              projectUrl1="/twitch"
              projectUrl2="/twitch"
              projectUrl3="/twitch"
              tech="Next JS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
