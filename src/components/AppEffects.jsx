import { useEffect, useRef } from "react";

export default function AppEffects() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    fadeElements.forEach((element) => observer.observe(element));

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      const position = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`;

      if (dotRef.current) {
        dotRef.current.style.transform = position;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = position;
      }
    };

    const handlePointerDown = () => document.body.classList.add("clicking");
    const handlePointerUp = () => document.body.classList.remove("clicking");
    const handleMouseOver = (event) => {
      if (event.target.closest("a, button, input, textarea, select")) {
        document.body.classList.add("hovering");
      }
    };
    const handleMouseOut = (event) => {
      if (event.target.closest("a, button, input, textarea, select")) {
        document.body.classList.remove("hovering");
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.body.classList.remove("hovering", "clicking");
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>
    </>
  );
}
