// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { Scale, Facebook, Linkedin, Youtube } from "lucide-react";
import logo from "./../assets/sklogo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt="kwco logo"
                style={{ width: "150px", height: "auto" }}
              />
              {/* <Scale className="w-8 h-8 text-slate-400" />
              <div>
                <h3 className="text-xl font-bold">KWCO</h3>
                <p className="text-sm text-gray-400">
                  Kamuti Waweru & Co. Advocates
                </p>
              </div> */}
            </div>
            <p className="text-gray-400 text-sm">
              A leading law firm in Nairobi, Kenya, committed to excellence in
              legal practice.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-slate-300 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-slate-300 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-areas"
                  className="text-gray-400 hover:text-slate-300 transition"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  to="/our-people"
                  className="text-gray-400 hover:text-slate-300 transition"
                >
                  Our People
                </Link>
              </li>
              <li>
                <Link
                  to="/insights"
                  className="text-gray-400 hover:text-slate-300 transition"
                >
                  Client Insights
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-slate-300 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/practice-areas/litigation"
                  className="text-gray-400 hover:text-slate-300 transition"
                >
                  Litigation
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-areas/credit-collection"
                  className="text-gray-400 hover:text-slate-300 transition"
                >
                  Credit Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-areas/conveyancing"
                  className="text-gray-400 hover:text-slate-300 transition"
                >
                  Conveyancing
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-areas/dispute-resolution"
                  className="text-gray-400 hover:text-slate-300 transition"
                >
                  Dispute Resolution
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <p className="text-gray-400 mb-4">Follow us on social media</p>
            <div className="flex space-x-4">
              {/* Social media icons */}
              <a
                href="https://facebook.com/kwcoadvocates"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-slate-600 transition duration-300"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://linkedin.com/company/kamuti-waweru-company-advocates"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-slate-600 transition duration-300"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://youtube.com/@kwco-advocates?si=vD6JqIsuMEBnVBAA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-slate-600 transition duration-300"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 KWCO - Kamuti Waweru & Co. Advocates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
