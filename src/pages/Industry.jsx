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
    img: "https://img.freepik.com/free-photo/shopping-mall-entrance_1127-3005.jpg?w=740&t=st=1709726332~exp=1709726932~hmac=7f7dd7bdf6ac6d89530f90f0783e191f4c1c3d4a4c2d4d8e8c9e9e8e8c9e9e8e",
    title: "RETAIL",
    desc: "Recruit World excels in retail staffing, providing skilled professionals for store operations, merchandising, and management roles. Our retail recruitment solutions ensure your stores run efficiently with top talent.",
  },
  {
    img: "https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?w=740&t=st=1709726393~exp=1709726993~hmac=74c6375b1f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f",
    title: "REAL ESTATE",
    desc: "Our specialized real estate recruitment team connects property developers, agencies, and firms with experienced professionals. From brokers to property managers, we deliver talent that drives growth.",
  },
  {
    img: "https://img.freepik.com/free-photo/scientist-working-laboratory_23-2148880441.jpg?w=740&t=st=1709726425~exp=1709727025~hmac=2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
    title: "PHARMACEUTICALS",
    desc: "Recruit World serves the pharmaceutical industry with specialized recruitment for R&D, quality control, regulatory affairs, and sales positions. We understand the unique demands of this regulated sector.",
  },
  {
    img: "https://img.freepik.com/free-photo/customer-buying-groceries-supermarket_342744-1111.jpg?w=740&t=st=1709726461~exp=1709727061~hmac=1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a",
    title: "FMCG",
    desc: "Our FMCG recruitment solutions cover the entire supply chain, from production to distribution. We help companies build dynamic teams that keep products moving from factory to consumer.",
  },
  {
    img: "https://img.freepik.com/free-photo/electric-car-charging-station-with-power-cord-supply-plugin_53876-146520.jpg?w=740&t=st=1709726494~exp=1709727094~hmac=5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c",
    title: "ELECTRIC VEHICLES (EV)",
    desc: "Recruit World is at the forefront of EV industry staffing, connecting companies with skilled professionals in R&D, manufacturing, and charging infrastructure development.",
  },
  {
    img: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=740&t=st=1709726525~exp=1709727125~hmac=4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d",
    title: "TECHNOLOGY",
    desc: "Our tech recruitment specialists understand the fast-paced IT sector. We source talented developers, engineers, and IT professionals who drive digital transformation and innovation.",
  },
  {
    img: "https://img.freepik.com/free-photo/factory-worker-wearing-uniform-hardhat-operating-industrial-machine-with-button-control-panel-manufacturing-plant_342744-155.jpg?w=740&t=st=1709726556~exp=1709727156~hmac=3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b",
    title: "MANUFACTURING",
    desc: "Recruit World provides comprehensive staffing solutions for the manufacturing sector, from skilled operators to plant managers. We help build efficient production teams.",
  },
  {
    img: "https://img.freepik.com/free-photo/luxury-hotel-reception-desk-with-bell_176474-2361.jpg?w=740&t=st=1709726587~exp=1709727187~hmac=7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c",
    title: "HOSPITALITY",
    desc: "Our hospitality recruitment experts connect hotels, restaurants, and tourism businesses with service-oriented professionals who deliver exceptional guest experiences.",
  },
  {
    img: "https://img.freepik.com/free-photo/interior-design-with-photoframes-plants_23-2149385437.jpg?w=740&t=st=1709726617~exp=1709727217~hmac=8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e",
    title: "INTERIOR DESIGN",
    desc: "Recruit World helps interior design firms find creative talent. From designers to project managers, we connect companies with professionals who transform spaces.",
  },
];

const Industries = () => {
  return (
    <section className="bg-white py-16 px-4">
    

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Industries We Serve</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At Recruit World Consultancy Services, we specialize in providing tailored recruitment solutions across diverse industries. Our deep understanding of each sector's unique challenges and requirements enables us to deliver exceptional talent that drives business success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition flex flex-col"
          >
            <div className="flex justify-center items-center p-4 bg-white h-48">
              <img
                src={industry.img}
                alt={industry.title}
                className="max-w-full h-auto max-h-48 object-contain"
              />
            </div>
            <div className="p-4 text-center flex-grow">
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
