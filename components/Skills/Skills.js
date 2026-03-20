/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";

const Skills = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<",
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  //   const SkillCard = ({ title, skills }) => {
  //   return (
  //     <div className="mb-12">
  //       <h3 className="mb-6 text-sm tracking-widest text-gray-400 uppercase">
  //         {title}
  //       </h3>

  //       <div className="flex flex-wrap gap-3">
  //         {skills.map((skill) => (
  //           <div
  //             key={skill}
  //             className="px-4 py-2 text-sm text-gray-300 bg-[#111] border border-gray-800 rounded-full transition duration-300 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
  //           >
  //             {skill}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  const SkillCard = ({ title, skills }) => {
    const hasIcon = (skill) => {
      // const noIconSkills = ["dsa", "oop", "machinelearning"];
      const noIconSkills = [];
      return !noIconSkills.includes(skill.toLowerCase());
    };

    return (
      <div className="mb-12">
        <h3 className="mb-6 text-sm tracking-widest text-gray-400 uppercase">
          {title}
        </h3>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 bg-[#111] rounded-full transition duration-300 transform hover:scale-105 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]"
            >
              {/* ICON */}
              {hasIcon(skill) ? (
                <Image
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={18}
                  height={18}
                  className="opacity-100"
                />
              ) : (
                <span className="w-2 h-2 rounded-full group-hover:bg-indigo-500/5"></span>
              )}

              {/* TEXT */}
              <span className="tracking-wide capitalize">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      className="relative w-full mt-20 select-none"
    >
      <div className="flex flex-col justify-center py-16 section-container">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute right-0 hidden w-2/12 max-w-xs bottom-3/4 md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <p className="tracking-widest uppercase text-gray-light-1 staggered-reveal">
              SKILLS
            </p>
            <h1 className="mt-2 text-6xl font-medium text-gradient w-fit staggered-reveal">
              My Skills
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-2xl w-full mt-10 staggered-reveal">
              I design REST APIs, optimize backend performance, and contribute
              to real-world applications using my profound skillset.{" "}
            </h2>
          </div>
          {/* <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
            <h3 className="mb-4 text-base font-medium tracking-widest uppercase text-gray-light-2 staggered-reveal">
              LANGUAGES AND TOOLS
            </h3>
            <div className="flex flex-wrap items-center gap-6 staggered-reveal">
              {SKILLS.languagesAndTools.map((skill) => (
                <Image
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
            <h3 className="mb-4 text-base font-medium tracking-widest uppercase text-gray-light-2 staggered-reveal">
              LIBRARIES AND FRAMEWORKS
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu staggered-reveal">
              {SKILLS.librariesAndFrameworks.map((skill) => (
                <Image
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap mt-10">
            <div className="mb-6 mr-16 xs:mr-20 staggered-reveal">
              <h3 className="mb-4 text-base font-medium tracking-widest uppercase text-gray-light-2">
                DATABASES
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {SKILLS.databases.map((skill) => (
                  <Image
                    key={skill}
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                ))}
              </div>
            </div>
            <div className="staggered-reveal">
              <h3 className="mb-4 text-base font-medium tracking-widest uppercase text-gray-light-2">
                Other
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {SKILLS.other.map((skill) => (
                  <Image
                    key={skill}
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                ))}
              </div>
            </div>
          </div> */}

          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
            <SkillCard
              title="Languages & Tools"
              skills={SKILLS.languagesAndTools}
            />

            <SkillCard
              title="Frameworks"
              skills={SKILLS.librariesAndFrameworks}
            />

            <SkillCard title="Databases" skills={SKILLS.databases} />

            <SkillCard title="Other" skills={SKILLS.other} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
