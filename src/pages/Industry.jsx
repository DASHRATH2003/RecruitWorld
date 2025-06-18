import React from "react";

// 👉 Import your images
import Retail from "../assets/image1.png";
import RealEstate from "../assets/image2.png";
import Pharma from "../assets/image3.png";
import FMCG from "../assets/image4.png";
import EV from "../assets/image5.png";
import Technology from "../assets/image6.png";
import Manufacturing from "../assets/image7.png";
import Hospitality from "../assets/image8.png";
import InteriorDesign from "../assets/image9.png";

const industries = [
  {
    img: Retail,
    title: "RETAIL",
    desc: "Driving Retail Success, One Staff at a Time",
  },
  {
    img: RealEstate,
    title: "REAL ESTATE",
    desc: "Building Success, One Team at a Time",
  },
  {
    img: Pharma,
    title: "PHARMACEUTICALS",
    desc: "Empowering Innovation in Pharmaceuticals",
  },
  {
    img: FMCG,
    title: "FMCG",
    desc: "Agility in Action, Talent in Every Aisle",
  },
  {
    img: EV,
    title: "ELECTRIC VEHICLES (EV)",
    desc: "Charging Towards a Brighter Future",
  },
  {
    img: Technology,
    title: "TECHNOLOGY",
    desc: "Innovate with the Right IT Minds",
  },
  {
    img: Manufacturing,
    title: "MANUFACTURING",
    desc: "Crafting Success on the Assembly Line",
  },
  {
    img: Hospitality,
    title: "HOSPITALITY",
    desc: "Service Excellence, Staffing Brilliance",
  },
  {
    img: InteriorDesign,
    title: "INTERIOR DESIGN",
    desc: "Crafting Brilliance in Every Design",
  },
];

const Industries = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Industries</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At Recruit World Consultancy Services, our commitment to excellence extends across a diverse array of industries, where we have successfully provided tailored workforce solutions to meet the unique demands of each sector.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={industry.img}
              alt={industry.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-red-600 font-bold mb-2">{industry.title}</h3>
              <p className="text-gray-700">{industry.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
