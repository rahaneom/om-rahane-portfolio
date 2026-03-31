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
                  <span className="text-gray-300">.</span>
                  <span>{line}</span>
                </p>
              ))}
            </div>
          ) : (
            <p className="text-lg leading-relaxed text-gray-300">
              {item.description}
            </p>
          )}

          {/* TECHNOLOGIES */}
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

        {/* RIGHT SIDE CARD */}
        <div className="items-center justify-center hidden shadow-lg lg:flex h-60 w-80 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-400">
          {item.content}
        </div>
      </div>
    </div>
  );
};

export default StickyScroll;

// import React, { useState, useRef } from "react";
// import { useMotionValueEvent, useScroll, motion } from "framer-motion";
// import DotPattern from "../DotPattern/DotPattern";
// import { cn } from "utils/cn";

// const backgroundColors = ["#000000"];

// const linearGradients = [
//   "linear-gradient(to bottom right, #ef008f, #6ec3f4)",
//   "linear-gradient(to bottom right, #6ec3f4, #7038ff)",
//   "linear-gradient(to bottom right, #7038ff, #c9c9c9)",
// ];

// const StickyScroll = ({ contentItems }) => {
//   const [activeCard, setActiveCard] = useState(0);
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     container: containerRef,
//     offset: ["start start", "end start"],
//   });

//   const cardLength = contentItems.length;

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     const cardsBreakpoints = contentItems.map(
//       (_, index) => index / cardLength - 0.1
//     );

//     const closestBreakpointIndex = cardsBreakpoints.reduce(
//       (acc, breakpoint, index) => {
//         const distance = Math.abs(latest - breakpoint);
//         if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
//           return index;
//         }
//         return acc;
//       },
//       0
//     );
//     setActiveCard(closestBreakpointIndex);
//   });

//   return (
//     <div className="relative">
//       <DotPattern
//         width={20}
//         height={20}
//         cx={1}
//         cy={1}
//         cr={1}
//         className={cn(
//           "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] rounded-2xl py-3 px-2 md:px-0 z-20"
//         )}
//       />

//       <div className="absolute top-0 left-0 right-0 z-10 h-14 bg-gradient-to-b from-black to-transparent rounded-2xl" />
//       <div className="absolute bottom-0 left-0 right-0 z-10 h-14 bg-gradient-to-t from-black to-transparent rounded-2xl" />

//       <motion.div
//         ref={containerRef}
//         animate={{
//           backgroundColor:
//             backgroundColors[activeCard % backgroundColors.length],
//         }}
//         className="h-[28rem] flex justify-center space-x-10 p-4 rounded-2xl outline outline-1 outline-gray-dark-1 overflow-y-auto no-scrollbar"
//       >
//         <div className="flex items-start px-4">
//           <div className="max-w-2xl">
//             {contentItems.map((item, index) => (
//               <div key={item.title + index} className="my-8">
//                 <motion.h2
//                   initial={{
//                     opacity: 0,
//                   }}
//                   animate={{
//                     opacity: activeCard === index ? 1 : 0.3,
//                   }}
//                   className="text-2xl font-bold text-slate-100"
//                 >
//                   {item.title}
//                 </motion.h2>
//                 <motion.p
//                   initial={{
//                     opacity: 0,
//                   }}
//                   animate={{
//                     opacity: activeCard === index ? 1 : 0.3,
//                   }}
//                   className="max-w-sm mt-4 text-lg text-slate-300"
//                 >
//                   {item.description}
//                 </motion.p>
//               </div>
//             ))}
//             <div className="h-40" />
//           </div>
//         </div>
//         <motion.div
//           animate={{
//             backgroundImage:
//               linearGradients[activeCard % linearGradients.length],
//           }}
//           className="sticky hidden overflow-hidden bg-white lg:block h-60 w-80 rounded-xl top-10"
//         >
//           {contentItems[activeCard].content ?? null}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default StickyScroll;
