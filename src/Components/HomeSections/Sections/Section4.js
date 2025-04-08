import React, { useState, useEffect } from "react";

const ClientLogoSlider = () => {
  // Sample client data - replace with your actual clients
  const clients = [
    {
      id: 1,
      name: "Posta kenya",
      logo: "/Images/posta.jpeg",
      category: "Financial",
    },
    {
      id: 2,
      name: "Bidco",
      logo: "/Images/bidco_logo.png",
      category: "Financial",
    },
    {
      id: 3,
      name: "Hashi",
      logo: "/Images/hashi.png",
      category: "Technology",
    },
    {
      id: 4,
      name: "Amazon cosultants",
      logo: "/Images/amazone.png",
      category: "Technology",
    },
    {
      id: 5,
      name: "speedCapital",
      logo: "/Images/speed_capital.jpeg",
      category: "Healthcare",
    },

    {
      id: 7,
      name: "Kingdom Bank",
      logo: "/Images/kingdom bank.png",
      category: "Financial",
    },
    {
      id: 8,
      name: "Alphajiri",
      logo: "/Images/alphajiri.png",
      category: "Financial",
    },
    {
      id: 9,
      name: "Vineyard properties",
      logo: "/Images/vineyard properties.png",
      category: "Financial",
    },
  ];

  const [position, setPosition] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredClients =
    activeFilter === "All"
      ? clients
      : clients.filter((client) => client.category === activeFilter);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % (filteredClients.length - 5 + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [filteredClients.length]);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    setPosition(0);
  };

  const categories = [
    "All",
    ...new Set(clients.map((client) => client.category)),
  ];

  return (
    <div className="py-8">
      <div className="flex justify-center mb-6 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilterClick(category)}
            className={`px-4 py-2 rounded-full h-8 text-sm font-medium transition-colors
              ${
                activeFilter === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden">
        <div className="text-center mb-6">
          <h3 className="text-lg text-gray-600">
            Trusted by leading corporations for legal excellence
          </h3>
        </div>

        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${position * 200}px)` }}
          >
            {filteredClients.map((client) => (
              <div key={client.id} className="flex-none w-48 mx-2">
                <div className="bg-white p-4 rounded-lg shadow-sm h-32 flex items-center justify-center border border-gray-100">
                  <div className="space-y-2 text-center">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="h-16 mx-auto object-contain"
                    />
                    <p className="text-sm font-medium text-gray-700">
                      {client.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({
            length: Math.max(filteredClients.length - 5 + 1, 1),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setPosition(index)}
              className={`h-2 w-2 rounded-full transition-colors
                ${position === index ? "bg-blue-600" : "bg-gray-300"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div className="m-auto mt-12 my-7 lg:my-24 mx-6 space-y-4 lg:mx-20 pt-16">
      <div className="text-center text-[#2F4B79] m-auto space-y-2 pb-4">
        <h1 className="font-semibold md:text-3xl text-xl lg:text-4xl">
          Our Trusted Clients
        </h1>
        <h1 className="md:text-2xl text-xl lg:text-4xl">
          In Business & Legal Practice
        </h1>
        <p className="text-base">
          "Delivering Excellence: Trusted by Leading Organizations for Legal and
          Credit Collection Services."
        </p>
      </div>
      <div>
        <ClientLogoSlider />
      </div>
    </div>
  );
};

export default Section4;
