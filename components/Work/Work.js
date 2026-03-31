import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Tabs from "./Tabs/Tabs";
import StickyScroll from "./StickyScroll/StickyScroll";
import { MENULINKS, WORK_CONTENTS } from "../../constants";

const Work = ({ isDesktop }) => {
  const sectionRef = useRef(null);

  const tabItems = useMemo(
    () => [
      {
        title: "DRDO",
        logo: "drdo.png",
        value: "drdo",
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={WORK_CONTENTS.DRDO}
          />
        ),
      },
      {
        title: "Sumago",
        logo: "sumago.png",
        value: "sumago",
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={WORK_CONTENTS.SUMAGO}
          />
        ),
      },
    ],
    [isDesktop],
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<",
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".work-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[3].ref}
      className="relative w-full mb-32 select-none xs:mt-40 sm:mt-72"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/left-pattern.svg"
        className="absolute left-0 hidden w-1/12 max-w-xs -top-2/4 md:block"
        loading="lazy"
        height={700}
        width={320}
        alt="left pattern"
      />
      <div className="flex flex-col justify-center py-16 section-container">
        <div className="flex flex-col work-wrapper">
          <div className="flex flex-col">
            <p className="tracking-widest uppercase text-gray-light-1 staggered-reveal">
              WORK
            </p>
            <h1 className="mt-2 text-6xl font-medium text-gradient w-fit staggered-reveal">
              Experience
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              A quick recap of where I&apos;ve worked.{" "}
            </h2>
          </div>
          <Tabs tabItems={tabItems} />
        </div>
      </div>
    </section>
  );
};

export default Work;
