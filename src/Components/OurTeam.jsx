import React from "react";

// Import all team images
import Pulkeet from "../Team Members Images/Pulkeet.png";
import sk from "../Team Members Images/sk2.jpg";
import Boniface from "../Team Members Images/Boniface2.jpg";
import seif from "../Team Members Images/seif44.png";
import jackline from "../Team Members Images/jackline55.jpg";
import Eddie from "../Team Members Images/Alexender3.png";
import Alexander from "../Team Members Images/Alexander66.png";
import agwine from "../Team Members Images/Melvin.jpg";

function OurTeam() {
  // Team members with proper image imports
  const teamMembers = [
    {
      id: 2,
      name: "SK",
      title: "Managing Partner & Head of Dispute Resolution",
      bio: "Specializing in complex litigation and alternative dispute resolution.",
      featured: true,
      image: sk,
    },
    {
      id: 3,
      name: "Boniface",
      title: "Head of Recoveries",
      bio: "Expert in debt recovery and asset tracing with a proven track record of successful cases.",
      image: Boniface,
    },
    {
      id: 4,
      name: "Eddie",
      title: "Senior Associate",
      bio: "Focuses on commercial litigation and corporate advisory.",
      image: Eddie,
    },
    {
      id: 5,
      name: "Seif",
      title: "Business Development Manager",
      bio: "Drives the firm's growth strategy and client relationships.",
      image: seif,
    },
    {
      id: 6,
      name: "Melvin Agwine",
      title: "Associate",
      bio: "Handles diverse cases with particular strength in legal research and documentation.",
      image: agwine,
    },
    {
      id: 7,
      name: "Jackline",
      title: "Debt Collection",
      bio: "Specializes in commercial debt recovery and negotiation strategies.",
      image: jackline,
    },

    {
      id: 8,
      name: "Alexander",
      title: "Pupil",
      bio: "Developing expertise across multiple practice areas with a focus on corporate law.",
      image: Alexander,
    },
  ];

  // Filter the CEO and other team members separately
  const ceo = teamMembers.find((member) => member.featured);
  const otherMembers = teamMembers.filter((member) => !member.featured);

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

        {/* CEO Section - Featured prominently */}
        {ceo && (
          <div className="mb-16">
            <h4 className="text-center text-xl font-semibold text-gray-800 mb-8">
              Leadership
            </h4>
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden pt-10 pb-5">
              <div className="md:flex">
                <div className="md:w-1/3 h-66 overflow-hidden">
                  <img
                    src={ceo.image}
                    alt={ceo.name}
                    className="w-full h-full  object-cover "
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="uppercase tracking-wide text-indigo-600 font-semibold">
                    {ceo.title}
                  </div>
                  <h2 className="mt-2 text-2xl font-bold text-gray-900">
                    {ceo.name}
                  </h2>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {ceo.bio}
                  </p>
                  <div className="mt-6 flex space-x-4">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-1.005-.02-2.3-1.39-2.3-1.39 0-1.6 1.097-1.6 2.23v4.248h-2.667V8h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.092v4.463zM5.5 6.833a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1.334 9.505H4.166V8h2.668v8.338z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <span className="sr-only">Email</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Management Team - Second Row */}
        <div className="mb-16">
          {/* <h4 className="text-center text-xl font-semibold text-gray-800 mb-8">
            Management Team
          </h4> */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherMembers.slice(0, 3).map((member) => (
              <TeamMember
                key={member.id}
                name={member.name}
                title={member.title}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </div>

        {/* Associates - Third Row */}
        <div>
          {/* <h4 className="text-center text-xl font-semibold text-gray-800 mb-8">
            Associates & Support Staff
          </h4> */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherMembers.slice(3).map((member) => (
              <TeamMember
                key={member.id}
                name={member.name}
                title={member.title}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const TeamMember = ({ name, title, bio, image }) => {
  return (
    <div className="bg-white overflow-hidden shadow-lg rounded-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-50 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-contain " />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="mt-1 text-sm text-indigo-600 font-medium">{title}</p>
        {bio && <p className="mt-3 text-sm text-gray-500">{bio}</p>}
        <div className="mt-4 flex space-x-3">
          <a
            href="#"
            className="text-gray-400 hover:text-indigo-600 transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.338 16.338H13.67V12.16c0-1.005-.02-2.3-1.39-2.3-1.39 0-1.6 1.097-1.6 2.23v4.248h-2.667V8h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.092v4.463zM5.5 6.833a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1.334 9.505H4.166V8h2.668v8.338z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-indigo-600 transition-colors"
          >
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
