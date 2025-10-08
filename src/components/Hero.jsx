// "use client";
// import React from "react";
// import { FiSearch } from "react-icons/fi";
// import { IoIosArrowRoundForward } from "react-icons/io";

// const HeroSection = () => {
//   return (
//     <section className="relative max-w-full md:h-[800px] grid grid-cols-1 bg-[#f2f1ef] overflow-hidden">
//       {/* Background Image */}
//       <img
//         src="https://d2vbr83hnyiux1.cloudfront.net/image/975050285728/image_vaj2kh9iml09f788hkhobjtm0e"
//         alt="Lonely Planet Hero"
//         className="max-w-full md:absolute top-0 left-0 w-full h-full object-cover object-center col-1 row-1"
//       />

//       {/* Content */}
//       <div className="relative row-1 col-1 flex flex-col justify-start md:py-12 min-h-[570px]">
//         {/* Heading */}
//         <h1 className="relative text-4xl md:text-6xl font-bold uppercase mt-4 mb-6 py-6 w-fit px-4 bg-[#0071c2] text-white leading-tight">
//           Our Guides. Your Stories.
//         </h1>

//         {/* Search Box */}
//         <form
//           id="heroSearch"
//           name="heroSearch"
//           className="relative mt-auto bg-white shadow-lg w-[calc(100%-2rem)] md:max-w-[600px] mr-4 md:mr-0 px-4 py-4 mb-6"
//           action="/search"
//           method="GET"
//         >
//           <div className="relative flex items-center">
//             <input
//               name="q"
//               type="search"
//               placeholder="What are you looking for?"
//               className="block w-full pr-12 py-2 border-none outline-none bg-transparent placeholder:text-gray-500 text-gray-800"
//               autoComplete="off"
//             />
//             <button
//               type="submit"
//               className="absolute right-0 top-1/2 -translate-y-1/2 p-2"
//               aria-label="Search"
//             >
//               <FiSearch className="text-2xl text-gray-800" />
//             </button>
//           </div>

//           <div className="hidden md:block border-t border-gray-300 pt-3 mt-2">
//             <p className="text-sm text-gray-600 flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-gray-400"></span>
//               You can search for destinations like "Japan" or "Porto"
//             </p>
//           </div>
//         </form>

//         {/* Vertical Banner (Desktop) */}
//         <div className="hidden md:block absolute top-12 right-8">
//           <a
//             href="https://www.lonelyplanet.com/campaigns/offseason-travel"
//             className="bg-[#ffcf00] text-black px-4 py-4 flex flex-col gap-2 [writing-mode:sideways-rl]"
//           >
//             <div className="flex items-center gap-3">
//               <span className="font-semibold">EXPLORE</span>
//               <IoIosArrowRoundForward className="rotate-90 text-2xl" />
//             </div>
//             <div className="w-px h-full bg-black"></div>
//             <span className="font-semibold tracking-wide">OFFSEASON TRAVEL</span>
//           </a>
//         </div>
//       </div>

//       {/* Scrolling Drawer Text (Ticker) */}
//       <div className="bg-[#ffcf00] text-black overflow-hidden relative h-6">
//         <div className="absolute inset-0 flex animate-marquee whitespace-nowrap text-sm py-1.5">
//           {Array(20)
//             .fill("OFFSEASON TRAVEL - ")
//             .map((txt, i) => (
//               <span key={i} className="px-2">
//                 {txt}
//               </span>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { IoIosArrowRoundForward } from "react-icons/io";

// export default function HeroWithDrawer() {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const userInteractedRef = useRef(false);
//   const hasScrollTriggeredRef = useRef(false);

