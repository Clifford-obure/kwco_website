import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Boniface from "../../../Team Members Images/Boniface2.jpg";
import seif from "../../../Team Members Images/seif2.jpg";
import jackline from "../../../Team Members Images/Jackline.jpg";

const testimonials = [
  {
    name: "BONIFACE MUNUVEU",
    title: "Head of Debt Recoveries",
    imgSrc: Boniface,
    review:
      "With extensive experience in financial dispute resolution, BONIFACE leads the credit collection team with unmatched expertise. His strategic approach to debt recovery ensures that clients receive swift and effective solutions, maintaining positive relationships and trust with every interaction.",
    rating: 4.5,
  },
  {
    name: "SEIF MOHAMMED",
    title: "Debt Recovery Officer",
    imgSrc: seif,
    review:
      "Dedicated and results-driven, SEIF has consistently demonstrated an ability to navigate complex credit issues with professionalism and care. His ability to manage client expectations and resolve outstanding debts efficiently has been key in driving client satisfaction.",
    rating: 5,
  },
  {
    name: "JACKLINE .A. JOWI",
    title: "Debt Recovery Officer",
    imgSrc: jackline,
    review:
      "As a proactive member of the credit collection team, JACKLINE is committed to maintaining a high level of client service. With a focus on effective communication and problem-solving, he ensures clients feel heard and supported throughout the debt recovery process.",
    rating: 4,
  },
];

const Section7 = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: window.innerWidth > 760 ? 2 : 1,
  };

  return (
    <div className="py-16 px-4 lg:px-20 bg-gray-200 m-auto w-full max-w-7xl overflow-hidden">
      <h1 className="text-center text-3xl lg:text-5xl font-semibold text-[#2f4b79]">
        Our credit collection team
      </h1>
      <p className="text-center mb-8">
        Meet the Faces Behind Our Success Stories
      </p>
      <Slider {...sliderSettings}>
        {testimonials.map((review, index) => (
          <div
            key={index}
            className="flex-col flex  py-5 px-4 md:px-6 lg:px-8 bg-white rounded-md mx-2"
          >
            <div className="flex justify-center">
              <img
                src={review.imgSrc}
                alt="profile"
                className="w-24 lg:w-28"
                style={{ clipPath: "circle(38% at 50% 50%)" }}
              />
            </div>
            <div className="flex flex-col space-y-4 justify-between">
              <div className="text-[#2f4b79] text-xl font-semibold text-center">
                {review.name}
              </div>
              <div className="text-center font-semibold">{review.title}</div>
              <p className="text-center">{review.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Section7;
