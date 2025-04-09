import React from "react";
import Textra from "react-textra";

const Section2 = () => {
  return (
    <div className="px-6 md:px-28 m-auto pt-32 md:pt-32">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="text-2xl md:text-4xl font-bold mb-4 lg:mb-0 text-[#2F4B79]">
          <div>We Have Best Attorneys For</div>
          <div>Your Best Support</div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row my-10 mx-auto items-center gap-2 justify-between">
        <div className="space-y-3 w-full lg:w-[40%] lg:mr-6">
          <img
            src="/Images/SectionsPic/secPic1.jpg"
            className="w-full"
            alt="Pic1"
          />
          {/* <img
            src="/Images/SectionsPic/secPic2.jpg"
            className="w-full"
            alt="Pic2"
          /> */}
        </div>
        <div className=" inset-0 flex justify-center  md:pt-5 items-center z-30">
          <div className="flex flex-col md:flex-row lg:mx-28">
            <div className="px-3">
              {/* <div className="inline-block bg-yellow-600 text-blue-900 border py-1 px-4 -rotate-6 my-2">
                We bring you
              </div> */}

              <div className="text-blue-900 mb-6">
                At KWCO advocates, the law is more than a profession, it's our
                passion. We are dedicated to justice, integrity, and expert
                advocacy. Trust our team to protect your rights and navigate
                legal complexities with care.
              </div>
              <div className="text-blue-900">
                Beyond legal services, our{" "}
                <span className="text-yellow-600 font-bold">
                  Credit Management
                </span>{" "}
                team provides structured solutions to help you recover
                outstanding debts efficiently. We ensure businesses and
                individuals regain financial stability through strategic credit
                solutions.
              </div>
            </div>

            {/* <div className="flex justify-center items-center relative pb-10 md:pb-20 px-5 md:px-8 lg:px-0">
              <div className="m-auto w-full md:w-3/4 lg:w-12/12 py-10 md:py-10">
                <img
                  src="/Images/spn.png"
                  alt="SPNImage"
                  className="bg-white rounded-full w-full"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
