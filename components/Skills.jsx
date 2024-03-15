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
      <div className="bg-white">
        <div className="grid grid-cols-3">
          <div className="flex justify-center items-center flex-col col-span-1">
            <h2 className="text-center">Discover Our </h2>
            <h2 className="text-center">Offerings</h2>
            <h2 className="text-center">and</h2>
            <h2 className="text-center">Value Proposition</h2>
          </div>

          <div className=" col-span-2">
            <div className="grid grid-cols-3 gap-4 justify-items-center text-center  items-center">
              <div className="" data-aos="fade-right" data-aos-duration="1000">
                <ServiceCard1 />
              </div>
              <div className="" data-aos="fade-right" data-aos-duration="1000">
                <ServiceCard2 />
              </div>
              <div className="" data-aos="fade-right" data-aos-duration="1000">
                <ServiceCard3 />
              </div>
              <div className="" data-aos="fade-right" data-aos-duration="1000">
                <ServiceCard4 />
              </div>
              <div className="" data-aos="fade-right" data-aos-duration="1000">
                <ServiceCard5 />
              </div>
              <div className="" data-aos="fade-right" data-aos-duration="1000">
                <ServiceCard6 />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="max-w-[1240px] m-auto md:grid grid-cols-3 ">
          <div>
            <div className="md:hidden justify-content-center mid:grid justify-center">
              <ServiceCard1 />
              <ServiceCard2 />
              <ServiceCard3 />
            </div>
          </div>

          <Tractions />
        </div> */}
      </div>
    </section>
  );
};

export const ServiceCard1 = () => {
  return (
    <>
      <div
        // style={{ width: "18rem", height: "22rem" }}
        className={`items-cente rounded-br-[10px] rounded-tl-[10px]  rounded-bl-[10px]  rounded-tr-[10px] border-4 border-[#5AFBD9]   sm:max-w-[22vw]  mid:max-w-[30rem] mid:mx-4 my-5`}
      >
        <picture>
          <Image
            src={Cardimage1}
            className="mb-2   rounded-tl-[7px]    rounded-tr-[7px]"
            alt="### "
          />
        </picture>
        <h3 className={`text-center font-bold text-xl text-midnightash`}>
          Mobile Responsive
        </h3>
        <p className={`mt-2 text-center text-base px-4  text-lightash`}>
          Adaptable on any device dramatically boosts user experience, increases
          time spent on your website, and improves readability. Small or large,
          My designs are compatible with any device.
        </p>
      </div>
    </>
  );
};
export const ServiceCard2 = () => {
  return (
    <>
      <div
        // style={{ width: "18rem", height: "22rem" }}
        className={`items-cente rounded-br-[10px] rounded-tl-[10px]  rounded-bl-[10px]  rounded-tr-[10px] border-4 border-[#5AFBD9]   sm:max-w-[22vw]  mid:max-w-[30rem] mid:mx-4 my-5`}
      >
        <picture>
          <Image
            src={Cardimage1}
            className="mb-2   rounded-tl-[7px]    rounded-tr-[7px]"
            alt="### "
          />
        </picture>
        <h3 className={`text-center font-bold text-xl text-midnightash`}>
          Fast Load Speed
        </h3>
        <p className={`mt-2 text-center text-base px-4  text-lightash`}>
          When designing or constructing a Web application, one of my top
          priorities is to ensure fast load speeds and lag-free interaction.
        </p>
      </div>
    </>
  );
};

export const ServiceCard3 = () => {
  return (
    <>
      <div
        // style={{ width: "18rem", height: "22rem" }}
        className={`items-cente rounded-br-[10px] rounded-tl-[10px]  rounded-bl-[10px]  rounded-tr-[10px] border-4 border-[#5AFBD9]   sm:max-w-[22vw]  mid:max-w-[30rem] mid:mx-4 my-5`}
      >
        <picture>
          <Image
            src={Cardimage1}
            className="mb-2   rounded-tl-[7px]    rounded-tr-[7px]"
            alt="### "
          />
        </picture>
        <h3 className={`text-center font-bold text-xl text-midnightash`}>
          Web Design
        </h3>
        <p className={`mt-2 text-center text-base px-4  text-lightash`}>
          I value simple content structure, clean design patterns for MOBILE
          APP, WEB APP, LOGOS etc, and thoughtful interactions. That sets a
          positve first impression on your audience
        </p>
      </div>
    </>
  );
};

export const ServiceCard4 = () => {
  return (
    <>
      <div
        // style={{ width: "18rem", height: "22rem" }}
        className={`items-cente rounded-br-[10px] rounded-tl-[10px]  rounded-bl-[10px]  rounded-tr-[10px] border-4 border-[#5AFBD9]   sm:max-w-[22vw]  mid:max-w-[30rem] mid:mx-4 my-5`}
      >
        <picture>
          <Image
            src={Cardimage1}
            className="mb-2   rounded-tl-[7px]    rounded-tr-[7px]"
            alt="### "
          />
        </picture>
        <h3 className={`text-center font-bold text-xl text-midnightash`}>
          Clean Code
        </h3>
        <p className={`mt-2 text-center text-base px-4  text-lightash`}>
          Utilize and Improve your overall performance with the use a lite and
          highly maintainable code base
        </p>
      </div>
    </>
  );
};

export const ServiceCard5 = () => {
  return (
    <>
      <div
        // style={{ width: "18rem", height: "22rem" }}
        className={`items-cente rounded-br-[10px] rounded-tl-[10px]  rounded-bl-[10px]  rounded-tr-[10px] border-4 border-[#5AFBD9]   sm:max-w-[22vw]  mid:max-w-[30rem] mid:mx-4 my-5`}
      >
        <picture>
          <Image
            src={Cardimage1}
            className="mb-2   rounded-tl-[7px]    rounded-tr-[7px]"
            alt="### "
          />
        </picture>
        <h3 className={`text-center font-bold text-xl text-midnightash`}>
          SEO
        </h3>
        <p className={`mt-2 text-center text-base px-4  text-lightash`}>
          Increase your website's ranking on search engine results pages with
          "Search Engine Optimization"
        </p>
      </div>
    </>
  );
};

export const ServiceCard6 = () => {
  return (
    <>
      <div
        // style={{ width: "18rem", height: "22rem" }}
        className={`items-cente rounded-br-[10px] rounded-tl-[10px]  rounded-bl-[10px]  rounded-tr-[10px] border-4 border-[#5AFBD9]   sm:max-w-[22vw]  mid:max-w-[30rem] mid:mx-4 my-5`}
      >
        <picture>
          <Image
            src={Cardimage1}
            className="mb-2   rounded-tl-[7px]    rounded-tr-[7px]"
            alt="### "
          />
        </picture>
        <h3 className={`text-center font-bold text-xl text-midnightash`}>
          Intuitive
        </h3>
        <p className={`mt-2 text-center text-base px-4  text-lightash`}>
          Strong preference for user-friendly, Intuitive UX/UI. That certainly
          helps to drive traffic to your website.
        </p>
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
