import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sk2 from "../../../Team Members Images/sk2.jpg";
import eddie from "../../../Team Members Images/eddie2.jpg";
import alexender from "../../../Team Members Images/Alexander2.jpg";

const teamMembers = [
  {
    name: "SAM. K. WAWERU",
    title: "Managing Partner",
    imgSrc: sk2,
    review:
      "As the visionary leader of KWCO, SAM has been instrumental in driving excellence across our legal and credit management services. Through strategic leadership, he ensures that clients receive top-tier legal representation and effective financial solutions, reinforcing KWCO's reputation for reliability and success.",
    rating: 5,
  },
  {
    name: "EDDIE MWITI",
    title: "Associate",
    imgSrc: eddie,
    review:
      "With a keen eye for legal detail and a passion for justice, EDDIE plays a crucial role in handling complex legal matters at KWCO. His commitment to thorough case analysis and strategic advocacy ensures that clients receive the best representation and solutions tailored to their needs.",
    rating: 4.5,
  },
  {
    name: "ALEXANDER MUTUA",
    title: "Advocate Traineer",
    imgSrc: alexender,
    review:
      "As an emerging legal professional, ALEXANDER brings fresh energy and dedication to KWCO. Under the mentorship of seasoned experts, he actively contributes to case research, legal documentation, and client support, ensuring high standards of service and continuous firm growth.",
    rating: 4,
  },
];

const Section5 = () => {
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
          Our Legal Team
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
                <div className="relative">
                  <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800"></div>
                  <div className="absolute left-0 right-0 -bottom-24 flex justify-center">
                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="w-48 h-48 rounded-full border-4 border-white object-cover shadow-md"
                    />
                  </div>
                </div>

                <div className="pt-28 pb-8 px-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-[#2f4b79]">
                      {member.name}
                    </h3>
                    <div className="flex items-center justify-center mt-1">
                      <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                        {member.title}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-center italic">
                    "{member.review}"
                  </p>

                  <div className="flex justify-center mt-6">
                    <div className="flex space-x-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <StarIcon
                            key={i}
                            filled={i < Math.floor(member.rating)}
                            halfFilled={
                              i === Math.floor(member.rating) &&
                              member.rating % 1 !== 0
                            }
                          />
                        ))}
                    </div>
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
      className={`${className} absolute right-2 top-1/2 z-10 cursor-pointer bg-white p-3 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300`}
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
      className={`${className} absolute left-2 top-1/2 z-10 cursor-pointer bg-white p-3 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300`}
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

// Star rating component
const StarIcon = ({ filled, halfFilled }) => {
  if (filled) {
    return (
      <svg
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  } else if (halfFilled) {
    return (
      <svg
        className="w-5 h-5 text-yellow-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <defs>
          <linearGradient id="halfFilled" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="#D1D5DB" />
          </linearGradient>
        </defs>
        <path
          fill="url(#halfFilled)"
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    );
  } else {
    return (
      <svg
        className="w-5 h-5 text-gray-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
};

export default Section5;
