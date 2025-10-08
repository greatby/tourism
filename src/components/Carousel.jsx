"use client";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const destinations = [
  {
    id: 1,
    title: "Japan",
    subtitle: "Country in Asia",
    img: "/images/japanese.avif",
  },
  {
    id: 2,
    title: "Bali",
    subtitle: "Region in Indonesia",
    img: "/images/GettyImages-1097345030.avif",
  },
  {
    id: 3,
    title: "Sydney",
    subtitle: "City in New South Wales",
    img: "/images/GettyRF_663376932.avif",
  },
  {
    id: 4,
    title: "Berlin",
    subtitle: "City in Berlin & Brandenburg",
    img: "/images/Mexico-iStock-484404659-RFC.avif",
  },
   {
    id: 5,
    title: "Berlin",
    subtitle: "City in Berlin & Brandenburg",
    img: "/images/Sydney-Syd-Harbour-Bridge-Opera-House-8.avif",
  }, {
    id: 6,
    title: "Berlin",
    subtitle: "City in Berlin & Brandenburg",
    img: "/images/GettyRF_663376932.avif",
  }, {
    id: 7,
    title: "Berlin",
    subtitle: "City in Berlin & Brandenburg",
    img: "/images/Mexico-iStock-484404659-RFC.avif",
  },
];

// export default function FeaturedDestinations() {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (!scrollRef.current) return;
//     const width = scrollRef.current.clientWidth;
//     scrollRef.current.scrollBy({
//       left: direction === "left" ? -width : width,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="bg-gray-50 py-12">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-4xl font-bold text-gray-900">
//             Featured destinations
//           </h2>
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => scroll("left")}
//               className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
//             >
//               <FaArrowLeft className="w-4 h-4 text-gray-700" />
//             </button>
//             <button
//               onClick={() => scroll("right")}
//               className="p-2 rounded-md bg-black text-white hover:bg-gray-800 transition"
//             >
//               <FaArrowRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>

//         {/* Slider */}
//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
//         >
//           {destinations.map((dest) => (
//             <div
//               key={dest.id}
//               className="relative min-w-[300px] sm:min-w-[340px] bg-gray-100 group overflow-hidden border border-gray-200 rounded-md shadow-sm"
//             >
//               {/* Image with overlay */}
//               <div className="relative w-full h-64 overflow-hidden">
//                 <img
//                   src={dest.img}
//                   alt={dest.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
//                 />
//                 {/* Hover overlay */}
//                 <div className="absolute inset-0 bg-black/50 flex justify-center items-center translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
//                   <button className="text-white border border-white px-5 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition-all">
//                     DISCOVER →
//                   </button>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-4 border-t">
//                 <p className="text-xs uppercase tracking-widest text-gray-500">
//                   {dest.subtitle}
//                 </p>
//                 <h3 className="text-lg font-semibold mt-1">{dest.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
export default function FeaturedDestinations() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    scrollEl.addEventListener("scroll", checkScroll);
    checkScroll(); // initial check

    return () => scrollEl.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured destinations
          </h2>
          <div className="flex items-center gap-3">
            {/* Left Button */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-2 rounded-md transition ${
                canScrollLeft
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <FaArrowLeft className="w-4 h-4" />
            </button>

            {/* Right Button */}
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-2 rounded-md transition ${
                canScrollRight
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="relative min-w-[300px] sm:min-w-[340px] bg-gray-100 group overflow-hidden border border-gray-200 rounded-md shadow-sm"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={dest.img}
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <button className="text-white border border-white px-5 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition-all">
                    DISCOVER →
                  </button>
                </div>
              </div>
              <div className="p-4 border-t">
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  {dest.subtitle}
                </p>
                <h3 className="text-lg font-semibold mt-1">{dest.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}