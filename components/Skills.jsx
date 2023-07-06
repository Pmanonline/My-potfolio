// import Image from "next/image";
// import React from "react";
// import Html from "../public/assets/skills/html.png";
// import Css from "../public/assets/skills/css.png";
// import Javascript from "../public/assets/skills/javascript.png";
// import ReactImg from "../public/assets/skills/react.png";
// import Tailwind from "../public/assets/skills/tailwind.png";
// import Github from "../public/assets/skills/github1.png";
// import Firebase from "../public/assets/skills/firebase.png";
// import NextJS from "../public/assets/skills/nextjs.png";
// import AWS from "../public/assets/skills/aws.png";

// const Skills = () => {
//   return (
//     <div id="skills" className="w-full lg:h-screen p-2">
//       <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
//         <p className="text-xl tracking-widest uppercase text-[#5651e5]">
//           Skills
//         </p>
//         <h2 className="py-4  mod:text-2xl">What I Can Do</h2>
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//           <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
//             <div className="grid grid-cols-2 gap-4 justify-center items-center">
//               <div className="m-auto">
//                 <Image src={Html} width="64px" height="64px" alt="/" />
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <h3>HTML</h3>
//               </div>
//             </div>
//           </div>
//           <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
//             <div className="grid grid-cols-2 gap-4 justify-center items-center">
//               <div className="m-auto">
//                 <Image src={Css} width="64px" height="64px" alt="/" />
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <h3>CSS</h3>
//               </div>
//             </div>
//           </div>
//           <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
//             <div className="grid grid-cols-2 gap-4 justify-center items-center">
//               <div className="m-auto">
//                 <Image src={Javascript} width="64px" height="64px" alt="/" />
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <h3>JavaScript</h3>
//               </div>
//             </div>
//           </div>
//           <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
//             <div className="grid grid-cols-2 gap-4 justify-center items-center">
//               <div className="m-auto">
//                 <Image src={ReactImg} width="64px" height="64px" alt="/" />
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <h3>React</h3>
//               </div>
//             </div>
//           </div>
//           <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
//             <div className="grid grid-cols-2 gap-4 justify-center items-center">
//               <div className="m-auto">
//                 <Image src={Tailwind} width="64px" height="64px" alt="/" />
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <h3>Tailwind</h3>
//               </div>
//             </div>
//           </div>
//           <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
//             <div className="grid grid-cols-2 gap-4 justify-center items-center">
//               <div className="m-auto">
//                 <Image src={Firebase} width="64px" height="64px" alt="/" />
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <h3>Firebase</h3>
//               </div>
//             </div>
//           </div>
//           <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
//             <div className="grid grid-cols-2 gap-4 justify-center items-center">
//               <div className="m-auto">
//                 <Image src={Github} width="64px" height="64px" alt="/" />
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <h3>Github</h3>
//               </div>
//             </div>
//           </div>
//           <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
//             <div className="grid grid-cols-2 gap-4 justify-center items-center">
//               <div className="m-auto">
//                 <Image src={NextJS} width="64px" height="64px" alt="/" />
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <h3>Next</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import Cardimage1 from "../public/assets/Cardimage1.jpg";
import Cardimage2 from "../public/assets/Cardimage2.jpg";
import Cardimage3 from "../public/assets/Cardimage3.jpg";
import Image from "next/image";

export const Skills = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="skills">
      <div className=" bg-white">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 ">
          <div className="col-span-1  md:mt-[18rem] mid:text-center mid:px-5  ">
            <h2 className=" mb-3">
              <span className="text-myrecent">My Awesome</span> <br></br>{" "}
              <span className=" text-success"> Services</span>
            </h2>
            <h3 className="">
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser. I speak languages and use frameworks like:
            </h3>
          </div>

          <div className=" col-span-2 mid:hidden ml-[50px]">
            <div className="grid grid-cols-2">
              <div>
                <div
                  className="mb-10"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <ServiceCard1 />
                </div>
                <div
                  className="ml-[4rem] mt-10"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <ServiceCard2 />
                </div>
              </div>
              <div>
                <div
                  className="mt-[9rem]"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <ServiceCard3 />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="md:hidden justify-content-center mid:grid justify-center">
              <ServiceCard1 />
              <ServiceCard2 />
              <ServiceCard3 />
            </div>
          </div>
          {/* tractions */}
          <Tractions />
          {/* tractions */}
        </div>
      </div>
    </section>
  );
};

