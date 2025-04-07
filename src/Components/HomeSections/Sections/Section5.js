import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sk2 from "../../../Team Members Images/sk2.jpg";
import eddie from "../../../Team Members Images/eddie2.jpg";
import alexender from "../../../Team Members Images/Alexander2.jpg";

const testimonials = [
  {
    name: "SAM. K. WAWERU",
    title: "Managing Partner",
    imgSrc: sk2,
    review:
      "As the visionary leader of KWCO, SAM has been instrumental in driving excellence across our legal and credit management services. Through strategic leadership, he ensures that clients receive top-tier legal representation and effective financial solutions, reinforcing KWCO’s reputation for reliability and success.",
    rating: 4.5,
  },
  {
    name: "EDDIE MWITI",
    title: "Associate",
    imgSrc: eddie,
    review:
      "With a keen eye for legal detail and a passion for justice, EDDIE plays a crucial role in handling complex legal matters at KWCO. His commitment to thorough case analysis and strategic advocacy ensures that clients receive the best representation and solutions tailored to their needs.",
    rating: 5,
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
        Our Legal team
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

export default Section5;
