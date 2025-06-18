import React from "react";
import teamImage from "../assets/team.jpg";

const WhyUs = () => {
  return (
    <>
      <section className="bg-white pt-10">
        {/* Top Heading */}
        <div className="bg-[#033A78] text-white text-center py-6">
          <h2 className="text-4xl font-bold">Why Us</h2>
          <p className="text-sm mt-1">| Home</p>
        </div>

        {/* Main 3-Column Layout */}
        <div className="grid md:grid-cols-3 gap-8 px-4 md:px-20 py-10">
          {/* Left Statement */}
          <div className="text-[#033A78] text-xl font-semibold leading-relaxed col-span-1">
            At Recruit World Consultancy Services, we go beyond traditional HR
            practices to become a strategic partner in our clients’ growth and
            success.
          </div>

          {/* Who we are */}
          <div className="col-span-1">
            <h3 className="text-red-600 text-lg font-bold mb-1">Who we are?</h3>
            <div className="border-t-2 border-blue-500 w-full mb-2" />
            <p className="text-[#033A78] text-sm leading-relaxed">
              Recruit World Consultancy Services is a forward-thinking HR
              consultancy committed to delivering personalized recruitment
              solutions. We align talent with opportunity, driving business
              results across industries with precision and purpose.
            </p>
            <span className="text-red-500 font-bold text-sm mt-2 block">
              01
            </span>
          </div>

          {/* What we do */}
          <div className="col-span-1">
            <h3 className="text-red-600 text-lg font-bold mb-1">What we do?</h3>
            <div className="border-t-2 border-blue-500 w-full mb-2" />
            <p className="text-[#033A78] text-sm leading-relaxed">
              We specialize in innovative recruitment strategies, talent
              acquisition, and workforce solutions. Our goal is to empower
              organizations to attract, retain, and manage the best
              talent—ensuring long-term success and business excellence.
            </p>
            <span className="text-red-500 font-bold text-sm mt-2 block">
              02
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 md:px-20 py-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#033A78] mb-4">
            Why companies choose us?
          </h2>
          <p className="text-[#033A78] text-sm mb-6 leading-relaxed">
            In today’s fast-evolving business landscape, organizations choose{" "}
            <strong>Recruit World Consultancy Services</strong> for our
            commitment to excellence in strategic talent management. We stand
            out as a trusted partner delivering customized solutions to
            accelerate growth and success.
          </p>

          {/* Bullet Points */}
          <ul className="text-[#033A78] text-sm space-y-3">
            {[
              "Deep Industry Expertise",
              "Proven Track Record of Successful Placements",
              "End-to-End Recruitment Solutions",
              "Focus on Technology and Innovation",
              "Compliance and Regulatory Assurance",
              "Tailored, Client-Centric Approach",
              "Support for Scalable Growth",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="rounded overflow-hidden shadow-lg">
          <img
            src={teamImage}
            alt="Professional Team"
            className="w-full object-cover h-full"
          />
        </div>
      </section>
    </>
  );
};

export default WhyUs;
