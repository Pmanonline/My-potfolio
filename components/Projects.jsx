// import Image from "next/image";
// import { react, useEffect } from "react";
// import Link from "next/link";
// import React from "react";

// import inkeeper from "../public/assets/inkeeper.png";
// import propertyImg from "../public/assets/projects/property.jpg";
// import cryptoImg from "../public/assets/projects/crypto.jpg";
// import netflixImg from "../public/assets/projects/netflix.jpg";
// import twitchImg from "../public/assets/projects/twitch.jpg";
// import { ProjectItem } from "./ProjectItem";
// import Aos from "aos";
// import "aos/dist/aos.css";

// const Projects = () => {
//   useEffect(() => {
//     Aos.init();
//     Aos.refresh();
//   }, []);

//   return (
//     <div id="projects" className="w-full bg-white">
//       <div className="max-w-[1240px] mx-auto px-2 py-16">
//         <p className="text-xl tracking-widest uppercase text-[#5651e5]">
//           Projects
//         </p>
//         {/* <h2 className="py-4  mod:text-2xl">What I&apos;ve Built</h2> */}
//         <h2 className="pb-8  mod:text-2xl">My Recent Projects</h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="">
//             <ProjectItem
//               title="Property Finder"
//               backgroundImg={inkeeper}
//               projectUrl1="/property"
//               projectUrl2="/property"
//               projectUrl3="/property"
//               tech="React JS"
//             />
//           </div>
//           <div className="" data-aos="fade-down" data-aos-duration="1000">
//             <ProjectItem
//               title="Crypto App"
//               backgroundImg={cryptoImg}
//               projectUrl1="/crypto"
//               projectUrl2="/crypto"
//               projectUrl3="/crypto"
//               tech="React JS"
//             />
//           </div>
//           <div className="" data-aos="fade-up" data-aos-duration="1000">
//             <ProjectItem
//               title="Netflix App"
//               backgroundImg={netflixImg}
//               projectUrl1="/netflix"
//               projectUrl2="/netflix"
//               projectUrl3="/netflix"
//               tech="Next JS"
//             />
//           </div>
//           <div className="" data-aos="fade-up" data-aos-duration="1000">
//             <ProjectItem
//               title="Twitch UI"
//               backgroundImg={twitchImg}
//               projectUrl1="/twitch"
//               projectUrl2="/twitch"
//               projectUrl3="/twitch"
//               tech="Next JS"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import React, { useEffect } from "react";
// import Link from "next/link";
// import { ProjectItem } from "./ProjectItem";
// import Aos from "aos";
// import "aos/dist/aos.css";

// import EIGHTGEAR from "../public/assets/8GEAR.jpg";
// import DHT from "../public/assets/DHT.jpg";
// import HAVEN from "../public/assets/HAVEN.jpg";
// import INKEEPER from "../public/assets/INKEEPER.jpg";
// import MARKETSTATION from "../public/assets/MARKETSTATION.jpg";
// import MINDAFRIK from "../public/assets/MINDAFRIK.jpg";

// import modalDetails from "./modalDetails.json"; // Assuming you've created modalDetails.json

// const Projects = () => {
//   useEffect(() => {
//     Aos.init();
//     Aos.refresh();
//   }, []);

//   return (
//     <section id="projects" className="w-full ">
//       <div className=" px-2 py-16">
//         <p className="text-xl tracking-widest uppercase text-[#5651e5]">
//           Projects
//         </p>

//         <h2 className="pb-8  mod:text-2xl">My Recent Projects</h2>
//         <div className="grid grid-cols-3 minlg2:grid-cols-2 gap-8 mod:grid-cols-1 ">
//           <div className="">
//             <ProjectItem
//               title="8thgear hub"
//               backgroundImg={EIGHTGEAR}
//               projectUrl1="/property"
//               projectUrl2="/property"
//               projectUrl3="/property"
//               tech="React JS"
//               modalDetails={modalDetails.find(
//                 (detail) => detail.title === "8thgear hub"
//               )}
//             />
//           </div>
//           <div className="">
//             <ProjectItem
//               title="inkeeper LMS"
//               backgroundImg={INKEEPER}
//               projectUrl1="/crypto"
//               projectUrl2="/crypto"
//               projectUrl3="/crypto"
//               tech="React JS"
//               modalDetails={modalDetails.find(
//                 (detail) => detail.title === "inkeeper LMS"
//               )}
//             />
//           </div>
//           <div className="">
//             <ProjectItem
//               title="mindAfrik"
//               backgroundImg={MINDAFRIK}
//               projectUrl1="/netflix"
//               projectUrl2="/netflix"
//               projectUrl3="/netflix"
//               tech="Next JS"
//               modalDetails={modalDetails.find(
//                 (detail) => detail.title === "mindAfrik"
//               )}
//             />
//           </div>
//           <div className="">
//             <ProjectItem
//               title="haven"
//               backgroundImg={HAVEN}
//               projectUrl1="/twitch"
//               projectUrl2="/twitch"
//               projectUrl3="/twitch"
//               tech="Next JS"
//               modalDetails={modalDetails.find(
//                 (detail) => detail.title === "haven"
//               )}
//             />
//           </div>
//           <div className="">
//             <ProjectItem
//               title="market Station"
//               backgroundImg={MARKETSTATION}
//               projectUrl1="/twitch"
//               projectUrl2="/twitch"
//               projectUrl3="/twitch"
//               tech="Next JS"
//               modalDetails={modalDetails.find(
//                 (detail) => detail.title === "market Station"
//               )}
//             />
//           </div>
//           <div className="">
//             <ProjectItem
//               title="Diamonf Heart technology"
//               backgroundImg={DHT}
//               projectUrl1="/twitch"
//               projectUrl2="/twitch"
//               projectUrl3="/twitch"
//               tech="Next JS"
//               modalDetails={modalDetails.find(
//                 (detail) => detail.title === "Diamonf Heart technology"
//               )}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React, { useEffect } from "react";
import Link from "next/link";
import { ProjectItem } from "./ProjectItem";
import Aos from "aos";
import "aos/dist/aos.css";

import EIGHTGEAR from "../public/assets/8GEAR.jpg";
import DHT from "../public/assets/DHT.jpg";
import HAVEN from "../public/assets/HAVEN.jpg";
import INKEEPER from "../public/assets/INKEEPER.jpg";
import MARKETSTATION from "../public/assets/MARKETSTATION.jpg";
import MINDAFRIK from "../public/assets/MINDAFRIK.jpg";

import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";

import modalDetails from "./modalDetails.json"; // Assuming you've created modalDetails.json

const Projects = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <section id="projects" className="w-full ">
      <div className=" px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>

        <h2 className="pb-8  mod:text-2xl">My Recent Projects</h2>
        <div className="grid grid-cols-3 minlg2:grid-cols-2 gap-8 mod:grid-cols-1 ">
          {modalDetails.map((project) => (
            <div key={project.id} className="">
              <ProjectItem
                title={project.title}
                backgroundImg={getBackgroundImg(project.title)}
                projectUrl1="/property"
                projectUrl2="/property"
                projectUrl3="/property"
                tech="React JS"
                modalDetails={project}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to get background image based on project title
const getBackgroundImg = (title) => {
  switch (title) {
    case "8thgear hub":
      return EIGHTGEAR;
    case "inkeeper LMS":
      return INKEEPER;
    case "mindAfrik":
      return MINDAFRIK;
    case "haven":
      return HAVEN;
    case "market Station":
      return MARKETSTATION;
    case "Diamonf Heart technology":
      return DHT;
    default:
      return ""; // Handle default case
  }
};

export default Projects;
