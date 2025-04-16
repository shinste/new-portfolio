import { useEffect } from "react";

const useIntersectionAnimation = (
  className = "animate",
  inViewClass = "in-view"
) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(inViewClass);
          obs.unobserve(entry.target);
        }
      });
    });

    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [className, inViewClass]);
};

export default useIntersectionAnimation;
