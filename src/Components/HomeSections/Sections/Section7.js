import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Boniface from "../../../Team Members Images/bonny.png";
import seif from "../../../Team Members Images/seif44.png";
import jackline from "../../../Team Members Images/jackline55.jpg";

const teamMembers = [
  {
    name: "BONIFACE WAMBUA",
    title: "Head of Recoveries",
    imgSrc: Boniface,
    review:
      "With extensive experience in financial dispute resolution, BONIFACE leads the credit collection team with unmatched expertise. His strategic approach to debt recovery ensures that clients receive swift and effective solutions, maintaining positive relationships and trust with every interaction.",
  },
  {
    name: "SEIF MOHAMMED",
    title: "Business Development Manager",
    imgSrc: seif,
    review:
      "Dedicated and results-driven, SEIF has consistently demonstrated an ability to navigate complex credit issues with professionalism and care. His ability to manage client expectations and resolve outstanding debts efficiently has been key in driving client satisfaction.",
  },
  {
    name: "JACKLINE JOWI",
    title: "Debt Collection",
    imgSrc: jackline,
    review:
      "As a proactive member of the credit collection team, JACKLINE is committed to maintaining a high level of client service. With a focus on effective communication and problem-solving, he ensures clients feel heard and supported throughout the debt recovery process.",
  },
];

const Section7 = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setSlidesToShow(3);
      } else if (window.innerWidth > 760) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    slidesToShow: slidesToShow,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    customPaging: function (i) {
      return (
        <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-blue-500 transition-colors duration-300"></div>
      );
    },
    dotsClass: "slick-dots custom-dots flex justify-center mt-8 space-x-2",
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="py-20 px-4 lg:px-20 bg-gradient-to-b from-gray-100 to-gray-200 m-auto w-full max-w-7xl overflow-hidden">
      <div className="text-center mb-16">
        <h1 className="text-3xl lg:text-5xl font-semibold text-[#2f4b79] mb-3">
          Our Credit Collection Team
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Meet the Faces Behind Our Success Stories
        </p>
        <div className="w-24 h-1 bg-[#2f4b79] mx-auto rounded-full"></div>
      </div>

      <div className="px-2 md:px-8">
        <Slider {...sliderSettings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-4 py-2 outline-none">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                {/* Image section - now takes up more space with no text overlay */}
                <div className="h-80  overflow-hidden">
                  <img
                    src={member.imgSrc}
                    alt={member.name}
                    className="w-full h-full rounded-lg object-contain object-top"
                  />
                </div>

                {/* Content section - now below the image with no overlay */}
                <div className="p-6">
                  <div className="mb-4 text-center">
                    <h3 className="text-xl font-bold text-[#2f4b79]">
                      {member.name}
                    </h3>
                    <div className="mt-1">
                      <span className="inline-block px-4 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                        {member.title}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-center italic">
                    "{member.review}"
                  </p>

                  {/* Social media icons */}
                  <div className="flex justify-center mt-6 space-x-4">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Custom arrow components
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute right-2 top-1/3 z-10 cursor-pointer bg-white p-3 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-2 top-1/3 z-10 cursor-pointer bg-white p-3 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

export default Section7;
