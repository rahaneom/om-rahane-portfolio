import React from "react";
import DotPattern from "../DotPattern/DotPattern";
import { cn } from "utils/cn";
import Image from "next/image";

const StickyScroll = ({ contentItems }) => {
  const item = contentItems[0]; // only one item now

  return (
    <div className="relative">
      {/* Background Pattern */}
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] rounded-2xl py-3 px-2 md:px-0 z-20",
        )}
      />

      {/* Top & Bottom fade */}
      <div className="absolute top-0 left-0 right-0 z-10 h-14 bg-gradient-to-b from-black to-transparent rounded-2xl" />
      <div className="absolute bottom-0 left-0 right-0 z-10 h-14 bg-gradient-to-t from-black to-transparent rounded-2xl" />

      {/* MAIN CONTAINER */}
      <div className="h-[28rem] flex items-center justify-between gap-10 p-6 rounded-2xl outline outline-1 outline-gray-dark-1">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center max-w-xl space-y-6 text-white">
          <div className="flex items-center gap-6">
            <Image
              src={`/work/${item.logo}`}
              alt={item.title}
              width={82}
              height={82}
              className="object-contain pb-2"
            />
            <h2 className="text-2xl font-semibold md:text-3xl">{item.title}</h2>
          </div>

          {Array.isArray(item.description) ? (
            <div className="space-y-3 text-lg leading-relaxed text-gray-300">
              {item.description.map((line) => (
                <p key={line} className="flex gap-3">
                  <span className="text-gray-300 ">.</span>
                  <span>{line}</span>
                </p>
              ))}
            </div>
          ) : (
            <p className="text-lg leading-relaxed text-gray-300">
              {item.description}
            </p>
          )}

          <div>
            <h3 className="mb-3 text-sm tracking-widest text-gray-400 uppercase">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-3">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-sm transition border rounded-full bg-black/30 backdrop-blur-md border-white/20 hover:bg-white hover:text-black"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col justify-center max-w-xl space-y-8 text-white">
          <div className="flex items-center gap-4">
            <div className="p-2 border rounded-lg bg-white/5 border-white/10 backdrop-blur-md">
              <Image
                src={`/work/${item.logo}`}
                alt={item.title}
                width={92}
                height={92}
                className="object-contain"
              />
            </div>

            <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
              {item.title}
            </h2>
          </div>

          <div className="space-y-4 text-lg leading-relaxed text-gray-300">
            {item.description.map((line, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <span
                  className="mt-2.5 h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 
      transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_80px_rgb(87, 39, 149)]"
                />

                <p className="transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                  {line}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <h3 className="mb-4 text-xs tracking-[0.2em] text-gray-500 uppercase">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-3">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-1.5 text-sm rounded-full border border-white/10 
          bg-white/5 backdrop-blur-md 
          hover:bg-white hover:text-black 
          transition-all duration-300 cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div> */}
        {/* RIGHT SIDE CARD */}
        <div className="items-center justify-center hidden shadow-lg lg:flex h-60 w-80 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-400">
          {item.content}
        </div>
      </div>
    </div>
  );
};

export default StickyScroll;
