import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Aos from "aos";
import "aos/dist/aos.css";
import contactbg from "../public/assets/contactbg.png";
import contactbg1 from "../public/assets/contactbg1.png";
import { FaWhatsapp } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const templateParams = {
        to_name: "Peter Uche", // Assuming you want to send the email to the provided email address
        from_name: email, // Replace with the desired sender name
        message: message,
      };

      await emailjs.send(
        "service_mfruavt",
        "template_cst1uc9",
        templateParams,
        "9Tp4XEvOsWGi69ktz"
      );
      setSuccessMessage("Message sent successfully!");
    } catch (error) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }

    setName("");
    setEmail("");
    setPhone("");
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
            <h2 className="py-4  mod:text-2xl text-white">Get In Touch</h2>

            <div className="flex justify-around max-w-[250px] mx-aut  ml-[18em] py-5">
              <a
                href="https://wa.me/+2347062916027"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-white w-[35px] h-[35px] hover:scale-110 hover:bg-white hover:text-blue hover:rounded-full hover:p-1  transform transition-all duration-300 ease-out cursor-pointer" />
              </a>
              <a href="tel:+2347062916027">
                <MdCall className="text-white w-[35px] h-[35px] hover:scale-110 hover:bg-white hover:text-blue hover:rounded-full hover:p-1  transform transition-all duration-300 ease-out cursor-pointer" />
              </a>
            </div>

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
                          className="border-2 rounded-lg p-3 flex border-blue focus:outline-[#5AFBD9] "
                          type="text"
                        />
                      </div>

                      <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Email</label>
                        <input
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="border-2 rounded-lg p-3 flex border-blue focus:outline-[#5AFBD9] "
                          type="email"
                          name="email"
                        />
                      </div>

                      <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">
                          Message
                        </label>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="border-2 rounded-lg p-3 border-blue focus:outline-[#5AFBD9]"
                          rows="10"
                          name="message"
                        ></textarea>
                      </div>
                      {error && <p className=" text-red-500">{error}</p>}
                      {successMessage && (
                        <p className=" text-blue">{successMessage}</p>
                      )}
                      <div className=" flex justify-center align-middle mx-auto">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="hover:scale-90 ease-in duration-300  relative inline-flex items-center justify-center p-0.5 mt-5 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-purple border-1.5 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none "
                        >
                          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-blue rounded-md group-hover:bg-opacity-0 ">
                            {isLoading ? "Sending..." : "Send Message"}
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
    </>
  );
};

export default Contact;
