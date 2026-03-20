import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About2 = ({ clientHeight }) => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".reveal-line"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  const items = [
    "System Thinker",
    "API Designer",
    "Problem Solver",
    "Scalable Builder",
  ];

  return (
    <section ref={sectionRef} className="relative w-full select-none">
      <div
        className={`${
          clientHeight > 650 ? "py-64" : "py-52"
        } section-container`}
      >
        <div className="flex flex-col items-center gap-6 text-center">
          {items.map((text, index) => {
            const [first, ...rest] = text.split(" ");
            return (
              <h1
                key={index}
                className="reveal-line text-4xl md:text-6xl lg:text-[4rem] font-semibold text-gray-300"
              >
                <span className="text-indigo-500 transition duration-300 hover:text-white">{first}</span>{" "}
                {rest.join(" ")}
              </h1>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About2;
