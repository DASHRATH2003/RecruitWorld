import React, { useState } from 'react';

const offices = [
  {
    city: "Bangalore",
    address: "123 Tech Park, Electronic City Phase 1",
    phone: "+91 80 1234 5678",
    email: "bangalore@recruitworld.com",
    image: "https://media.glassdoor.com/l/84/40/e7/65/office.jpg?signature=bf8fb083e5d6866710e4657e7353ebe2de468242ae788dbe501301a6ed196090"
  },
  {
    city: "Mumbai",
    address: "456 Business Hub, Bandra Kurla Complex",
    phone: "+91 22 9876 5432",
    email: "mumbai@recruitworld.com",
    image: "https://img.freepik.com/free-photo/mumbai-skyline-skyscrapers-construction_469504-21.jpg?w=740&t=st=1709727425~exp=1709728025~hmac=2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'recruitment'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      service: 'recruitment'
    });
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <div 
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-30568.jpg?w=1060&t=st=1709727494~exp=1709728094~hmac=5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(10, 36, 114, 0.8)'
        }}
      >
        <div className="text-center text-white relative z-10">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto px-4">
            Get in touch with our team for expert recruitment solutions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#0A2472] mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Service Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="recruitment">Recruitment Services</option>
                  <option value="staffing">Staffing Solutions</option>
                  <option value="consulting">HR Consulting</option>
                  <option value="executive">Executive Search</option>
                  <option value="other">Other Services</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0A2472] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#083072] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Additional Contact Information */}
            <div className="mt-28 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-[#0A2472] mb-4">Why Contact Us?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-[#0A2472]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Expert Recruitment Solutions</h4>
                    <p className="text-gray-600 text-sm">Get personalized recruitment strategies tailored to your industry needs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-[#0A2472]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Quick Response Time</h4>
                    <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-[#0A2472]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Global Network</h4>
                    <p className="text-gray-600 text-sm">Access to a vast network of qualified candidates across industries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-[#0A2472]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Quality Assurance</h4>
                    <p className="text-gray-600 text-sm">Rigorous screening process to ensure the best talent matches</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#0A2472] mb-4">Business Hours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                  <div>
                    <p className="font-semibold">Monday - Friday:</p>
                    <p>9:00 AM - 6:00 PM IST</p>
                  </div>
                  <div>
                    <p className="font-semibold">Saturday:</p>
                    <p>10:00 AM - 2:00 PM IST</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-semibold">Sunday:</p>
                    <p>Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <svg className="w-8 h-8 text-[#0A2472]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-800">Need Immediate Assistance?</p>
                    <p className="text-gray-600 text-sm">Our support team is available during business hours for urgent inquiries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-[#0A2472] mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Whether you're looking for top talent or seeking career opportunities, our team is here to help. Reach out to us through any of our offices or fill out the contact form.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-xl font-semibold text-[#0A2472] mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600">+91 1800 123 4567</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">info@recruitworld.com</span>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0A2472]">Our Offices</h3>
              {offices.map((office, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={office.image} 
                    alt={`${office.city} Office`} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-[#0A2472] mb-4">{office.city}</h4>
                    <div className="space-y-3">
                      <p className="flex items-start text-gray-600">
                        <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {office.address}
                      </p>
                      <p className="flex items-center text-gray-600">
                        <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {office.phone}
                      </p>
                      <p className="flex items-center text-gray-600">
                        <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {office.email}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0A2472] text-center mb-8">Find Us on the Map</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5977740992967!2d77.59456531482166!3d12.937679090877592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c8c3b76c7f%3A0x3a3b36c5f0f5d613!2sRecruit%20World!5e0!3m2!1sen!2sin!4v1645518626979!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 