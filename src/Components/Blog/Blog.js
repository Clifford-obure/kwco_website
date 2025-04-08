import React from "react";
import Hero from "../hero/Hero";
import LatestBlog from "./LatestBlog";
// import { Calendar, Clock, User, ArrowRight } from "react-icons";
import { SlCalender } from "react-icons/sl";
import { FaClock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
const Blog = () => {
  const blogs = [
    {
      img: "/Images/ELearning/corporate-law.jpg",
      title: "Corporate Compliance Updates for 2025",
      excerpt:
        "Recent legislative changes significantly impact how corporations must approach regulatory compliance. Our legal experts break down what this means for your business.",
      category: "Corporate Law",
      author: "Sarah J. Mitchell",
      date: "April 2, 2025",
      readTime: "7 min read",
    },
    {
      img: "/Images/ELearning/intellectual-property.jpg",
      title: "Protecting Your Intellectual Property in the Digital Age",
      excerpt:
        "With increasing digital threats to intellectual property, businesses must implement stronger protection strategies. Learn about recent case precedents.",
      category: "Intellectual Property",
      author: "David R. Cohen",
      date: "March 28, 2025",
      readTime: "5 min read",
    },
    {
      img: "/Images/ELearning/employment-law.jpg",
      title: "New Employment Regulations: What Employers Need to Know",
      excerpt:
        "The landscape of employment law continues to evolve. Our employment specialists analyze how recent judicial decisions affect workplace policies.",
      category: "Employment Law",
      author: "Michael T. Williams",
      date: "March 19, 2025",
      readTime: "6 min read",
    },
    {
      img: "/Images/ELearning/tax-law.jpg",
      title: "Tax Law Amendments: Implications for Business Planning",
      excerpt:
        "Recent tax code revisions create both challenges and opportunities for businesses. Our tax attorneys provide insights on strategic tax planning.",
      category: "Tax Law",
      author: "Jennifer P. Lawson",
      date: "March 10, 2025",
      readTime: "8 min read",
    },
    {
      img: "/Images/ELearning/litigation.jpg",
      title: "Effective Litigation Strategies for Commercial Disputes",
      excerpt:
        "Commercial litigation requires tactical precision. Explore proven approaches to managing complex business disputes while minimizing costs and risks.",
      category: "Litigation",
      author: "Robert K. Thompson",
      date: "February 27, 2025",
      readTime: "9 min read",
    },
    {
      img: "/Images/ELearning/estate-planning.jpg",
      title: "Modern Estate Planning: Beyond the Basic Will",
      excerpt:
        "Comprehensive estate planning involves more than just creating a will. Our guide covers trusts, tax considerations, and business succession planning.",
      category: "Estate Planning",
      author: "Elizabeth A. Garcia",
      date: "February 15, 2025",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="bg-gray-50">
      <Hero className="pb-6" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h4 className="text-indigo-700 font-semibold text-sm uppercase tracking-wider mb-2">
            Legal Insights
          </h4>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Latest from Our Legal Experts
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Stay informed on the latest legal developments, regulatory changes,
            and strategic insights from our experienced attorneys.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-700 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {blog.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <FaUser size={14} className="mr-1" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <SlCalender size={14} className="mr-1" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock size={14} className="mr-1" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <button className="inline-flex items-center text-indigo-700 font-medium hover:text-indigo-900 transition-colors">
                  Read Article
                  <AiOutlineArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
            View All Articles
          </button>
        </div>
      </div>

      <LatestBlog />
    </div>
  );
};

export default Blog;
