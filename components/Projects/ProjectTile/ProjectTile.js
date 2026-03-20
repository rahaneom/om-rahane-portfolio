import { useEffect, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import styles from "./ProjectTile.module.scss";
// import { PROJECT_IMAGES } from "../images";

const tiltOptions = {
  max: 5,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  gyroscope: false,
};

const ProjectTile = ({ project, classes, isDesktop }) => {
  const projectCard = useRef(null);

  const { name, imageKey, description, gradient, url, tech } = project;

  // const image = PROJECT_IMAGES[imageKey];
  const image = `/projects/${imageKey}.png`;

  let additionalClasses = "";
  if (classes) {
    additionalClasses = classes;
  }

  useEffect(() => {
    VanillaTilt.init(projectCard.current, tiltOptions);
  }, [projectCard]);

  return (
    <a
      href={url}
      className={`overflow-hidden rounded-3xl snap-start link ${additionalClasses}`}
      target="_blank"
      rel="noreferrer"
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        ref={projectCard}
        className={`${styles.projectTile} rounded-3xl relative p-6 flex flex-col justify-between max-w-full`}
        style={{
          background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        <Image
          src="/project-bg.svg"
          alt="project"
          className="absolute top-0 left-0 w-full h-full opacity-20 rounded-3xl"
          fill
        />
        {/* <Image
          src={image}
          alt={name}
          placeholder="blur"
          fill
          className={styles.projectImage}
        /> */}
        <div className="absolute right-4 top-20 w-[60%] h-[60%] z-10 pointer-events-none">
          <Image
            src={image || "/projects/default.png"}
            alt={name}
            width={800}
            height={800}
            className="object-contain shadow-2xl rounded-xl"
          />
        </div>
        {!isDesktop && (
          <div
            className="absolute bottom-0 left-0 w-full h-20"
            style={{
              background: `linear-gradient(0deg, ${gradient[0]} 10%, rgba(0,0,0,0) 100%)`,
            }}
          />
        )}
        <div className="z-20 flex items-start justify-between">
          <h1
            className="text-2xl font-medium sm:text-3xl"
            style={{ transform: "translateZ(3rem)" }}
          >
            {name}
          </h1>

          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 transition border rounded-full bg-black/30 backdrop-blur-md border-white/10 hover:scale-110"
              >
                <Image
                  src="/icons/github.svg"
                  alt="github"
                  width={20}
                  height={20}
                  className="invert"
                />
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="p-2 transition border rounded-full bg-black/30 backdrop-blur-md border-white/10 hover:scale-110"
              >
                <Image
                  src="/icons/live.svg"
                  alt="live"
                  width={20}
                  height={20}
                  className="invert"
                />
              </a>
            )}
          </div>
        </div>

        <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[220px] h-[200px] z-20">
          {tech.map((el, i) => {
            const positions = [
              "top-0 left-6",
              "top-12 left-0",
              "top-24 left-10",
              "top-6 left-28",
              "top-20 left-32",
              "top-36 left-20",
            ];

            return (
              <div
                key={el}
                className={`absolute ${positions[i % positions.length]} group`}
              >
                {/* glow */}
                <div className="absolute w-10 h-10 transition rounded-full opacity-0 bg-white/10 blur-xl group-hover:opacity-100" />

                {/* icon */}
                <div className="p-3 transition duration-300 border shadow-lg rounded-xl bg-black/30 backdrop-blur-md border-white/10 group-hover:scale-110">
                  <Image
                    src={`/projects/tech/${el}.svg`}
                    alt={el}
                    width={26}
                    height={26}
                    className="brightness-125 contrast-125"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <h2
          className="z-10 text-lg font-medium tracking-wide text-white transform-gpu"
          style={{ transform: "translateZ(0.8rem)" }}
        >
          {description}
        </h2>
      </div>
    </a>
  );
};

export default ProjectTile;
