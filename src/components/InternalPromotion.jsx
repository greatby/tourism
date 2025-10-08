"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const promotions = [
  {
    title: "Books",
    subtitle: "SHOP",
    button: "See Books",
    image:
      "https://d2vbr83hnyiux1.cloudfront.net/image/975050285728/image_cs1sa9uidl10h8vvqets8hqc2t/-FJPG-S800",
    link: "https://shop.lonelyplanet.com/?utm_source=lonelyplanet&utm_medium=homepage&utm_campaign=%5Bpromo_tile%5D&utm_content=seebooks",
  },
  {
    title: "Stories",
    subtitle: "READ",
    button: "Find Inspiration",
    image:
      "https://d2vbr83hnyiux1.cloudfront.net/image/975050285728/image_i0loqma1k12odc2k0or2mlpn2d/-FJPG-S800",
    link: "https://www.lonelyplanet.com/articles",
  },
  {
    title: "Journeys",
    subtitle: "TRAVEL WITH US",
    button: "Book a Trip",
    image:
      "https://d2vbr83hnyiux1.cloudfront.net/image/975050285728/image_lncookoloh41ven9gvq5vdec4p/-FJPG-S800",
    link: "https://www.elsewhere.io/?utm_source=lonelyplanet&utm_medium=homepage&utm_campaign=promo_tile",
  },
];

export default function InternalPromotions() {
  return (
    <section className="bg-[#f8f7f3] py-12 md:py-16 lg:py-20">
      {/* Top divider text */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-lg font-medium whitespace-nowrap">
            Your journey begins here.
          </p>
          <div className="flex-1 h-px bg-gray-400"></div>
          <p className="text-lg font-medium whitespace-nowrap">
            Choose your first step.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {promotions.map((promo, i) => (
          <a
            key={i}
            href={promo.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
              promo.title === "Journeys" ? "lg:col-span-2 xl:col-span-1" : ""
            }`}
          >
            {/* Image */}
            <div className="relative min-h-[360px] md:min-h-[580px]">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <p className="text-sm text-white uppercase tracking-wide mb-3">
                  {promo.subtitle}
                </p>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                  {promo.title}
                </h3>

                <div className="inline-flex items-center gap-2 text-white font-medium border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
                  {promo.button} <FaArrowRight className="text-sm" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
