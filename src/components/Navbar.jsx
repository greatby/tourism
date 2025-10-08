"use client";

import React, { useState } from "react";
import Link from "next/link";

const dropdownData = {
  Destinations: {
    sidebar: ["TRENDING", "COUNTRIES", "REGIONS", "CITIES", "CONTINENTS"],
    grid: [
      { name: "Athens", img: "/images/GettyRF_663376932.avif" },
      { name: "Malta", img: "/images/GettyRF_888220956.avif" },
      { name: "Puerto Rico", img: "/images/Malta-iStock-1296277157-RFE.avif" },
      { name: "Cancun", img: "/images/Mexico-iStock-484404659-RFC.avif" },
      { name: "Miami", img: "/images/shutterstock287588156.avif" },
      { name: "Yellowstone", img: "/images/shutterstockRF234381985.avif" },
    ],
    rightPanel: {
      img: "/images/nav_bit.avif",
      title: "Not sure where to start?",
      text: "Get inspired by destinations chosen in this year’s Best in Travel list.",
    },
  },
  Books: {
    sidebar: ["TRENDING", "FICTION", "NON-FICTION", "PHOTOGRAPHY", "GUIDES"],
    grid: [
      { name: "Lonely Planet Guide", img: "/images/shutterstockRF234381985.avif" },
      { name: "Adventure Stories", img: "/images/Mexico-iStock-484404659-RFC.avif" },
      { name: "City Diaries", img: "/images/GettyRF_888220956.avif" },
      { name: "Photo Collections", img: "/images/GettyRF_663376932.avif" },
      { name: "Travel Memoirs", img: "/images/Malta-iStock-1296277157-RFE.avif" },
      { name: "Cooking & Culture", img: "/images/shutterstock287588156.avif" },
    ],
    rightPanel: {
      img: "/images/nav_bit.avif",
      title: "Top Books to Read",
      text: "Discover our curated collection of books to inspire your next adventure.",
    },
  },
  Trips: {
    sidebar: ["TRENDING", "ADVENTURE", "FAMILY", "LUXURY", "BUDGET"],
   grid: [
      { name: "Athens", img: "/images/GettyRF_663376932.avif" },
      { name: "Malta", img: "/images/GettyRF_888220956.avif" },
      { name: "Puerto Rico", img: "/images/Malta-iStock-1296277157-RFE.avif" },
      { name: "Cancun", img: "/images/Mexico-iStock-484404659-RFC.avif" },
      { name: "Miami", img: "/images/shutterstock287588156.avif" },
      { name: "Yellowstone", img: "/images/shutterstockRF234381985.avif" },
    ],
    rightPanel: {
      img: "/images/nav_bit.avif",
      title: "Featured Trips",
      text: "Plan your next adventure with our most popular trips of the year.",
    },
  },
  Stories: {
    sidebar: [
      "TRENDING",
      "TRAVEL DIARIES",
      "EXPERIENCES",
      "PHOTOGRAPHY",
      "TIPS",
    ],
     grid: [
      { name: "Lonely Planet Guide", img: "/images/shutterstockRF234381985.avif" },
      { name: "Adventure Stories", img: "/images/Mexico-iStock-484404659-RFC.avif" },
      { name: "City Diaries", img: "/images/GettyRF_888220956.avif" },
      { name: "Photo Collections", img: "/images/GettyRF_663376932.avif" },
      { name: "Travel Memoirs", img: "/images/Malta-iStock-1296277157-RFE.avif" },
      { name: "Cooking & Culture", img: "/images/shutterstock287588156.avif" },
    ],
    rightPanel: {
      img: "/images/nav_bit.avif",
      title: "Story Highlight",
      text: "Read inspiring stories from travelers around the world.",
    },
  },
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);

  const renderDropdownContent = (menu) => {
    const data = dropdownData[menu];
    if (!data) return null;

    return (
      <div className="bg-white shadow-md w-full border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex px-8 py-6">
          {/* Sidebar */}
          <div className="w-1/5 bg-gray-50 border-r border-gray-200 p-4">
            <ul className="space-y-3 text-gray-700 font-medium">
              {data.sidebar.map((item, idx) => (
                <li
                  key={idx}
                  className={idx === 0 ? "text-blue-600 font-semibold" : ""}
                >
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle Grid */}
          <div className="w-3/5 grid grid-cols-3 gap-4 px-6 border-r border-gray-200">
            {data.grid.map((item) => (
              <div key={item.name}>
                <div className="w-full h-36 overflow-hidden rounded-md">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="mt-2 font-medium text-gray-800 uppercase tracking-wide text-sm">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          {/* Right Panel */}
          <div className="w-1/5 p-4 flex flex-col justify-between">
            <div>
              <img
                src={data.rightPanel.img}
                alt={data.rightPanel.title}
                className="rounded-md w-full h-40 object-cover mb-3"
              />
              <h4 className="text-lg font-bold text-gray-800 mb-1">
                {data.rightPanel.title}
              </h4>
              <p className="text-gray-600 text-sm">{data.rightPanel.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f2f2f2] border-b border-gray-200 z-50">
      <div className="flex items-center justify-between px-8 h-16 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">MyLogo</Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8 relative">
          {Object.keys(dropdownData).map((menu) => (
            <div
              key={menu}
              className="relative"
              onMouseEnter={() => handleMouseEnter(menu)}
            >
              <button className="text-gray-700 hover:text-blue-600 font-medium py-2 uppercase hover:underline cursor-pointer">
                {menu}
              </button>
            </div>
          ))}
        </div>

        {/* Right buttons */}
        <div className="flex items-center space-x-4">
          <Link
            href="/cart"
            className="flex items-center text-gray-700 hover:text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
            className="mr-2"
              viewBox="0 0 576 512"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
            </svg>
            Cart
          </Link>
          <Link
            href="/signin"
            className="bg-gray-900 text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Full-width dropdown */}
      {activeMenu && (
        <div
          className="absolute top-full left-0 w-full z-40"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          {renderDropdownContent(activeMenu)}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
