import React, { useEffect } from "react";
import vision from "../images/vision.png";
import mission from "../images/mission.png";
import values from "../images/values.png";
import commitment from "../images/commitment.png";
import "./VisionAndMission.css";

function VisionAndMission() {
  useEffect(() => {
    const elements = document.querySelectorAll(".section-content");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect(); // Cleanup function
  }, []);

  return (
    <div className="container mt-80 lg:mt-0">
      <div className="max-w-7xl m-auto">
        <div className="text-center">
          <h1 className="text-4xl font-semibold py-10 text-[#2F4B79]">
            Our Vision and Mission
          </h1>
        </div>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="container">
            <img src={vision} alt="Vision" />
          </div>
          <div className="container">
            <h3 className="self-center text-lg">
              At KWCO Law Firm, our vision is to be a trusted leader in legal
              and credit collection services. We are committed to delivering
              professional, ethical, and results-driven solutions to our
              clients. Through innovation and integrity, we aim to set new
              standards in legal representation, debt recovery, and financial
              dispute resolution. Our goal is to safeguard client interests
              while upholding the highest standards of legal excellence.
            </h3>
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="container order-2 md:order-1">
            <h3 className="self-center text-lg">
              Our mission at KWCO Law Firm is to provide strategic legal
              solutions and effective debt recovery services. We advocate for
              clients with dedication, ensuring fair and just outcomes. Our
              approach is centered on legal expertise, transparency, and a
              commitment to resolving financial disputes efficiently. By
              fostering strong client relationships and utilizing innovative
              legal strategies, we strive to deliver exceptional service in
              legal consultancy and credit management.
            </h3>
          </div>
          <div className="container order-1 md:order-2">
            <img src={mission} alt="Mission" />
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="container">
            <img src={values} alt="Values" />
          </div>
          <div className="container">
            <h3 className="self-center text-lg">
              At KWCO Law Firm, our core values define our practice. Integrity
              is at the heart of our work, ensuring ethical and honest legal
              services. We strive for excellence, delivering top-tier legal
              representation. Accountability builds trust with our clients,
              ensuring transparency in every case. Collaboration drives our
              success, working as a team to achieve the best outcomes. Our
              client-focused approach ensures personalized, results-driven legal
              solutions.
            </h3>
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="container order-2 md:order-2">
            <h3 className="text-lg self-center">
              Our commitment to our clients is unwavering. We provide expert
              legal representation and debt recovery services tailored to their
              needs. We ensure clear communication, keeping clients informed at
              every stage. Our solutions are customized to address complex
              financial and legal challenges. We actively engage in community
              initiatives, offering pro bono services and advocating for social
              justice. At KWCO Law Firm, we are committed to continuous
              improvement and legal excellence.
            </h3>
          </div>
          <div className="container">
            <img src={commitment} alt="Commitment" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionAndMission;
