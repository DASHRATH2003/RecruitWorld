import React from 'react';

// Import all client logos
const images = import.meta.glob('../assets/image*.png');
const logoPromises = Object.entries(images).map(async ([path, loadImage]) => {
  const number = parseInt(path.match(/image(\d+)\.png/)[1]);
  const src = (await loadImage()).default;
  return { number, src };
});

const Clients = () => {
  const [logos, setLogos] = React.useState([]);

  React.useEffect(() => {
    Promise.all(logoPromises).then((loadedLogos) => {
      // Sort logos by number
      const sortedLogos = loadedLogos.sort((a, b) => a.number - b.number);
      setLogos(sortedLogos);
    });
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0A2472]">Our Clients</h1>
          <p className="mt-4 text-xl text-gray-600">
            Trusted by Leading Organizations
          </p>
        </div>

        {/* Client Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map(({ number, src }) => (
            <div
              key={number}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full h-32 flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Client ${number}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Trust Badge Section */}
        <div className="mt-16 text-center">
          <div className="inline-block border-2 border-[#0A2472] rounded-lg p-6">
            <h3 className="text-2xl font-bold text-[#0A2472] mb-2">
              Trusted Excellence
            </h3>
            <p className="text-gray-600">
              Join our growing list of satisfied clients who trust us for their HR needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients; 