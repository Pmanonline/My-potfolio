// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { RiRadioButtonFill } from "react-icons/ri";
// import modalDetails from "./modalDetails.json";

// export const ProjectItem = ({
//   title,
//   backgroundImg,
//   tech,
//   projectUrl1,
//   projectUrl2,
//   projectUrl3,
// }) => {
//   return (
//     <>
//       <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#7a95cd]">
//         <div className="w-full h-full">
//           <Image
//             className="rounded-xl group-hover:opacity-10 h-full w-full"
//             src={backgroundImg}
//             alt={title}
//             // layout="fill"
//             // objectFit="cover"
//           />
//         </div>
//         <div className="hidden  group-hover:block group-hover:h-full  w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
//           <p className="pt-5 text-white font-bold text-center">{tech}</p>
//           <h3 className="text-2xl text-black tracking-wider text-center ">
//             {title}
//           </h3>
//           <div className="flex  justify-center py-5">
//             <Modal />
//           </div>
//           <div className="flex  justify-center">
//             <Link href={projectUrl1}>
//               <p className="text-center py-3 rounded-lg font-bold text-white underline  text-lg cursor-pointer mr-7 ">
//                 Site
//               </p>
//             </Link>
//             <Link href={projectUrl2}>
//               <p className="text-center py-3 rounded-lg font-bold text-white underline  text-lg cursor-pointer  mr-6">
//                 Design
//               </p>
//             </Link>
//             <Link href={projectUrl3}>
//               <p className="text-center py-3 rounded-lg font-bold text-white underline  text-lg cursor-pointer m ">
//                 Github
//               </p>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export function Modal() {
//   const [showModal, setShowModal] = React.useState(false);
//   return (
//     <>
//       <button
//         className="bg-white text-gray-800 active:bg-[#FF7B57] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//         type="button"
//         onClick={() => setShowModal(true)}
//       >
//         More Info
//       </button>
//       {showModal ? (
//         <>
//           <div className="justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//             <div className="relative w-auto  my-6 mx-auto max-w-3xl">
//               {/*content*/}

//               <div className="max-w-[1240px] mx-auto p-2 grid lg:grid-cols-12 gap- py-8 bg-white">
//                 <div className="col-span-9    minlg:col-span-1_  shadow-xl shadow-gray-300 rounded-xl py-4">
//                   <p className="mb-4 bg-white text-[1.5rem] font-semibold px-2">
//                     Project Overview
//                   </p>
//                   <p className="px-2">
//                     I built this application in React JS and is hosted on GitHub
//                     pages. This app features user authentication with firebase
//                     as well as the firestore cloud storage database. This
//                     application is pulling movie data from an the IMDB movie API
//                     and displaying different categories. It features horizontal
//                     sliding and a featured selection. The useContext hook is
//                     also being implemented for app-wide state management.
//                   </p>
//                 </div>
//                 <div className=" lg:col-span-3  minlg:col-span-1  shadow-xl shadow-gray-300 rounded-xl py-4">
//                   <div className="p-2 ">
//                     <p className="text-center font-bold pb-2 mid:text-center">
//                       Technologies
//                     </p>

//                     <p className="text-gray-600 py-2 flex items-center text-center justify-start">
//                       <RiRadioButtonFill className="pr-1" /> React
//                     </p>
//                     <p className="text-gray-600 py-2 flex items-center  justify-start">
//                       <RiRadioButtonFill className="pr-1" /> Tailwind
//                     </p>
//                     <p className="text-gray-600 py-2 flex items-center  justify-start">
//                       <RiRadioButtonFill className="pr-1" /> Javascript
//                     </p>
//                     <p className="text-gray-600 py-2 flex items-center  justify-start">
//                       <RiRadioButtonFill className="pr-1" /> Firebase
//                     </p>
//                     <p className="text-gray-600 py-2 flex items-center  justify-start">
//                       <RiRadioButtonFill className="pr-1" /> IMDB API
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/*content*/}
//               {/*footer starts*/}
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                 <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
//                   <button
//                     className="text-[#FF7B57]  hover:text-[#FFBF49] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                 </div>
//                 {/*footer ends*/}
//               </div>
//             </div>
//           </div>
//           <div className="opacity-25  fixed inset-0 z-40 bg-black"></div>
//         </>
//       ) : null}
//     </>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import modalDetails from "./modalDetails.json";

export const ProjectItem = ({
  title,
  backgroundImg,
  tech,
  projectUrl1,
  projectUrl2,
  projectUrl3,
}) => {
  const modalDetail = modalDetails.find((detail) => detail.title === title);
  console.log("modalDetail:", modalDetail);

  return (
    <>
      <div className="relative flex items-center justify-center h-auto sm:max-w-[30rem] shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#7a95cd]">
        <div className="">
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={backgroundImg}
            alt={title}
            style={{ height: "18rem" }} // Adjust the height value as needed
          />
        </div>
        <div className="hidden  group-hover:block group-hover:h-full  w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <p className="pt-5 text-white font-bold text-center">{tech}</p>
          <h3 className="text-2xl text-black tracking-wider text-center ">
            {title}
          </h3>
          <div className="flex  justify-center py-5">
            <Modal modalDetail={modalDetail} />
          </div>
          <div className="flex  justify-center">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={modalDetail.projectUrl1}
            >
              <p className="text-center py-3 rounded-lg font-bold text-white underline  text-lg cursor-pointer mr-7 ">
                Site
              </p>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={modalDetail.projectUrl2}
            >
              <p className="text-center py-3 rounded-lg font-bold text-white underline  text-lg cursor-pointer  mr-6">
                Design
              </p>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={modalDetail.projectUrl3}
            >
              <p className="text-center py-3 rounded-lg font-bold text-white underline  text-lg cursor-pointer m ">
                Github
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export function Modal({ modalDetail }) {
  const [showModal, setShowModal] = React.useState(false);
  if (!modalDetail) {
    return null; // or any fallback UI
  }

  return (
    <>
      <button
        className="bg-white text-gray-800 active:bg-[#FF7B57] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        More Info
      </button>
      {showModal && (
        <>
          <div className="justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto  my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="max-w-[1240px] mx-auto p-2 grid lg:grid-cols-12 gap- py-8 bg-white">
                <div className="col-span-9    minlg:col-span-1_  shadow-xl shadow-gray-300 rounded-xl py-4">
                  <p className="mb-4 bg-white text-[1.5rem] font-semibold px-2">
                    Project Overview
                  </p>
                  <p className="px-2">{modalDetail.overview}</p>
                </div>
                <div className=" lg:col-span-3  minlg:col-span-1  shadow-xl shadow-gray-300 rounded-xl py-4">
                  <div className="p-2 ">
                    <p className="text-center font-bold pb-2 mid:text-center">
                      Technologies
                    </p>
                    {modalDetail.technologies.map((tech, index) => (
                      <p
                        key={index}
                        className="text-gray-600 py-2 flex items-center text-center justify-start"
                      >
                        <RiRadioButtonFill className="pr-1" /> {tech}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              {/*content*/}
              {/*footer starts*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-[#FF7B57]  hover:text-[#FFBF49] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
                {/*footer ends*/}
              </div>
            </div>
          </div>
          <div className="opacity-25  fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
