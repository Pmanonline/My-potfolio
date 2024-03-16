import { useState, useEffect } from "react";

// Function to check if the screen size is desktop or larger
const useIsDesktopOrLarger = () => {
  const [isDesktopOrLarger, setIsDesktopOrLarger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Set isDesktopOrLarger based on the window width
      setIsDesktopOrLarger(window.innerWidth >= 1024);
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

export default useIsDesktopOrLarger;