export const ServiceCard1 = () => {
  return (
    <>
      <div className="">
        <div
          // style={{ width: "18rem", height: "22rem" }}
          className={`flex  flex-col items-center rounded-br-[10px] rounded-tl-[10px]  rounded-bl-[10px]  rounded-tr-[10px] border-4 border-[#5AFBD9]   sm:max-w-[22vw]  mid:max-w-[30rem] mid:mx-4 my-5`}
        >
          <picture>
            <Image
              src={Cardimage1}
              className="mb-2   rounded-tl-[7px]    rounded-tr-[7px]"
              alt="### "
            />
          </picture>
          <h3 className={`text-center font-bold text-xl text-midnightash`}>
            UI/UX
          </h3>
          <p className={`mt-2 text-center text-base px-4  text-lightash`}>
            Figma, Sketch, Photoshop, Adobe, Adobe xd
          </p>
          <button className="hover:scale-90 ease-in duration-300  relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-purple border-1.5 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none my-3">
            <span className="relative px-5 py-2  transition-all ease-in duration-75 bg-white dark:bg-blue rounded-md group-hover:bg-opacity-0 ">
              ReadMore
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
export const ServiceCard2 = () => {
  return (
    <>
      <div className="">
        <div
          // style={{ width: "18rem", height: "22rem" }}
          className={`flex  flex-col items-center rounded-br-[10px] rounded-tl-[10px]  rounded-bl-[10px]  rounded-tr-[10px] border-4 border-[#5AFBD9]   sm:max-w-[22vw]  mid:max-w-[30rem] mid:mx-4 my-5`}
        >
          <picture>
            <Image
              src={Cardimage1}
              className="mb-2   rounded-tl-[7px]    rounded-tr-[7px]"
              alt="### "
            />
          </picture>
          <h3 className={`text-center font-bold text-xl text-midnightash`}>
            UI/UX
          </h3>
          <p className={`mt-2 text-center text-base px-4  text-lightash`}>
            Figma, Sketch, Photoshop, Adobe, Adobe xd
          </p>
          <button className="hover:scale-90 ease-in duration-300  relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-purple border-1.5 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none my-3">
            <span className="relative px-5 py-2  transition-all ease-in duration-75 bg-white dark:bg-blue rounded-md group-hover:bg-opacity-0 ">
              ReadMore
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export const ServiceCard3 = () => {
  return (
    <>
      <div className="">
        <div
          // style={{ width: "18rem", height: "22rem" }}
          className={`flex  flex-col items-center rounded-br-[10px] rounded-tl-[10px]  rounded-bl-[10px]  rounded-tr-[10px] border-4 border-[#5AFBD9]   sm:max-w-[22vw]  mid:max-w-[30rem] mid:mx-4 my-5`}
        >
          <picture>
            <Image
              src={Cardimage1}
              className="mb-2   rounded-tl-[7px]    rounded-tr-[7px]"
              alt="### "
            />
          </picture>
          <h3 className={`text-center font-bold text-xl text-midnightash`}>
            UI/UX
          </h3>
          <p className={`mt-2 text-center text-base px-4  text-lightash`}>
            Figma, Sketch, Photoshop, Adobe, Adobe xd
          </p>
          <button className="hover:scale-90 ease-in duration-300  relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-purple border-1.5 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none my-3">
            <span className="relative px-5 py-2  transition-all ease-in duration-75 bg-white dark:bg-blue rounded-md group-hover:bg-opacity-0 ">
              ReadMore
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export const Tractions = () => {
  return (
    <>
      <div className="my-[4rem]">
        <div className="flex justify-between ">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-center   "
          >
            <h3 className="border-[6px] w-[3.5rem] rounded-full mx-auto border-[#5AFBD9]  font-bold text-lg   ">
              1+
            </h3>
            <p>
              years <br />
              <span className="  font-bold">Experience</span>
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-center   "
          >
            <h3 className="border-[6px] w-[3.5rem] rounded-full mx-auto border-[#5AFBD9]  font-bold text-lg   ">
              5+
            </h3>
            <p>
              years <br />
              <span className="  font-bold">Experience</span>
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-center   "
          >
            <h3 className="border-[6px] w-[3.5rem] rounded-full mx-auto border-[#5AFBD9]  font-bold text-lg   ">
              3+
            </h3>
            <p>
              years <br />
              <span className="  font-bold">Experience</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
