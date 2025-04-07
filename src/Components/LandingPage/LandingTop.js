import React from "react";

const LandingPage = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[#325280] bg-opacity-80 z-10"></div>
      <div className="relative py-10 md:py-20 lg:p-0">
        <div
          className="w-full h-screen"
          style={{
            backgroundImage: `url("/Images/landingMain.webp")`,
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 flex justify-center pt-20 md:pt-52 items-center z-30">
          <div className="flex flex-col md:flex-row lg:mx-28">
            <div className="px-3">
              <div className="inline-block bg-[#CEA252] text-white border-[1px] py-1 px-4 -rotate-6 my-2">
                We bring you
              </div>
              <div className="text-4xl md:text-7xl text-white font-bold mb-6">
                Our Dedication to <span className="text-[#CEA252]">Legal</span>{" "}
                & <span className="text-[#CEA252]">Credit</span> Excellence
              </div>{" "}
              {/* Adjusted text size for responsiveness */}
              <div className="text-white mb-6">
                At KWCO, the law is more than a profession—it's our passion. We
                are dedicated to justice, integrity, and expert advocacy. Trust
                our team to protect your rights and navigate legal complexities
                with care.
              </div>
              <div className="text-white">
                Beyond legal services, our{" "}
                <span className="text-[#CEA252] font-bold">
                  Credit Management
                </span>{" "}
                team provides structured solutions to help you recover
                outstanding debts efficiently. We ensure businesses and
                individuals regain financial stability through strategic credit
                solutions.
              </div>
            </div>

            <div className="flex justify-center items-center relative pb-10 md:pb-[20%] px-5 md:px-[8%] lg:px-0">
              <div className="m-auto w-full md:w-[70%] lg:w-[90%] py-10 md:py-[10%]">
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
