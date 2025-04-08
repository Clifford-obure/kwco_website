import React from "react";
import Pulkeet from "../Team Members Images/Pulkeet.png";
import sk from "../Team Members Images/sk2.jpg";
import Boniface from "../Team Members Images/Boniface2.jpg";
import seif from "../Team Members Images/seif3.jpg";
import jackline from "../Team Members Images/Jackline.jpg";
import Eddie from "../Team Members Images/eddie2.jpg";
import Alexander from "../Team Members Images/Alexander2.jpg";
import agwine from "../Team Members Images/Melvin.jpg";

function OurTeam() {
  const teamMembers = [
    {
      id: 2,
      name: "SK",
      title: "Managing Partner & Head of Dispute Resolution ",
      image: sk,
    },
    { id: 3, name: "Boniface", title: "Head of Recoveries", image: Boniface },
    { id: 4, name: "Seif", title: "Business Development Manager", image: seif },
    { id: 5, name: "Jackline", title: "Debt Collection", image: jackline },
    { id: 6, name: "Eddie", title: "Senior Associate", image: Eddie },
    { id: 7, name: "Alexander", title: "Pupil", image: Alexander },
    { id: 8, name: "Melvin Agwine", title: "Associate", image: agwine },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Our Team
          </h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Dedicated Team Of KWCO Law Firm
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Crafting excellence at KWCO Law Firm involves a relentless pursuit
            of legal mastery, fostering a culture of academic rigor, and
            nurturing future legal professionals. Our commitment to excellence
            is reflected in our dedication to shaping skilled, ethical, and
            innovative legal practitioners.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.id}
              name={member.name}
              title={member.title}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const TeamMember = ({ name, title, image }) => {
  return (
    <div className="bg-white overflow-hidden shadow-lg rounded-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-[150%] md:h-full object-cover object-center "
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="mt-2 text-sm text-indigo-600 font-medium">{title}</p>
        <div className="mt-4 flex justify-center space-x-3">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.338 16.338H13.67V12.16c0-1.005-.02-2.3-1.39-2.3-1.39 0-1.6 1.097-1.6 2.23v4.248h-2.667V8h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.092v4.463zM5.5 6.833a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1.334 9.505H4.166V8h2.668v8.338z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Email</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
