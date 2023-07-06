import React from "react";
import footerimg2 from "../public/assets/footerimg2.jpg";
import footerimg3 from "../public/assets/footerimg3.jpg";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <>
      {/* <div className="flex justify-end   align-middle py-12">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={15} />
          </div>
        </Link>
      </div> */}
      <div
        className=" w-full h-screen mt-[14rem] minlg:mt-[30rem] "
        style={{
          backgroundImage: `url(${footerimg3.src})`,
          height: "15em",
          width: "auto",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <Link href="/">
          <div className=" text-white  font-bold  text-lg text-center pt-[6rem]">
            <p className="  mt-5 cursor-pointer ">Petersonzoconis@gmail.com</p>
          </div>
        </Link>

        <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
          <Link
            href="https://www.linkedin.com/in/clint-briley-50056920a/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full  border border-white   shadow-md  shadow-[#d1cece] text-white  p-4 mid:p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
          </Link>
          <Link
            href="https://github.com/fireclint"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full  border border-white   shadow-md  shadow-[#f6f2f2] text-white   p-4  mid:p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
          </Link>
          <Link href="/#contact">
            <div className="rounded-full  border border-white   shadow-md  shadow-[#f6f2f2] text-white  p-4  mid:p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
          </Link>
          <Link href="/resume">
            <div className="rounded-full  border border-white   shadow-md  shadow-[#f6f2f2] text-white   p-4  mid:p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
