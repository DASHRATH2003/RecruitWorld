import React from "react";
import sideImage from "../assets/intranship1.avif";

// Adjust the path based on your folder structure

const Internship = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Internship Opportunities</h1>
        <p className="text-lg max-w-2xl mx-auto px-4">
          Start your career journey with hands-on experience at Recruit World
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Why Choose Our Internship */}
        <section className="px-4 py-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Want to Build your career in Recruit World domain?
          </h2>
          <p className="text-[#787f95] text-lg leading-relaxed mb-8 font-medium">
            Welcome to Recruit World Consultancy, your gateway to a dynamic and
            promising career! At Zeet, we understand the pivotal role Recruit World
            internships play in shaping the future of ambitious graduates and
            students. Our commitment to bridging the gap between fresh
            candidates and industry has made us a trusted partner for both
            aspiring professionals and forward-thinking organizations.
          </p>
          <p className="text-[#787f95] text-lg leading-relaxed mb-8 font-medium">
           Recruit World Consultancy is more than just an Recruit Worldinternship provider; we
            are your partner in success. Join us on this exciting journey to
            unlock doors of opportunity, gain valuable experience, and pave the
            way for a fulfilling and prosperous career. Elevate your potential
            with Recruit World Consultancy – where your future begins!
          </p>
        </section>

        {/* Form Section */}
        <section className="flex flex-col md:flex-row items-center justify-center min-h-screen">
          {/* Left side image */}
          <div
  className="hidden md:block w-1/2 bg-cover bg-center"
  style={{
    backgroundImage: `url(${sideImage})`,
    height: "600px", // fixed height makes sure it's visible
  }}
></div>

          {/* Right side form */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-8">
            <div className="bg-white shadow-lg rounded p-8 w-full max-w-md">
              <h5 className="text-xs uppercase text-red-500 mb-2">
                Request a Call Back
              </h5>
              <h2 className="text-xl font-bold text-blue-900 mb-6">
              Recruit World - where your future begins!
              </h2>

              <form
                action="#"
                method="POST"
                encType="multipart/form-data"
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact number"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  name="qualification"
                  placeholder="Qualification"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <div>
                  <label className="block text-sm mb-1">Upload resume</label>
                  <input
                    type="file"
                    name="resume"
                    className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700"
                >
                  REQUEST A CALL SCHEDULE
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Application Process */}
        
      </div>
    </div>
  );
};

export default Internship;
