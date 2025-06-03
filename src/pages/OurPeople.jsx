// src/pages/OurPeople.js
import React from "react";
import teamicon from "./../assets/headers/ourteam.png";
import { Mail, Phone, Linkedin, Award } from "lucide-react";
import sammy from "./../assets/skk.png";
// import sammy from "./..assets/skk.png";
import bonny from "./../assets/team/Boniface2.jpg";
import seif from "./../assets/team/seif44.png";
import melvin from "./../assets/team/Melvin.jpg";
import alexender from "./../assets/team/Alexander2.jpg";
import eddie from "./../assets/eddie2.jpg";
import jackline from "./../assets/team/jackline55.jpg";

const OurPeople = () => {
  const partners = [
    {
      name: "Kamuti Waweru",
      position: "Managing Partner",
      image: sammy,
      expertise: [
        "Managing Partner ",
        " Head of Dispute Resolution  ",
        " KWCO Advocates ",
        "Corporate Law",
        "Real Estate",
      ],

      experience: "20+ years",
      bio: "Kamuti Waweru is the founding and managing partner of KWCO. With over 20 years of experience in legal practice, he has established himself as one of Kenya's leading advocates in commercial litigation and corporate law.",
      email: "skwaweru@kwco.legal",
      phone: "+254725766457",
      linkedin: "www.linkedin.com/in/sk-waweru-52895528",
    },
  ];

  const associates = [
    {
      name: "Bonniface Wambua",
      position: "Head of Recoveries",
      image: bonny,
    },
    {
      name: "Seif Mohammed",
      position: " Business Development Manager  ",
      image: seif,
    },

    {
      name: "Melvin Onyango",
      position: "Head of Knowledge ",
      image: melvin,
    },
    {
      name: "Alexender Mtua",
      position: "pupil ",
      image: alexender,
    },
    {
      name: "Eddie Mwiti",
      position: "Senior Associate",
      image: eddie,
    },

    {
      name: "Jackline Jowi",
      position: "Debt Collection",
      image: jackline,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${teamicon})`,
            filter: "brightness(0.4)",
          }}
        />
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="relative z-10 text-center text-black max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our People</h1>
          <p className="text-xl  font-bold ">
            Meet the Legal Experts Behind KWCO's Success
          </p>
        </div>
        <br />
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className=" text-gray-600">
            KWCO Advocates is powered by a team of seasoned lawyers and legal
            professionals whose collective expertise spans diverse practice
            areas, including litigation, debt collection, conveyancing, and
            dispute resolution. Our unwavering dedication to excellence,
            innovation, and client-centered service has solidified our
            reputation as one of Kenya’s premier legal authorities. Our people,
            driven by integrity, precision, and a passion for justice, are the
            cornerstone of KWCO Advocates’ standing as a trusted leader in the
            legal landscape.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Managing Partner
          </h2>
          <div className="space-y-20">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex items-center space-x-8 p-8">
                  <div className="flex-shrink-0 w-1/3">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2">{partner.name}</h3>
                    <p className="text-xl text-amber-600 font-semibold mb-4">
                      {partner.position}
                    </p>
                    <p className="text-gray-600 mb-6">{partner.bio}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3">
                          Areas of Expertise
                        </h4>
                        <ul className="space-y-2">
                          {partner.expertise.map((area, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-gray-600"
                            >
                              <Award className="w-4 h-4 text-amber-600 mr-2" />
                              {area}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
                        {partner.experience} Experience
                      </span>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-700 mb-3">
                        Contact
                      </h4>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Mail className="w-4 h-4 mr-2" />
                        <a
                          href={`mailto:${partner.email}`}
                          className="hover:text-amber-600"
                        >
                          {partner.email}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Phone className="w-4 h-4 mr-2" />
                        <a
                          href={`tel:${partner.phone}`}
                          className="hover:text-amber-600"
                        >
                          {partner.phone}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Linkedin className="w-4 h-4 mr-2" />
                        <a
                          href={partner.linkedin}
                          className="hover:text-amber-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associates Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {associates.map((associate, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={associate.image}
                  alt={associate.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{associate.name}</h3>
                  <p className="text-amber-600 font-semibold mb-3">
                    {associate.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8">
            We're always looking for talented legal professionals to join our
            growing team
          </p>
          <a
            href="/contact"
            className="bg-white text-amber-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            View Career Opportunities
          </a>
        </div>
      </section>
    </div>
  );
};

export default OurPeople;