//   // Auto-open drawer on first scroll for desktop (until user interacts)
//   useEffect(() => {
//     function onScroll() {
//       if (userInteractedRef.current || hasScrollTriggeredRef.current) return;
//       if (window.innerWidth >= 768) {
//         setDrawerOpen(true);
//         hasScrollTriggeredRef.current = true;
//       }
//     }
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const toggleDrawer = () => {
//     userInteractedRef.current = true;
//     setDrawerOpen((v) => !v);
//   };

//   return (
//     <section className="relative max-w-full grid grid-cols-1 bg-gray-50 overflow-hidden">
//       {/* Background image */}
//       <img
//         src="https://d2vbr83hnyiux1.cloudfront.net/image/975050285728/image_vaj2kh9iml09f788hkhobjtm0e"
//         alt="Hero background"
//         className="max-w-full md:absolute top-0 left-0 w-full h-full object-cover object-center col-1 row-1"
//       />

//       {/* Main content column */}
//       <div className="relative row-1 col-1 flex flex-col justify-start md:py-12 min-h-[570px] p-6">
//         <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mt-4 mb-6 py-6 w-fit bg-[#0b5ea8] text-white px-4 leading-tight">
//           Our Guides. Your Stories.
//         </h1>

//         {/* Search */}
//         <form
//           id="heroSearch"
//           name="heroSearch"
//           className="relative mt-auto bg-white shadow-lg w-[calc(100%-2rem)] md:w-[min(600px,100%)] px-4 py-4 mb-6"
//           action="/search"
//           method="GET"
//         >
//           <div className="relative flex items-center">
//             <input
//               name="q"
//               type="search"
//               placeholder="What are you looking for?"
//               className="block w-full pr-12 py-2 border-none outline-none bg-transparent placeholder:text-gray-500 text-gray-800"
//               autoComplete="off"
//             />
//             <button
//               type="submit"
//               className="absolute right-0 top-1/2 -translate-y-1/2 p-2"
//               aria-label="Search"
//             >
//               <FiSearch className="text-xl text-gray-800" />
//             </button>
//           </div>

//           <div className="hidden md:block border-t border-gray-200 pt-3 mt-2">
//             <p className="text-sm text-gray-600 flex items-center gap-2">
//               <svg className="w-2.5 h-2.5" viewBox="0 0 15 15" fill="none">
//                 <path
//                   d="M7.5 6.56C7.36739 6.56 7.24022 6.61268 7.14645 6.70645C7.05268 6.80021 7 6.92739 7 7.06V11.5C7 11.6326 7.05268 11.7598 7.14645 11.8536C7.24022 11.9473 7.36739 12 7.5 12C7.63261 12 7.75979 11.9473 7.85356 11.8536C7.94733 11.7598 8 11.6326 8 11.5V7.06C8 6.92739 7.94733 6.80021 7.85356 6.70645C7.75979 6.61268 7.63261 6.56 7.5 6.56Z"
//                   fill="currentColor"
//                 />
//                 <path
//                   d="M7.5 5.06C8.05229 5.06 8.5 4.61228 8.5 4.06C8.5 3.50772 8.05229 3.06 7.5 3.06C6.94772 3.06 6.5 3.50772 6.5 4.06C6.5 4.61228 6.94772 5.06 7.5 5.06Z"
//                   fill="currentColor"
//                 />
//               </svg>
//               You can search for destinations like "Japan" and "Porto"
//             </p>
//           </div>
//         </form>

//         {/* Vertical ribbon on desktop */}
//         <div className="hidden md:block absolute top-12 right-8">
//           <a
//             href="https://www.lonelyplanet.com/campaigns/offseason-travel"
//             className="bg-yellow-400 text-black px-4 py-4 flex flex-col gap-2 [writing-mode:sideways-rl] items-center"
//             aria-label="Offseason travel"
//           >
//             <div className="flex items-center gap-3">
//               <span className="font-semibold">EXPLORE</span>
//               <IoIosArrowRoundForward className="rotate-90 text-2xl" />
//             </div>
//             <div className="w-px h-full bg-black" />
//             <span className="font-semibold tracking-wide">OFFSEASON TRAVEL</span>
//           </a>
//         </div>
//       </div>

//       {/* Ticker / marquee (top of drawer) */}
//       <div className="relative md:my-8 md:mx-8 w-full md:w-fit overflow-hidden row-2 col-1">
//         <div className="bg-yellow-300 text-black overflow-x-hidden relative h-6">
//           <div className="absolute inset-0 flex w-full">
//             <div
//               className="will-change-transform text-sm leading-none py-1.5 whitespace-nowrap animate-marquee shrink-0 pl-4"
//               style={{ "--ticker-speed": "56s" }}
//             >
//               {Array.from({ length: 28 }).map((_, i) => (
//                 <span key={i} className="px-2 inline-block">
//                   OFFSEASON TRAVEL -
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Drawer wrapper */}
//         <div className="relative group/drawer bg-white text-black px-4 py-4 md:flex md:flex-col-reverse">
//           {/* Label / toggle */}
//           <label
//             htmlFor="hero-drawer-toggle"
//             onClick={toggleDrawer}
//             className="flex items-center flex-wrap justify-between cursor-pointer text-sm uppercase gap-x-2"
//           >
//             <span className={`${drawerOpen ? "hidden" : "inline-block"}`}>
//               100 OFFSEASON TRIPS
//             </span>

