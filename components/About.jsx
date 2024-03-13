// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import AboutImg from "../public/assets/about.jpg";
// import Aos from "aos";
// import "aos/dist/aos.css";
// const About = () => {
//   return (
//     <div
//       id="about"
//       className="w-full md:h-screen p-2 flex items-center py-16 bg-white"
//     >
//       <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
//         <div className="col-span-2">
//           <p className="uppercase text-xl tracking-widest text-[#5651e5]">
//             About
//           </p>
//           <h2 className="py-4 mod:text-2xl">Who I Am</h2>
//           <p className="py-2 text-gray-600 sm:pr-[48px]">
//             I specialize in building mobile responsive front-end UI applications
//             that connect with API’s and other backend technologies. I’m
//             passionate about learning new technologies and understand there is
//             more than one way to accomplish a task. Though I am most proficient
//             in building front-end applications using HTML, CSS, Javascript, and
//             React, I am a quick learner and can pick up new tech stacks as
//             needed. I believe that being a great developer is not using one
//             specific language, but choosing the best tool for the job.
//           </p>
//           <p className="py-2 text-gray-600 pr-[48px]">
//             I started web developement in 2013 managing multiple e-commerce
//             websites on CMS platforms such as WordPress, BigCommerce, and
//             Shopify. I have experience working directly with clients and taking
//             mock wireframes all the way to deployed applications. In my spare
//             time I run Code Commerce, a Youtube channel where I teach web
//             developement and various front-end technologies.
//           </p>
//         </div>
//         <div
//           // data-aos="fade-right"
//           data-aos-duration="1000"
//           className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300  bg-[#5AFBD9]"
//         >
//           <Image src={AboutImg} className="rounded-xl" alt="/" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useEffect } from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 bg-white"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 mod:text-2xl">Who I Am</h2>
          <div className="py-2 text-gray-600 sm:pr-[48px]">
            <p>
              I specialize in building mobile responsive front-end UI
              applications that connect with APIs and other backend
              technologies. I’m passionate about learning new technologies and
              understand there is more than one way to accomplish a task.
            </p>
            <p>
              Though I am most proficient in building front-end applications
              using HTML, CSS, JavaScript, and React, I am a quick learner and
              can pick up new tech stacks as needed.
            </p>
            <p>
              I believe that being a great developer is not using one specific
              language, but choosing the best tool for the job.
            </p>
          </div>
          <div className="py-2 text-gray-600 pr-[48px]">
            <p>
              I started web development in 2013 managing multiple e-commerce
              websites on CMS platforms such as WordPress, BigCommerce, and
              Shopify.
            </p>
            <p>
              I have experience working directly with clients and taking mock
              wireframes all the way to deployed applications.
            </p>
            <p>
              In my spare time, I run Code Commerce, a YouTube channel where I
              teach web development and various front-end technologies.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300  bg-[#5AFBD9]"
        >
          <Image
            src={AboutImg}
            className="rounded-xl"
            alt="About Image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
