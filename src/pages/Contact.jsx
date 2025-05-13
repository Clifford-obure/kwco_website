// src/pages/Contact.js
import React from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import law from "./../assets/law.png";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${law})`,
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center text-black max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in Touch with Our Legal Team</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600">
                123 Legal Street, Westlands
                <br />
                Nairobi, Kenya
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600">
                +254 20 123 4567
                <br />
                +254 700 123 456
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600">
                info@kwco.co.ke
                <br />
                legal@kwco.co.ke
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Office Hours</h3>
              <p className="text-gray-600">
                Mon - Fri: 8:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="litigation">Litigation</option>
                      <option value="credit-collection">
                        Credit Collection
                      </option>
                      <option value="conveyancing">Conveyancing</option>
                      <option value="consultation">General Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Tell us about your legal needs..."
                      required
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Find Us</h2>
              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <div className="h-96 bg-gray-300 rounded-lg mb-6">
                  {/* Google Map would go here */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819415936552!2d36.81079731475391!3d-1.2820973990648396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6f2a9de6b%3A0x9c2c3431391db84e!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1639564913374!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Directions</h3>
                    <p className="text-gray-600">
                      Located in the heart of Westlands, our office is easily
                      accessible by public transport and has ample parking
                      facilities.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Emergency Legal Services
                    </h3>
                    <p className="text-gray-600">
                      For urgent legal matters outside office hours:
                    </p>
                    <p className="text-amber-600 font-bold text-xl mt-2">
                      +254 799 999 999
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+254700123456"
                    className="flex items-center text-gray-700 hover:text-amber-600 transition"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    +254 700 123 456
                  </a>
                  <a
                    href="mailto:info@kwco.co.ke"
                    className="flex items-center text-gray-700 hover:text-amber-600 transition"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    info@kwco.co.ke
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">
                How do I schedule a consultation?
              </h3>
              <p className="text-gray-600">
                You can schedule a consultation by calling us, sending an email,
                or filling out the contact form above. We'll respond within 24
                hours to arrange a convenient time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">
                What should I bring to my first appointment?
              </h3>
              <p className="text-gray-600">
                Please bring any relevant documents related to your case,
                identification, and a clear summary of your legal issue. This
                helps us provide more accurate advice.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">
                Do you offer free consultations?
              </h3>
              <p className="text-gray-600">
                We offer an initial 30-minute consultation to assess your case.
                During this time, we'll discuss your legal needs and explain how
                we can help.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">
                How are your legal fees structured?
              </h3>
              <p className="text-gray-600">
                Our fees vary depending on the complexity of the case. We offer
                both fixed-fee and hourly billing options. We'll provide a clear
                fee structure during your consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