//             <span
//               className={`border rounded-lg px-2 py-1 text-xs ${
//                 drawerOpen ? "hidden" : "inline-block"
//               }`}
//             >
//               Open
//             </span>

//             <span className={`${drawerOpen ? "inline-block" : "hidden"}`}>
//               Close
//             </span>

//             <hr className="w-full mt-4" />
//           </label>

//           {/* Hidden checkbox purely for semantics (keeps peer- patterns if you need them) */}
//           <input
//             id="hero-drawer-toggle"
//             type="checkbox"
//             className="sr-only"
//             name="hero-drawer"
//             checked={drawerOpen}
//             onChange={() => {
//               userInteractedRef.current = true;
//               setDrawerOpen((v) => !v);
//             }}
//             aria-expanded={drawerOpen}
//           />

//           {/* Drawer content: slide-open grid */}
//           <div
//             className={`pt-6 overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-in-out ${
//               drawerOpen
//                 ? "max-h-[900px] opacity-100 translate-y-0"
//                 : "max-h-0 opacity-0 -translate-y-2"
//             } md:grid md:grid-cols-2 md:gap-x-8`}
//             aria-hidden={!drawerOpen}
//           >
//             <div className="mx-auto w-auto h-[230px] md:h-auto md:max-h-[380px] md:w-full object-contain flex items-center">
//               <img
//                 src="https://cdn.shopify.com/s/files/1/0650/8521/0875/files/Offbeat_North_America_1.jpg?v=1712327452"
//                 alt="Offbeat North America"
//                 width={280}
//                 height={380}
//                 className="max-w-full mx-auto object-contain"
//               />
//             </div>

//             <div className="mt-6 md:mt-0">
//               <p className="text-sm uppercase text-gray-500">New</p>
//               <h4 className="text-2xl font-bold my-6">Offbeat North America</h4>
//               <p className="mb-6 text-gray-700">
//                 “Brilliantly informative, but it's also seriously stylish” —
//                 The Independent. Get inspired for your next adventure with this
//                 collection of 100 unforgettable North American destinations.
//               </p>
//               <p className="text-lg font-semibold mb-4">$45.00</p>

