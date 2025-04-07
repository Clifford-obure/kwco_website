import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; // Import EmailJS

const Section6 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_4ngpzvk", // Replace with your EmailJS service ID
        "template_hkvmvbq", // Replace with your EmailJS template ID
        e.target,
        "U3uRrn-pKFZ0D2WYN" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setMessage("Your request has been sent successfully.");
          setLoading(false);
          // Clear the form data
          setFormData({ name: "", email: "", subject: "", phone: "" });
        },
        (error) => {
          setMessage(
            `Something went wrong. Please try again later. ${error.text}`
          );
          setLoading(false);
        }
      );
  };

  return (
    <div className="w-full container mx-auto flex flex-col md:flex-row gap-5 md:gap-8 py-8 px-4 md:px-8">
      <motion.div
        className="flex-1 text-[#2F4B79] space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
          Request A Free Call Back
        </h1>
        <p className="text-sm md:text-base lg:text-lg">
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by...
        </p>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          {[
            { name: "name", type: "text", placeholder: "Full Name" },
            { name: "email", type: "email", placeholder: "Email Address" },
            { name: "subject", type: "text", placeholder: "Your Subject" },
            { name: "phone", type: "text", placeholder: "Phone Number" },
          ].map((data, index) => (
            <div key={index}>
              <input
                name={data.name}
                type={data.type}
                placeholder={data.placeholder}
                value={formData[data.name]}
                onChange={handleInputChange}
                className="text-base p-2 w-full border rounded-md focus:border-[#2F4B79] focus:outline-none"
              />
            </div>
          ))}
          <div className="w-full mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.038034974563!2d36.7831592!3d-1.2920658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173b24e3a7a9%3A0x5a0c8e82a94e35ff!2sKWCO%20-%20Kilimani%20(Opposite%20Sudan%20Embassy%20Courts)!5e0!3m2!1sen!2ske!4v1718913085910!5m2!1sen!2ske"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              target="_blank"
              rel="noopener noreferrer"
            ></iframe>
          </div>
          <div className="md:col-span-2">
            <motion.button
              type="submit"
              className="flex items-center justify-center text-base lg:text-lg h-fit bg-[#CEA252] text-white py-2 px-6 rounded-full hover:bg-[#806533] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
              <MdArrowOutward className="ml-2" />
            </motion.button>
            {message && (
              <p className="text-sm text-green-500 mt-2">{message}</p>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Section6;
