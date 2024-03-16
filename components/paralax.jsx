import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import IconMobile from "../public/assets/svg/mobileSVG";

const Paralax = () => {
  // Check if the screen size is desktop or larger
  const isDesktopOrLarger = useIsDesktopOrLarger();

  return (
    <div className="bg-neutral-800 ">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      {isDesktopOrLarger ? (
        <HorizontalScrollCarousel />
      ) : (
        <div className="grid grid-cols-1 gap-4 ">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      )}
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
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

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 mx-auto"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className=" absolute inset-0 flex flex-col ">
        <div className="mx-auto mt-5">
          <IconMobile />
        </div>
        <h3 className="text-center bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl  font-black uppercase text-blue backdrop-blur-lg  mt-5">
          {card.title}
        </h3>
        <h3 className="bg-gradient-to-br from-white/20 to-white/0 p-8   text-center text-black backdrop-blur-lg  mt-5">
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
  },

  {
    url: "/assets/stylish2.jpg",
    title: "Mobile Responsive",
    description:
      "Adaptable on any device dramatically boosts user experience, increases time spent on your website, and improves readability. Small or large, My designs are compatible with any device.",
    id: 1,
  },

  {
    url: "/assets/stylish2.jpg",
    title: "Mobile Responsive",
    description:
      "Adaptable on any device dramatically boosts user experience, increases time spent on your website, and improves readability. Small or large, My designs are compatible with any device.",
    id: 1,
  },

  {
    url: "/assets/stylish2.jpg",
    title: "Mobile Responsive",
    description:
      "Adaptable on any device dramatically boosts user experience, increases time spent on your website, and improves readability. Small or large, My designs are compatible with any device.",
    id: 1,
  },

  {
    url: "/assets/stylish2.jpg",
    title: "Mobile Responsive",
    description:
      "Adaptable on any device dramatically boosts user experience, increases time spent on your website, and improves readability. Small or large, My designs are compatible with any device.",
    id: 1,
  },

  {
    url: "/assets/stylish2.jpg",
    title: "Mobile Responsive",
    description:
      "Adaptable on any device dramatically boosts user experience, increases time spent on your website, and improves readability. Small or large, My designs are compatible with any device.",
    id: 1,
  },

  // Add more cards as needed
];

// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import IconMobile from "../public/assets/svg/mobileSVG";

// const Paralax = () => {
//   // Check if the screen size is desktop or larger
//   const isDesktopOrLarger = useIsDesktopOrLarger();
//   const [scrollY, setScrollY] = useState(0);

//   // Function to update scroll position
//   const updateScrollPosition = () => {
//     setScrollY(window.scrollY);
//     requestAnimationFrame(updateScrollPosition);
//   };

//   useEffect(() => {
//     // Start updating scroll position
//     updateScrollPosition();
//     return () => {
//       // Cleanup
//       cancelAnimationFrame(updateScrollPosition);
//     };
//   }, []); // Run effect only once on mount

//   return (
//     <div className="bg-neutral-800">
//       <div className="flex h-48 items-center justify-center">
//         <span className="font-semibold uppercase text-neutral-500">
//           Scroll down
//         </span>
//       </div>
//       {scrollY >= 200 && <HorizontalScrollCarousel />}
//       <div className="flex h-48 items-center justify-center">
//         <span className="font-semibold uppercase text-neutral-500">
//           Scroll up
//         </span>
//       </div>
//     </div>
//   );
// };

// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

//   useEffect(() => {
//     // Function to update scroll position periodically
//     const autoScroll = () => {
//       const target = targetRef.current;
//       if (target) {
//         // Increment scrollLeft by 1 pixel
//         target.scrollLeft += 1;
//       }
//     };

//     // Set interval for auto-scrolling
//     const intervalId = setInterval(autoScroll, 50);

//     // Clean up on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         <motion.div style={{ x }} className="flex gap-4">
//           {cards.map((card) => (
//             <Card key={card.id} card={card} />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Card = ({ card }) => {
//   return (
//     <div
//       key={card.id}
//       className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 mx-auto"
//     >
//       <div
//         style={{
//           backgroundImage: `url(${card.url})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//       ></div>
//       <div className=" absolute inset-0 flex flex-col ">
//         <div className="mx-auto mt-5">
//           <IconMobile />
//         </div>
//         <h3 className="text-center bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl  font-black uppercase text-blue backdrop-blur-lg  mt-5">
//           {card.title}
//         </h3>
//         <h3 className="bg-gradient-to-br from-white/20 to-white/0 p-8   text-center text-black backdrop-blur-lg  mt-5">
//           {card.description}
//         </h3>
//       </div>
//     </div>
//   );
// };

// export default Paralax;

// // Function to check if the screen size is desktop or larger
// const useIsDesktopOrLarger = () => {
//   const [isDesktopOrLarger, setIsDesktopOrLarger] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktopOrLarger(window.innerWidth >= 640);
//     };

//     // Initial check on mount
//     handleResize();

//     // Event listener for window resize
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return isDesktopOrLarger;
// };

// const cards = [
//   {
//     url: "/assets/stylish2.jpg",
//     title: "Mobile Responsive",
//     description:
//       "Adaptable on any device dramatically boosts user experience, increases time spent on your website, and improves readability. Small or large, My designs are compatible with any device.",
//     id: 1,
//   },

//   {
//     url: "/assets/stylish2.jpg",
//     title: "Mobile Responsive",
//     description:
//       "Adaptable on any device dramatically boosts user experience, increases time spent on your website, and improves readability. Small or large, My designs are compatible with any device.",
//     id: 1,
//   },

//   {
//     url: "/assets/stylish2.jpg",
//     title: "Mobile Responsive",
//     description:
//       "Adaptable on any device dramatically boosts user experience, increases time spent on your website, and improves readability. Small or large, My designs are compatible with any device.",
//     id: 1,
//   },

//   {
//     url: "/assets/stylish2.jpg",
//     title: "Mobile Responsive",
//     description:
//       "Adaptable on any device dramatically boosts user experience, increases time spent on your website, and improves readability. Small or large, My designs are compatible with any device.",
//     id: 1,
//   },

//   {
//     url: "/assets/stylish2.jpg",
//     title: "Mobile Responsive",
//     description:
//       "Adaptable on any device dramatically boosts user experience, increases time spent on your website, and improves readability. Small or large, My designs are compatible with any device.",
//     id: 1,
//   },

//   {
//     url: "/assets/stylish2.jpg",
//     title: "Mobile Responsive",
//     description:
//       "Adaptable on any device dramatically boosts user experience, increases time spent on your website, and improves readability. Small or large, My designs are compatible with any device.",
//     id: 1,
//   },

//   // Add more cards as needed
// ];
