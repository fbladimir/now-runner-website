import { MapPinIcon, StarIcon } from '@heroicons/react/24/outline';

const cities = [
  {
    name: "Miami",
    state: "FL",
    status: "active",
    population: "2.7M",
    description: "Our flagship city with 24/7 coverage"
  },
  {
    name: "Fort Lauderdale",
    state: "FL", 
    status: "active",
    population: "1.8M",
    description: "Expanding across Broward County"
  },
  {
    name: "West Palm Beach",
    state: "FL",
    status: "active", 
    population: "1.4M",
    description: "Serving Palm Beach County"
  },
  {
    name: "Orlando",
    state: "FL",
    status: "coming-soon",
    population: "2.5M",
    description: "Launching soon - Join the waitlist"
  },
  {
    name: "Tampa",
    state: "FL", 
    status: "coming-soon",
    population: "3.2M",
    description: "Coming to the Gulf Coast"
  },
  {
    name: "Jacksonville",
    state: "FL",
    status: "coming-soon", 
    population: "1.6M",
    description: "Expanding to North Florida"
  }
];

export default function CitiesMap() {
  return (
    <section className="bg-[#F4F5F7] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#000000] mb-4">
            Map of Cities We&apos;re In
          </h2>
          <p className="text-xl text-[#333333] max-w-3xl mx-auto">
            Now Runner is expanding across Florida to serve more communities with reliable, on-demand assistance.
          </p>
        </div>

        {/* Miami Highlight */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#5ABDA7] to-[#4AB497] rounded-2xl p-8 lg:p-12 text-white shadow-lg">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="text-center lg:text-left mb-8 lg:mb-0">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <StarIcon className="w-6 h-6 mr-2" />
                  <span className="text-lg font-semibold">Now Serving</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-semibold mb-4">
                  Miami
                </h3>
                <p className="text-lg opacity-90 mb-4">
                  Our flagship city with 24/7 coverage across Miami-Dade County
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="bg-white/20 rounded-lg px-4 py-2">
                    <span className="text-sm font-medium">2.7M Population</span>
                  </div>
                  <div className="bg-white/20 rounded-lg px-4 py-2">
                    <span className="text-sm font-medium">24/7 Service</span>
                  </div>
                  <div className="bg-white/20 rounded-lg px-4 py-2">
                    <span className="text-sm font-medium">1000+ Runners</span>
                  </div>
                </div>
              </div>
              
              {/* Miami Map Icon */}
              <div className="relative">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPinIcon className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF566B] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">FL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.slice(1).map((city, index) => (
            <div key={index} className={`bg-white rounded-2xl p-6 shadow-[0_4px_10px_rgba(0,0,0,0.03)] border border-[#E0E0E0] transition-all duration-300 hover:shadow-lg ${
              city.status === 'coming-soon' ? 'opacity-75' : ''
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-1">
                    {city.name}
                  </h3>
                  <p className="text-[#666666] text-sm">{city.state}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  city.status === 'active' 
                    ? 'bg-gradient-to-r from-[#5ABDA7] to-[#4AB497] text-white'
                    : 'bg-[#E0E0E0] text-[#666666]'
                }`}>
                  {city.status === 'active' ? 'Active' : 'Coming Soon'}
                </div>
              </div>
              
              <p className="text-[#333333] text-sm mb-4">
                {city.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-[#666666] text-sm">
                  {city.population} population
                </span>
                <MapPinIcon className="w-5 h-5 text-[#5ABDA7]" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-[0_4px_10px_rgba(0,0,0,0.03)] border border-[#E0E0E0]">
            <h3 className="text-2xl font-semibold text-[#000000] mb-4">
              Coming to Your City Soon?
            </h3>
            <p className="text-[#333333] mb-6 max-w-2xl mx-auto">
              Join our waitlist to be notified when Now Runner launches in your area. 
              Help us bring reliable, on-demand assistance to your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#5ABDA7] to-[#4AB497] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
                Join Waitlist
              </button>
              <button className="border-2 border-[#E0E0E0] text-[#333333] px-6 py-3 rounded-xl font-semibold hover:border-[#5ABDA7] hover:text-[#5ABDA7] transition-colors duration-200">
                Request Your City
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 