//               <div className="flex gap-3">
//                 <a
//                   className="inline-block bg-transparent border border-black px-4 py-2 text-sm rounded-md hover:bg-black hover:text-white transition"
//                   href="https://shop.lonelyplanet.com/products/offbeat-north-america"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   View Details
//                 </a>
//                 <button
//                   className="inline-block bg-black text-white px-4 py-2 text-sm rounded-md hover:opacity-90 transition"
//                   onClick={() => {
//                     // you can wire an add-to-cart or other action here
//                     alert("Add to cart / CTA (demo)");
//                   }}
//                 >
//                   Buy
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function HeroWithDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const userInteractedRef = useRef(false);
  const hasScrollTriggeredRef = useRef(false);

  // Auto-open drawer once on scroll (desktop)
  useEffect(() => {
    function onScroll() {
      if (userInteractedRef.current || hasScrollTriggeredRef.current) return;
      if (window.innerWidth >= 768) {
        setDrawerOpen(true);
        hasScrollTriggeredRef.current = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDrawer = () => {
    userInteractedRef.current = true;
    setDrawerOpen((v) => !v);
  };

  return (
    <section className="relative max-w-full bg-gray-50 overflow-hidden">
      {/* Background image */}
      <img
        src="https://d2vbr83hnyiux1.cloudfront.net/image/975050285728/image_vaj2kh9iml09f788hkhobjtm0e"
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      />

      {/* Hero text + search */}
      <div className="relative z-10 flex flex-col justify-start h-screen p-6 md:py-16 md:px-12 bg-gradient-to-b from-black/30 via-black/10 to-transparent">
        <h1 className="text-4xl md:text-7xl w-[45%] font-extrabold uppercase text-white bg-[#0b5ea8] px-4 py-3  leading-tight">
          Our Guides. Your Stories.
        </h1>

        {/* Search */}
        <form
          className="relative mt-10 bg-white shadow-lg w-full md:w-[min(600px,100%)] px-4 py-4"
          action="/search"
          method="GET"
        >
          <div className="relative flex items-center">
            <input
              name="q"
              type="search"
              placeholder="What are you looking for?"
              className="block w-full pr-10 py-2 border-none outline-none placeholder:text-gray-500 text-gray-800"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              aria-label="Search"
            >
              <FiSearch className="text-xl text-gray-800" />
            </button>
          </div>

          <div className="hidden md:block border-t border-gray-200 pt-3 mt-3">
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <svg className="w-2.5 h-2.5" viewBox="0 0 15 15" fill="none">
                <path
                  d="M7.5 6.56C7.367 6.56 7.24 6.613 7.146 6.706 7.053 6.8 7 6.927 7 7.06v4.44c0 .133.053.26.146.354.094.094.22.146.354.146s.26-.052.354-.146A.5.5 0 008 11.5V7.06a.5.5 0 00-.146-.354A.5.5 0 007.5 6.56z"
                  fill="currentColor"
                />
                <path
                  d="M7.5 5.06c.553 0 1-.447 1-1S8.053 3.06 7.5 3.06s-1 .447-1 1 .447 1 1 1z"
                  fill="currentColor"
                />
              </svg>
              You can search for destinations like “Japan” and “Porto”
            </p>
          </div>
        </form>

        {/* Vertical banner on desktop */}
        <div className="hidden md:block absolute top-16 right-8">
          <a
            href="https://www.lonelyplanet.com/campaigns/offseason-travel"
            className="bg-yellow-400 text-black px-4 py-4 flex flex-col gap-2 [writing-mode:sideways-rl] items-center"
          >
            <div className="flex items-center gap-3">
              <span className="font-semibold">EXPLORE</span>
              <IoIosArrowRoundForward className="rotate-90 text-2xl" />
            </div>
            <span className="font-semibold tracking-wide">
              OFFSEASON TRAVEL
            </span>
          </a>
        </div>

        {/* Drawer inside hero (bottom-right) */}
        <div className="absolute bottom-0 right-0 w-full md:w-[460px] z-30 shadow-2xl border-t border-l border-gray-200 bg-white">
          {/* Marquee */}
          <div className="bg-yellow-300 text-black overflow-x-hidden relative h-6">
            <div className="absolute inset-0 flex w-max animate-marquee whitespace-nowrap">
              {Array.from({ length: 25 }).map((_, i) => (
                <span
                  key={i}
                  className="px-2 inline-block text-sm font-medium"
                >
                  OFFSEASON TRAVEL -
                </span>
              ))}
            </div>
          </div>

          {/* Drawer container */}
          <div className="bg-[#0b5ea8] text-white px-4 py-4 md:flex md:flex-col-reverse">
            <button
              onClick={toggleDrawer}
              className="flex items-center justify-between w-full text-sm uppercase gap-x-2 cursor-pointer"
            >
              <span className="">{drawerOpen ? "Close" : "100 OFFSEASON TRIPS"}</span>
              <span className="border rounded-lg px-2 py-1 text-xs">
                {drawerOpen ? "Hide" : "Open"}
              </span>
            </button>

            <hr className="w-full my-4" />

            <div
              className={`pt-6 overflow-hidden transition-all duration-500 ease-in-out ${
                drawerOpen
                  ? "max-h-[800px] opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"
              } md:grid md:grid-cols-2 md:gap-x-8`}
            >
              <div className="mx-auto w-auto h-[230px] md:h-auto md:max-h-[360px] md:w-full flex items-center">
                <img
                  alt="Offbeat North America"
                  width="280"
                  height="380"
                  className="max-w-full mx-auto object-contain"
                  src="https://cdn.shopify.com/s/files/1/0650/8521/0875/files/Offbeat_North_America_1.jpg?v=1712327452"
                />
              </div>

              <div className="mt-6 md:mt-0">
                <p className="text-sm uppercase text-white">New</p>
                <h4 className="text-2xl font-bold my-6">
                  Offbeat North America
                </h4>
                <p className="mb-6 text-white">
                  “Brilliantly informative, but it's also seriously stylish” —{" "}
                  <em>The Independent</em>. Get inspired for your next
                  adventure with this collection of 100 unforgettable North
                  American destinations.
                </p>
                <p className="text-lg font-semibold text-white mb-4">$45.00</p>
                <div className="flex gap-3">
                  <a
                    href="https://shop.lonelyplanet.com/products/offbeat-north-america"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-transparent border border-black px-4 py-2 text-sm rounded-md hover:bg-black hover:text-white transition"
                  >
                    View Details
                  </a>
                  <button
                    className="inline-block bg-black text-white px-4 py-2 text-sm rounded-md hover:opacity-90 transition"
                    onClick={() => alert("Add to cart / CTA (demo)")}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

