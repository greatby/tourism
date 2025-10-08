// "use client";
// import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa";

// export default function TrendingNow() {
//   return (
//     <section className="py-16 bg-white border-t border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
//           Trending Now on Lonely Planet
//         </h2>

//         {/* Cards container */}
//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           {/* Left Card */}
//           <div className="relative group overflow-hidden">
//             <div className="relative h-[400px] sm:h-[450px] w-full">
//               <Image
//                 src="/images/travel-2025.jpg"
//                 alt="Best in Travel 2025"
//                 fill
//                 className="object-cover group-hover:scale-105 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
//                 <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-200">
//                   Lonely Planet’s
//                 </p>
//                 <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
//                   Best in Travel 2025
//                 </h3>
//                 <button className="mt-4 inline-flex items-center gap-2 bg-white text-black text-xs sm:text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition">
//                   See the list <FaArrowRight className="text-xs" />
//                 </button>
//               </div>
//             </div>

//             {/* Decorative text below */}
//             <div className="mt-4 text-center text-[10px] sm:text-xs uppercase tracking-[0.15em] text-gray-500 flex flex-col sm:flex-row justify-center items-center gap-1">
//               <span>Check out our list of</span>
//               <span className="font-semibold text-gray-700">
//                 where to travel in 2025
//               </span>
//               <span className="text-2xl">🌴</span>
//             </div>
//           </div>

//           {/* Right Card */}
//           <div className="relative group overflow-hidden">
//             <div className="relative h-[400px] sm:h-[450px] w-full">
//               <Image
//                 src="/images/offseason.jpg"
//                 alt="Where to Go in the Offseason"
//                 fill
//                 className="object-cover group-hover:scale-105 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
//                 <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-200 flex items-center gap-2">
//                   <span>🗺️ Explore</span>
//                 </p>
//                 <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
//                   Where to Go in the Offseason
//                 </h3>
//                 <button className="mt-4 inline-flex items-center gap-2 bg-white text-black text-xs sm:text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition">
//                   Check out 12 trips to take <FaArrowRight className="text-xs" />
//                 </button>
//               </div>
//             </div>

//             {/* Decorative text below */}
//             <div className="mt-4 text-center text-[10px] sm:text-xs uppercase tracking-[0.15em] text-gray-500 flex justify-center items-center gap-1">
//               <span>Where to go in each month of the year</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function TrendingNowLP() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-10">
          Trending Now on Lonely Planet
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* LEFT: Big hero card */}
          <article className="relative group overflow-hidden rounded-sm">
            <div className="relative w-full h-[380px] md:h-[520px] lg:h-[580px]">
              <Image
                src="/images/nav_bit.avif"
                alt="Best in Travel 2025"
                fill
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* gradient overlay (from bottom to transparent) */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Big white headline bottom-left */}
              <div className="absolute left-6 bottom-6 md:left-10 md:bottom-10 max-w-[70%]">
                <p className="text-xs uppercase tracking-wider text-gray-200 mb-2">
                  Lonely Planet's
                </p>

                <h3 className="text-white font-extrabold text-3xl md:text-5xl leading-tight uppercase drop-shadow-[0_8px_12px_rgba(0,0,0,0.45)]">
                  Best in Travel 2025
                </h3>

                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 text-xs md:text-sm rounded-full font-semibold shadow-sm hover:bg-gray-100 transition"
                  >
                    See the list <FaArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* thin decorative horizontal rule under left hero like image */}
            <div className="mt-6 md:mt-8">
              <div className="border-t border-gray-200"></div>
              <div className="flex justify-center mt-3 text-[10px] md:text-xs uppercase tracking-widest text-gray-500 items-center gap-2">
                <span>Check out our list of</span>
                <strong className="text-gray-800">where to travel in 2025</strong>
                <span className="text-lg">🌴</span>
              </div>
            </div>
          </article>

          {/* RIGHT: top thin strip + big right card */}
          <div className="flex flex-col gap-6">
            {/* top small strip with tiny text and small icon aligned right-ish */}
            <div className="flex items-center justify-between">
              <div className="w-1/3 border-t border-gray-200" />
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 flex items-center gap-3">
                <svg width="28" height="12" viewBox="0 0 28 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                  <ellipse cx="14" cy="6" rx="14" ry="2.5" fill="#1f2937"/>
                </svg>
                <span>Where to go in each month of the year</span>
              </div>
              <div className="w-1/3 border-t border-transparent" />
            </div>

            {/* big right image card */}
            <article className="relative group overflow-hidden rounded-sm">
              <div className="relative w-full h-[300px] md:h-[420px] lg:h-[480px]">
                <Image
                  src="/images/-FJPG-S2000x1000.jfif"
                  alt="Where to go in the offseason"
                  fill
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                  priority={false}
                />

                {/* overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* headline overlay */}
                <div className="absolute left-6 bottom-6 md:left-8 md:bottom-8 max-w-[85%]">
                  <p className="text-xs uppercase tracking-widest text-gray-200 mb-2">Explore</p>
                  <h3 className="text-white font-extrabold text-2xl md:text-4xl leading-tight uppercase drop-shadow-[0_8px_12px_rgba(0,0,0,0.45)]">
                    Where to go in the offseason
                  </h3>

                  <div className="mt-4">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 bg-white text-black px-3 py-2 text-xs md:text-sm rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                      Check out 12 trips to take <FaArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* small caption under right card */}
              <div className="mt-4">
                <div className="border-t border-gray-200"></div>
                <div className="mt-3 text-[10px] md:text-xs uppercase tracking-wider text-gray-500">
                  Where to go in each month of the year
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
