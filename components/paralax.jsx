import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import IconMobile from "../public/assets/svg/mobileSVG";
import { SiMaterialdesign } from "react-icons/si";
import "../app/globals.css";

const Paralax = () => {
  // Check if the screen size is desktop or larger
  const isDesktopOrLarger = useIsDesktopOrLarger();

  return (
    <div id="skills">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <div className="ml-[50px]">
        <p className="uppercase text-xl tracking-widest text-[#5651e5] py-2">
          Services
        </p>

        <h2 className="py-4 mod:text-2xl">
          Discover Our Offerings and Value Proposition
        </h2>
      </div>
      {isDesktopOrLarger ? (
        <HorizontalScrollCarousel />
      ) : (
        <div className="grid grid-cols-1 gap-4 bg-white">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      )}

      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll Up
        </span>
      </div>

      {/* </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-40%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-500">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// const Card = ({ card }) => {
//   return (
//     <div
//       key={card.id}
//       className="group relative h-[400px] w-[350px] overflow-hidden bg-neutral-200 mx-auto "
//     >
//       <div
//         style={{
//           backgroundImage: `url(${card.url})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//       ></div>
//       <div className="absolute inset-0 flex flex-col">
//         <div className="mx-auto mt-3">
//           <div className="cursor-pointer transform transition-all hover:bg-blue-500 hover:text-white hover:scale-110">
//             {card.icon}
//           </div>
//         </div>
//         <h3 className="text-center bg-gradient-to-br from-white/20 to-white/10 p-8 text-xl font-black uppercase text-blue backdrop-blur-lg mt-3">
//           {card.title}
//         </h3>
//         <h3 className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-center text-black backdrop-blur-lg">
//           {card.description}
//         </h3>
//       </div>
//     </div>
//   );
// };
// const Card = ({ card }) => {
//   return (
//     <div
//       key={card.id}
//       className="group relative h-[400px] w-[350px] overflow-hidden bg-neutral-200 mx-auto cursor-pointer transform transition-all hover:bg-blue-500 hover:text-blue "
//     >
//       <div
//         style={{
//           backgroundImage: `url(${card.url})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0 transition-transform duration-300 "
//       ></div>
//       <div className="absolute inset-0 flex flex-col">
//         <div className="mx-auto mt-3">{card.icon}</div>
//         <h3 className="text-center bg-gradient-to-br from-white/20 to-white/10 p-8 text-xl font-black uppercase text-blue backdrop-blur-lg mt-3">
//           {card.title}
//         </h3>
//         <h3 className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-center text-black backdrop-blur-lg">
//           {card.description}
//         </h3>
//       </div>
//     </div>
//   );
// };
const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className=" card-container group relative h-[400px] w-[350px] overflow-hidden bg-neutral-200 mx-auto cursor-pointer transform transition-all hover:bg-blue-500"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 "
      ></div>
      <div className="absolute inset-0 flex flex-col">
        <div className="mx-auto mt-3">
          <div className="icon-container">{card.icon}</div>
        </div>
        <h3 className="text-center bg-gradient-to-br from-white/20 to-white/10 p-8 text-xl font-black uppercase text-blue backdrop-blur-lg mt-3">
          {card.title}
        </h3>
        <h3 className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-center text-black backdrop-blur-lg">
          {card.description}
        </h3>
      </div>
    </div>
  );
};

export default Paralax;

// Function to check if the screen size is desktop or larger
const useIsDesktopOrLarger = () => {
  const [isDesktopOrLarger, setIsDesktopOrLarger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // setIsDesktopOrLarger(window.innerWidth >= 1024);
      setIsDesktopOrLarger(window.innerWidth >= 640);
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isDesktopOrLarger;
};

const cards = [
  {
    url: "/assets/stylish2.jpg",
    title: "Mobile Responsive",
    description:
      "Adaptable on any device dramatically boosts user experience, increases time spent on your website, and improves readability. Small or large, My designs are compatible with any device.",
    id: 1,
    icon: <IconMobile />,
  },

  {
    url: "/assets/stylish2.jpg",
    title: "Web Design",
    description:
      " Adaptable on any device dramatically boosts user experience, increases time spent on your website, and improves readability. Small or large, My designs are compatible with any device.",
    id: 2,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="3em"
        width="3em"
        className=""
      >
        <path d="M21 12c0-2.03-.67-3.91-2-5.62v11.25c1.33-1.66 2-3.54 2-5.63m-3.37 7H6.38c.68.55 1.57 1 2.67 1.41 1.09.39 2.08.59 2.95.59.88 0 1.86-.2 2.95-.59 1.1-.41 1.99-.86 2.68-1.41M11 17L7 9v8h4m6-8l-4 8h4V9m-5 5.53L15.75 7h-7.5L12 14.53M17.63 5C15.97 3.67 14.09 3 12 3s-3.97.67-5.62 2h11.25M5 17.63V6.38C3.67 8.09 3 9.97 3 12c0 2.09.67 3.97 2 5.63M23 12c0 3.03-1.06 5.63-3.22 7.78C17.63 21.94 15.03 23 12 23c-3.03 0-5.62-1.06-7.78-3.22C2.06 17.63 1 15.03 1 12c0-3.03 1.06-5.62 3.22-7.78S8.97 1 12 1c3.03 0 5.63 1.06 7.78 3.22C21.94 6.38 23 8.97 23 12z" />
      </svg>
    ),
  },

  {
    url: "/assets/stylish2.jpg",
    title: "Fast Load Speed",
    description:
      " I value simple content structure, clean design patterns for MOBILE APP, WEB APP, LOGOS etc, and thoughtful interactions. That sets a positve first impression on your audience",
    id: 3,
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" height="3em" width="3em">
        <path d="M326.1 231.9l-47.5 75.5a31 31 0 01-7 7 30.11 30.11 0 01-35-49l75.5-47.5a10.23 10.23 0 0111.7 0 10.06 10.06 0 012.3 14z" />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
          d="M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0056.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0037.1-.1 173.13 173.13 0 01254.8 0 25.19 25.19 0 0037.1.1l3.2-3.5A223.18 223.18 0 00480 287.9C480 164.2 379.7 64 256 64z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={32}
          d="M256 128v32M416 288h-32M128 288H96M165.49 197.49l-22.63-22.63M346.51 197.49l22.63-22.63"
        />
      </svg>
    ),
  },

  {
    url: "/assets/stylish2.jpg",
    title: "Clean Code",
    description:
      " Utilize and Improve your overall performance with the use a lite and highly maintainable code base.",
    id: 4,
    icon: (
      <svg fill="currentColor" viewBox="0 0 16 16" height="3em" width="3em">
        <path d="M10.478 1.647a.5.5 0 10-.956-.294l-4 13a.5.5 0 00.956.294l4-13zM4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0z" />
      </svg>
    ),
  },

  {
    url: "/assets/stylish2.jpg",
    title: "SEO",
    description:
      " Increase your website's ranking on search engine results pages with 'Search Engine Optimization' ",
    id: 5,
    icon: (
      <svg fill="none" viewBox="0 0 24 24" height="3em" width="3em">
        <path
          fill="currentColor"
          d="M7.665 10.237L9.198 8.95l1.285 1.532 3.064-2.571 1.286 1.532-4.596 3.857-2.572-3.064z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.207 4.893a8.001 8.001 0 01.662 10.565c.016.013.03.027.045.042l4.243 4.243a1 1 0 01-1.414 1.414L15.5 16.914a1.046 1.046 0 01-.042-.045A8.001 8.001 0 014.893 4.893a8 8 0 0111.314 0zm-1.414 9.9a6 6 0 10-8.485-8.485 6 6 0 008.485 8.485z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },

  {
    url: "/assets/stylish2.jpg",
    title: "Intuitive",
    description:
      " Strong preference for user-friendly, Intuitive UX/UI. That certainly helps to drive traffic to your website.",
    id: 6,
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        height="3em"
        width="3em"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M18 8a3 3 0 010 6M10 8v11a1 1 0 01-1 1H8a1 1 0 01-1-1v-5" />
        <path d="M12 8h0l4.524-3.77A.9.9 0 0118 4.922v12.156a.9.9 0 01-1.476.692L12 14H4a1 1 0 01-1-1V9a1 1 0 011-1h8" />
      </svg>
    ),
  },

  // Add more cards as needed
];
