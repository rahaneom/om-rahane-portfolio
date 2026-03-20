import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Typed from "typed.js";
import gsap from "gsap";
import Button from "../Button/Button";
import Profiles from "../Profiles/Profiles";
import styles from "./Hero.module.scss";
import { MENULINKS, TYPED_STRINGS } from "../../constants";

const options = {
  strings: TYPED_STRINGS,
  typeSpeed: 50,
  startDelay: 1500,
  backSpeed: 50,
  backDelay: 8000,
  loop: true,
};

const Hero = () => {
  // const [lottie, setLottie] = useState(null);

  const sectionRef = useRef(null);
  const typedElementRef = useRef(null);
  // const lottieRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "none" } })
        .to(sectionRef.current, { opacity: 1, duration: 2 })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<",
        );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, options);

    return () => typed.destroy();
  }, [typedElementRef]);

  // useEffect(() => {
  //   import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  // }, []);

  // useEffect(() => {
  //   if (lottie && lottieRef.current) {
  //     const animation = lottie.loadAnimation({
  //       container: lottieRef.current,
  //       renderer: "svg",
  //       loop: true,
  //       autoplay: true,
  //       animationData: require("../../public/lottie/lottie.json"),
  //     });

  //     return () => animation.destroy();
  //   }
  // }, [lottie]);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[0].ref}
      className="relative flex w-full min-h-screen px-4 py-8 mx-auto mb-24 md:items-center 2xl:container xl:px-20 md:px-12"
      style={{ opacity: 0 }}
    >
      <style global jsx>
        {`
          .typed-cursor {
            font-size: 2rem;
          }
        `}
      </style>
      <div className="flex flex-col pt-32 select-none md:pt-0">
        <h5
          className={`${styles.intro} font-mono font-medium text-indigo-light staggered-reveal`}
        >
          Hi, my name is
        </h5>
        <h1 className={`${styles.heroName} text-white text-6xl font-semibold`}>
          <span className={`relative ${styles.emphasize} staggered-reveal`}>
            Om
          </span>
          <span className="staggered-reveal"> Rahane</span>
        </h1>
        <h2 className="mt-2 text-xl text-indigo-400 staggered-reveal">
          Software Engineer | Full-Stack Developer | ML Enthusiast
        </h2>
        <p>
          <span
            ref={typedElementRef}
            className="font-mono text-3xl leading-relaxed staggered-reveal text-gray-light-3"
          />
        </p>
        <div className="staggered-reveal">
          <Profiles />
        </div>
        <div className="pt-4 staggered-reveal">
          <Button href={`#${MENULINKS[4].ref}`} classes="link" type="primary">
            Contact Me
          </Button>
        </div>
        <div className="flex gap-4 pt-4 staggered-reveal">
          <Button
            href="/resume.pdf"
            target="blank"
            classes="link"
            type="secondary"
          >
            Download Resume
          </Button>
        </div>
      </div>
      {/* <div
        className="absolute invisible w-4/12 bottom-1.5 lg:visible lg:right-12 2xl:right-16"
        ref={lottieRef}
      /> */}
      <div className="absolute invisible lg:visible lg:right-20 2xl:right-20 bottom-25 w-96 h-96 group">
        <div className="absolute inset-0 transition bg-indigo-500 opacity-20 blur-xl group-hover:opacity-40" />
        <Image
          src="/profile.png"
          alt="Om Rahane"
          fill
          className="relative z-10 object-cover rounded-2xl border border-gray-700 shadow-[0_0_40px_rgba(200, 201, 249, 0.948)]"
        />
      </div>
    </section>
  );
};

export default Hero;
