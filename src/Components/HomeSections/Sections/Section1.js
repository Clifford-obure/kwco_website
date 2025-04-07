import React from "react";
import Carousel from "./Caurosel.js";

const Section1 = () => {
  return (
    <Carousel>
      <div className="">
        <a
          href="/"
          class="block max-w-sm p-6 bg-white border no-underline border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Established in 10th June 2015
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Expert legal and accounting services since 2015.
          </p>
        </a>
      </div>
      <div>
        <a
          href="/"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg no-underline shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Prime Location
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Strategically located at Nine Planets Apartments, Suite Pluto (P4)
            Opp. Sudan Embassy, Kabarnet Gardens P.O. Box 199-00515, Nairobi. .
          </p>
        </a>
      </div>
      <div>
        <a
          href="/"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg no-underline shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Partnership Firm
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Dedicated to tailored solutions for our clients.
          </p>
        </a>
      </div>
    </Carousel>
  );
};

export default Section1;
