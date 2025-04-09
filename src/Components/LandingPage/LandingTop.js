import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images
  const backgroundImages = [
    // "/Images/pngwing.com (7).png",
    // "/Images/pngwing.com (6).png",
    // "/Images/pngwing.com (8).png",
    // "/Images/pngwing.com (10).png",
    "/Images/bannerKwco.png",
    "/Images/bannerKwco1.png",
  ];

  // Effect to handle image scrolling every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0 z-10"></div>
      <div className="relative py-10 md:py-20 lg:p-0">
        <div
          className="w-full h-screen transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url("${backgroundImages[currentImageIndex]}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="absolute inset-0 flex justify-center pt-20 md:pt-52 items-center z-30">
          <div className="flex flex-col md:flex-row lg:mx-28">
            <div className="px-3">
              {/* <div className="inline-block bg-yellow-600 text-blue-900 border py-1 px-4 -rotate-6 my-2">
                We bring you
              </div> */}
              <div className="text-4xl md:text-7xl text-blue-900 font-bold mb-6">
                Our Dedication to <span className="text-yellow-600">Legal</span>{" "}
                & <span className="text-yellow-600">Credit Management</span>{" "}
                Excellence
              </div>
              <div className="text-blue-900 mb-6">
                {/* At KWCO advocates, the law is more than a profession, it's our
                passion. We are dedicated to justice, integrity, and expert
                advocacy. Trust our team to protect your rights and navigate
                legal complexities with care. */}
              </div>
              <div className="text-blue-900">
                {/* Beyond legal services, our{" "} */}
                <span className="text-yellow-600 font-bold">
                  {/* Credit Management */}
                </span>{" "}
                {/* team provides structured solutions to help you recover
                outstanding debts efficiently. We ensure businesses and
                individuals regain financial stability through strategic credit
                solutions. */}
              </div>
            </div>

            <div className="flex justify-center items-center relative pb-10 md:pb-20 px-5 md:px-8 lg:px-0">
              <div className="m-auto w-full md:w-3/4 lg:w-12/12 py-10 md:py-10">
                <img
                  src="/Images/spn.png"
                  alt="SPNImage"
                  className="bg-white rounded-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
