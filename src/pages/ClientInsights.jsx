// src/pages/ClientInsights.js
import React from "react";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import law from "./../assets/client/img1.jpg";
import postbank from "./../assets/client/posta.jpeg";
import hash from "./../assets/headers/hashi.png";
import alphajiri from "./../assets/client/alphajiri.png";
import kingdombank from "./../assets/client/kingdom bank.png";
import bidco from "./../assets/client/bidco_logo.png";
import speed_capital from "./../assets/client/speed_capital.jpeg";

const ClientInsights = () => {
  const insights = [
    {
      id: 1,
      title: "Posta Kenya",
      image: postbank,
      category: "Financial",
    },
    {
      id: 2,
      title: "Hashi Energy",
      image: hash,
      category: "Technology",
    },
    {
      id: 3,
      title: "Alphajiri",
      image: alphajiri,
      category: "Financial",
    },
    {
      id: 4,
      title: "Kingdom Bank",
      image: kingdombank,
      category: "Financial",
    },
    {
      id: 5,
      title: "Bidco Africa",
      image: bidco,
      category: "Financial",
    },
    {
      id: 6,
      title: "Speed_Capital",
      image: speed_capital,
      category: "Healthcare",
    },
  ];

  const categories = ["All", "Financial", "Technology", "Healthcare"];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredInsights =
    selectedCategory === "All"
      ? insights
      : insights.filter((insight) => insight.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center w-ful">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center w-full h-full"
          style={{
            backgroundImage: `url(${law})`,
            filter: "brightness(1)",
          }}
        />
        <div className="relative z-10 text-center text-black max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Clients</h1>
          <p className="text-xl">
            Our Trusted Clients In Business & Legal Practice{" "}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl text-gray-600">
            We are proud to work with a diverse range of clients across
            industries such as finance, technology, and healthcare. Each
            partnership reflects our commitment to delivering tailored solutions
            that drive real impact. From innovative startups to established
            enterprises, our clients trust us to support their growth, solve
            complex challenges, and achieve long-term success.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition ${
                  selectedCategory === category
                    ? "bg-amber-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredInsights.length > 0 ? (
            filteredInsights.map((insight) => (
              <div
                key={insight.id}
                className="rounded-lg overflow-hidden shadow hover:shadow-md transition bg-white"
              >
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{insight.title}</h3>
                  <p className="text-sm text-gray-500">{insight.category}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No clients found for this category.
            </p>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest legal insights and
            updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-6 py-3 rounded-lg border border-gray-300 flex-1 max-w-md"
            />
            <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Need Legal Advice?</h2>
          <p className="text-xl mb-8">
            Our team is ready to help you with expert legal guidance
          </p>
          <a
            href="/contact"
            className="bg-white text-amber-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default ClientInsights;
