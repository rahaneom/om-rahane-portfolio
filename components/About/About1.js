import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About1 = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          defaults: { ease: "none", duration: 0.1 },
        })
        .fromTo(
          quoteRef.current.querySelector(".about-1"),
          { opacity: 0.2 },
          { opacity: 1 },
        )
        .to(quoteRef.current.querySelector(".about-1"), {
          opacity: 0.2,
          delay: 0.5,
        })
        .fromTo(
          quoteRef.current.querySelector(".about-2"),
          { opacity: 0.2 },
          { opacity: 1 },
          "<",
        )
        .to(quoteRef.current.querySelector(".about-2"), {
          opacity: 0.3,
          delay: 1,
        });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center 80%",
        end: "center top",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full select-none">
      <div
        className={`${
          clientHeight > 650 ? "pt-28 pb-16" : "pt-80 pb-72"
        } section-container`}
      >
        <h1
          ref={quoteRef}
          className="font-medium text-[2.5rem] md:text-6xl lg:text-[3.5rem] text-center"
        >
          <span className="leading-tight about-1">
            I’m a <span className="text-indigo-dark">Software Engineer</span> focused on building scalable backend systems
            and real-world applications.{" "}
          </span>
          <span className="leading-tight about-2">
            I work across <span className="text-indigo-dark">Full-Stack</span> and <span className="text-indigo-dark">Machine Learning</span>, solving problems with
            clean architecture and efficient design.{" "}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default About1;
