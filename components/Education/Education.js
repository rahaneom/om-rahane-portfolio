import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Education = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1 },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="w-full py-20 section-container"
    >
      <h2 className="mb-10 text-3xl font-semibold text-white md:text-4xl">
        Education
      </h2>

      <div className="max-w-4xl space-y-6">
        {/* PCCOE */}
        <div className="group relative bg-[#111] border border-gray-800 p-6 rounded-xl border-l-4 border-l-indigo-500 hover:border-indigo-400 hover:translate-y-[-4px] transition duration-300 overflow-hidden">
          {/* LEFT IMAGE */}
          <div className="absolute inset-0 transition duration-500 opacity-0 group-hover:opacity-30">
            <Image
              src="/education/pccoe.png"
              alt="PCCOE"
              fill
              className="object-cover transition duration-700 scale-100 group-hover:scale-110"
            />
          </div>

          <div className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none group-hover:opacity-30"></div>

          {/* RIGHT CONTENT */}
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              B.Tech in Information Technology
            </h3>

            <p className="mt-2 text-lg text-gray-300">
              Pimpri Chinchwad College of Engineering, Pune
            </p>

            <div className="flex items-center justify-between mt-3">
              <span className="italic text-gray-400">2024 – 2027</span>

              <span className="px-4 py-1 text-base font-semibold font-mono tracking-wide text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                Score: 9.35
              </span>
            </div>
          </div>
        </div>

        {/* Diploma */}
        <div className="group relative bg-[#111] border border-gray-800 p-6 rounded-xl border-l-4 border-l-indigo-500 hover:border-indigo-400 hover:translate-y-[-4px] transition duration-300 overflow-hidden">
          {/* IMAGE */}
          <div className="absolute inset-0 transition duration-500 opacity-0 pointer-events-none group-hover:opacity-30">
            <Image
              src="/education/gpnashik.png"
              alt="Government Polytechnic, Nashik"
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 transition duration-500 bg-black pointer-events-none opacity-60 group-hover:opacity-40"></div>

          {/* CONTENT */}
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              Diploma in Computer Engineering
            </h3>

            <p className="mt-2 text-lg text-gray-300">
              Government Polytechnic, Nashik
            </p>

            <div className="flex items-center justify-between mt-3">
              <span className="italic text-gray-400">2021 – 2024</span>

              <span className="px-4 py-1 text-base font-mono font-semibold tracking-wide text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                Score: 94.1
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
