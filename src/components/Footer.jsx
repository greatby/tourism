import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

export default function FooterLP() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Top Section: navigation / links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1 */}
          <div>
            <h4 className="text-white font-semibold mb-4">About Lonely Planet</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/about/contribute" className="hover:text-white">Contribute</a></li>
              <li><a href="/careers" className="hover:text-white">Work for Us</a></li>
              <li><a href="/press" className="hover:text-white">Press, Trade & Advertising</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/destinations" className="hover:text-white">Destinations</a></li>
              <li><a href="/articles" className="hover:text-white">Stories & Articles</a></li>
              <li><a href="/shop" className="hover:text-white">Shop Guides</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Help & Info</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/help" className="hover:text-white">Help Center</a></li>
              <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Social & Subscribe */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Connected</h4>
            <div className="flex items-center space-x-4 mb-6">
              <a href="https://facebook.com" className="hover:text-white"><FaFacebookF /></a>
              <a href="https://twitter.com" className="hover:text-white"><FaTwitter /></a>
              <a href="https://instagram.com" className="hover:text-white"><FaInstagram /></a>
              <a href="https://youtube.com" className="hover:text-white"><FaYoutube /></a>
              <a href="https://pinterest.com" className="hover:text-white"><FaPinterest /></a>
            </div>
            <div>
              <p className="text-sm mb-2">Subscribe to our newsletter</p>
              <form action="/subscribe" method="POST" className="flex">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="px-3 py-2 rounded-l bg-gray-800 placeholder-gray-400 text-gray-100 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom section: copyright, locale links etc */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <div>© {new Date().getFullYear()} Lonely Planet. All rights reserved.</div>
          <div className="space-x-4">
            <a href="/terms" className="hover:text-gray-300">Terms & Conditions</a>
            <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
            <a href="/sitemap" className="hover:text-gray-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
