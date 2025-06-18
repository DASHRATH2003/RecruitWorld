import React from "react";
import measionImage from "../assets/measion.jpg"; // adjust the path
import measionImage1 from "../assets/value.webp"; // adjust the path

import { Lightbulb, MousePointerClick } from "lucide-react";

const About = () => {
  return (
    <>
      <section className="bg-white">
        {/* Top Heading */}
        <div className="bg-[#033A78] text-white text-center py-6">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="text-sm mt-1">| Home</p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 px-4 md:px-20 py-10 items-center">
          {/* Left Text */}
          <div>
            <h3 className="text-2xl font-bold text-[#033A78] mb-4">
              Recruit World Job Consultancy
            </h3>
            <p className="text-[#033A78] text-sm leading-relaxed mb-4">
              Recruit World Job Consultancy can ease the burden and step in when
              no HR expertise exists to handle your continually needed HR
              functions. Our functions are typically split between a variety of
              people, who do not have the training and experience that an HR
              Consultant brings to the table. Recruit World lessens the burden
              for the employer by helping them maximise efficiency of employees
              leading to higher productivity levels. Your business will benefit
              from the expertise and experience of a Human Resource Consultant
              without the cost of paying a full-time salary.
            </p>
            <p className="text-[#033A78] text-sm leading-relaxed mb-4">
              We hit-the-ground running from the day we are engaged. There is no
              learning curve as there is with a new employee.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-2 text-[#033A78]">
              How we help businesses:
            </h4>
            <ul className="list-disc pl-6 text-[#033A78] text-sm space-y-2">
              <li>
                We offer solutions gained through experience, employment laws,
                and best practices.
              </li>
              <li>
                We offer flexible, customized services — there is no
                one-size-fits-all model.
              </li>
              <li>
                We provide a fresh, unbiased perspective for every situation.
              </li>
              <li>
                We help businesses increase productivity and profitability while
                minimizing risks.
              </li>
              <li>
                We concentrate on supporting you with peace of mind and reliable
                service.
              </li>
              <li>
                We help businesses attract top talent and expand their customer
                base.
              </li>
              <li>
                We reduce the time and effort it takes to recruit suitable
                candidates.
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="rounded overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
              alt="About Recruit World"
              className="w-full object-cover h-full"
            />
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center text-white py-24 px-6"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200")',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0A2472] opacity-70"></div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why Partner with Recruit World?
          </h2>

          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            At Recruit World Consultancy Services, we believe partnerships are
            built on trust, transparency, and consistent results. Our solutions
            are not just about filling positions—they’re about building careers
            and empowering organizations with future-ready talent.
          </p>

          <p className="text-lg md:text-xl mb-10 leading-relaxed">
            By combining deep industry insights, personalized service, and agile
            technology, we help our clients stay ahead of the curve. Whether
            you're scaling a startup or expanding a global enterprise, we’re
            here to align your workforce strategy with your business goals.
          </p>

          <button className="bg-white text-[#0A2472] font-semibold py-2 px-6 rounded-full shadow hover:bg-gray-100 transition duration-300">
            CONTACT US
          </button>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={measionImage}
              alt="Team Illustration"
              className="max-w-md"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 space-y-12">
            {/* Vision */}
            <div className="flex items-start gap-6">
              <div className="bg-red-500 text-white p-4 rounded-full shadow">
                <Lightbulb size={30} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  Our Vision
                </h3>
                <p className="text-blue-900 text-md leading-relaxed">
                  to be recognize as an impactful, innova-tive and efficient HR
                  Consulting partner.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex items-start gap-6">
              <div className="bg-red-500 text-white p-4 rounded-full shadow">
                <MousePointerClick size={30} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-2">Mission</h3>
                <p className="text-blue-900 text-md leading-relaxed">
                  We are a professional , enthusiastic and innocative tram ,
                  dedicated to providing professional HR Consulting Service and
                  evolving Recruitment Solution that help our customers become
                  more productive and profitable .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f9ff] py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#033A78]">
            Zeets Core Value
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 items-center">
          {/* Left Column - Values List */}
          <div className="space-y-4">
            {[
              {
                title: "Integrity",
                text: "We maintain the highest ethical standards, promoting truthfulness and integrity at all times. Our relationship starts with trust!",
              },
              {
                title: "Client-Centric Approach",
                text: "We understand client’s needs and always look forward to surpass them while matching recruitment aims with the company’s vision.",
              },
              {
                title: "Continuous Innovation",
                text: "We are open and forward-thinking so we remain relevant in a fast-changing sector by delivering high-quality talent and workforce needs provision.",
              },
              {
                title: "Empathy and Respect",
                text: "When it comes to recruitment we give everybody a sense of honor and dignity as it is equally important for candidates and our customers.",
              },
              {
                title: "Excellence in Service",
                text: "Our service is based on a policy of dedication to excellence – from the first consultation through selection of a suitable candidate which guarantees top-notch performance.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 shadow rounded flex items-start gap-2"
              >
                <span className="text-red-500 text-lg pt-1">⦿</span>
                <p>
                  <strong>{item.title}:</strong> {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column - Image and One Point */}
          <div className="flex flex-col items-center gap-6">
            <img
              src={measionImage1}
              alt="Team Illustration"
              className="max-w-md"
            />
            <div className="bg-white p-4 shadow rounded flex items-start gap-2 w-full">
              <span className="text-red-500 text-lg pt-1">⦿</span>
              <p>
                <strong>Collaboration and Teamwork:</strong> Collaboration is
                also the essence of our company. Our team-based approach
                involves not only members but also our partners – our clients
                and candidates. They can contribute their experience jointly
                with our experts into an optimum solution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
