import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import ContactImg from "../public/assets/contact.jpg";

import contactbg from "../public/assets/contactbg.png";
import contactbg1 from "../public/assets/contactbg1.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (name && email && phone && message) {
      const person = {
        name,
        email,
        phone,
        // subject,
        message,
      };
      console.log(person);

      setName("");
      setEmail("");
      setPhone("");
      // setSubject("");
      setMessage("");
    } else {
      window.alert("empty values");
    }

    emailjs
      .sendForm(
        "service_ur3p43c",
        "template_cst1uc9",
        form.current,
        "9Tp4XEvOsWGi69ktz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setPhone("");
    // setSubject("");
    setMessage("");
  };
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <div
        className=" w-ful h-screen text-center mod:mb-[45rem]  xs:mb-[60px]"
        style={{
          backgroundImage: `url(${contactbg.src})`,
          height: "68vw",
          width: "auto",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div id="contact" className="w-full lg:h-screen mt-[7rem]">
          <div className="max-w-[1240px] m-auto px-2 py-16 w-full  pt-[7rem]">
            {/* pt-[9rem] contQ1:pt-[16rem] */}
            {/* <p className="text-xl tracking-widest uppercase text-[#5651e5]">
              Contact
            </p> */}
            <h2 className="py-4  mod:text-2xl text-white">Get In Touch</h2>
            <div className="justify-center align-middle mx-auto  ">
              <div className="grid lg:grid-cols sm:max-w-[35rem] gap-8 mx-auto bg-white  rounded-2xl ">
                <div className=" w-full h-auto shadow-lg shadow-blue  rounded-2xl lg:p-4">
                  <div className="p-4">
                    {/* <form id="form" name="form" ref={form} onSubmit={sendEmail}> */}
                    <form id="form" name="form" onSubmit={sendEmail}>
                      <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Name</label>
                        <input
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          data-aos="fade-down"
                          data-aos-duration="1000"
                          className="border-2 rounded-lg p-3 flex border-blue focus:outline-[#5AFBD9] "
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">
                          Phone Number
                        </label>
                        <input
                          name="name"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          data-aos="fade-down"
                          data-aos-duration="1000"
                          className="border-2 rounded-lg p-3 flex border-blue focus:outline-[#5AFBD9] "
                          type="tel"
                        />
                      </div>
                      {/* </div> */}
                      <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Email</label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          data-aos="fade-down"
                          data-aos-duration="1000"
                          className="border-2 rounded-lg p-3 flex border-blue focus:outline-[#5AFBD9] "
                          type="email"
                          name="email"
                        />
                      </div>
                      {/* <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">
                          Subject
                        </label>
                        <input
                          name="subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          data-aos="fade-down"
                          data-aos-duration="1000"
                          className="border-2 rounded-lg p-3 flex border-blue focus:outline-[#5AFBD9]"
                          type="text"
                        />
                      </div> */}
                      <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">
                          Message
                        </label>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          data-aos="fade-down"
                          data-aos-duration="1000"
                          className="border-2 rounded-lg p-3 border-blue focus:outline-[#5AFBD9]"
                          rows="10"
                          name="message"
                        ></textarea>
                      </div>
                      <div
                        className=" flex justify-center align-middle mx-auto"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                      >
                        <button className="hover:scale-90 ease-in duration-300  relative inline-flex items-center justify-center p-0.5 mt-5 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-purple border-1.5 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none ">
                          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-blue rounded-md group-hover:bg-opacity-0 ">
                            Send Message
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* small screen starts here */}

      {/* small screen ends here */}
    </>
  );
};

export default Contact;

//  <div
//    className=" w-ful h-screen text-center md:hidden "
//    style={{
//      backgroundImage: `url(${contactbg.src})`,
//      height: "120vw",
//      width: "auto",
//      backgroundRepeat: "no-repeat",
//      backgroundSize: "cover",
//      backgroundPosition: "bottom",
//    }}
//  >
//    <div id="contact" className="w-full lg:h-screen mt-[5rem]">
//      <div className="max-w-[1240px] m-auto px-2 py-16 w-full  pt-[10rem]">
//        <h2 className="py-4  mod:text-2xl text-white">Get In Touch</h2>
//        <div className="justify-center align-middle mx-auto  ">
//          <div className="grid lg:grid-cols sm:max-w-[35rem] gap-8 mx-auto bg-white  rounded-2xl ">
//            <div className=" w-full h-auto shadow-lg shadow-blue  rounded-2xl lg:p-4">
//              <div className="p-4">
//                {/* <form id="form" name="form" ref={form} onSubmit={sendEmail}> */}
//                <form id="form" name="form" onSubmit={sendEmail}>
//                  <div className="flex flex-col">
//                    <label className="uppercase text-sm py-2">Name</label>
//                    <input
//                      name="name"
//                      value={name}
//                      onChange={(e) => setName(e.target.value)}
//                      data-aos="fade-down"
//                      data-aos-duration="1000"
//                      className="border-2 rounded-lg p-3 flex border-blue focus:outline-[#5AFBD9] "
//                      type="text"
//                    />
//                  </div>
//                  <div className="flex flex-col">
//                    <label className="uppercase text-sm py-2">
//                      Phone Number
//                    </label>
//                    <input
//                      name="name"
//                      value={phone}
//                      onChange={(e) => setPhone(e.target.value)}
//                      data-aos="fade-down"
//                      data-aos-duration="1000"
//                      className="border-2 rounded-lg p-3 flex border-blue focus:outline-[#5AFBD9] "
//                      type="tel"
//                    />
//                  </div>
//                  {/* </div> */}
//                  <div className="flex flex-col py-2">
//                    <label className="uppercase text-sm py-2">Email</label>
//                    <input
//                      value={email}
//                      onChange={(e) => setEmail(e.target.value)}
//                      data-aos="fade-down"
//                      data-aos-duration="1000"
//                      className="border-2 rounded-lg p-3 flex border-blue focus:outline-[#5AFBD9] "
//                      type="email"
//                      name="email"
//                    />
//                  </div>
//                  <div className="flex flex-col py-2">
//                    <label className="uppercase text-sm py-2">Subject</label>
//                    <input
//                      name="subject"
//                      value={subject}
//                      onChange={(e) => setSubject(e.target.value)}
//                      data-aos="fade-down"
//                      data-aos-duration="1000"
//                      className="border-2 rounded-lg p-3 flex border-blue focus:outline-[#5AFBD9]"
//                      type="text"
//                    />
//                  </div>
//                  <div className="flex flex-col py-2">
//                    <label className="uppercase text-sm py-2">Message</label>
//                    <textarea
//                      value={message}
//                      onChange={(e) => setMessage(e.target.value)}
//                      data-aos="fade-down"
//                      data-aos-duration="1000"
//                      className="border-2 rounded-lg p-3 border-blue focus:outline-[#5AFBD9]"
//                      rows="10"
//                      name="message"
//                    ></textarea>
//                  </div>
//                  <div
//                    className=" flex justify-center align-middle mx-auto"
//                    data-aos="fade-down"
//                    data-aos-duration="1000"
//                  >
//                    <button className="  text-white mt-4  rounded-tr-[10px]  rounded-bl-[10px] rounded-tl-[5px] rounded-br-[5px]    px-4 py-1 hover:scale-110 ease-in duration-300 bg-[#FF7B57] text-lg mr-3 hover:bg-[#FFBF49]  my-3">
//                      Send Message
//                    </button>
//                  </div>
//                </form>
//              </div>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  </div>;
