import React, { useEffect } from "react";
import VideoFeedback1 from "../images/videoFeedback1.jpg";
import VideoFeedback2 from "../images/videoFeedback2.jpg";
import VideoFeedback3 from "../images/videoFeedback3.jpg";

function VideoFeedback() {
  useEffect(() => {
    const elements = document.querySelectorAll(".vf-videos");

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

    return () => observer.disconnect();
  }, []);

  const videos = [
    {
      src: VideoFeedback1,
      title: "Exceeding Expectations",
      description:
        "Hear directly from clients as they share their experiences, insights, and success stories with KWCO Law Firm. Explore firsthand accounts of how our innovative approach has made a positive impact.",
    },
    {
      src: VideoFeedback2,
      title: "Transformative Legal Solutions",
      description:
        "Discover how our legal services and expert team have transformed the journeys of our clients, leading to successful legal outcomes and debt resolution.",
    },
    {
      src: VideoFeedback3,
      title: "Personal and Professional Growth",
      description:
        "Learn how KWCO Law Firm has contributed to the personal and financial well-being of our clients, ensuring ethical and effective legal representation.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 flex flex-col items-center container">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-6xl">
        <div className="text-center pb-8">
          <h2 className="text-3xl font-bold text-[#2F4B79]">Video Feedback</h2>
          <h1 className="text-2xl font-semibold text-black">
            Hear From Our Satisfied Clients
          </h1>
          <h3 className="text-gray-700 mt-4 text-lg">
            Hear directly from clients as they share their experiences,
            insights, and success stories with KWCO Law Firm. Explore firsthand
            accounts of how our legal expertise has made a positive impact on
            their legal and financial situations.
          </h3>
        </div>
        <div className="space-y-12 ">
          {videos.map((video, index) => (
            <div
              key={index}
              className="grid grid-cols md:grid-cols-2 flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow-md p-6"
            >
              <div className="flex-1 p-4 ">
                <img
                  src={video.src}
                  alt={video.title}
                  className="w-full max-w-xs rounded-lg shadow-md"
                />
                <button className="mt-4 bg-[#2F4B79] h-fit text-nowrap text-white py-2 px-4 rounded hover:bg-blue-700">
                  <a href="/" className="no-underline text-white ">
                    Watch the video
                  </a>
                </button>
              </div>
              <div className="flex-1 p-4">
                <div className="vf-videos-right-content">
                  <h2 className="text-lg font-semibold text-blue-800">Video</h2>
                  <h1 className="text-2xl font-bold text-[#2F4B79] mt-2">
                    {video.title}
                  </h1>
                  <p className="text-gray-700 mt-4">{video.description}</p>
                  <a href="/" className="text-blue-600 mt-4 inline-block">
                    Click to watch video
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-8">
            <button className="bg-[#2F4B79] text-white h-fit py-2 px-6 rounded hover:bg-blue-700">
              <a href="/" className="no-underline text-white">
                View All
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFeedback;
