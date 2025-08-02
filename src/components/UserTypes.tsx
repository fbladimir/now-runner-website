import { CheckCircleIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const requesterServices = [
  "Battery jump",
  "Room cleaning", 
  "Delivery",
  "Errands"
];

const runnerBenefits = [
  "Flexible",
  "Fast payouts",
  "Easy to start"
];

export default function UserTypes() {
  return (
    <section className="bg-[#F4F5F7] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#000000] mb-4">
            Choose Your Path
          </h2>
          <p className="text-xl text-[#333333] max-w-2xl mx-auto">
            Whether you need help or want to help others, Now Runner has you covered.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Requesters Column */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-[0_4px_10px_rgba(0,0,0,0.03)] border border-[#E0E0E0]">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-semibold text-[#000000] mb-6">
                Need help with something?
              </h3>
              
              <ul className="space-y-4 mb-8">
                {requesterServices.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-[#333333] text-lg font-medium">{service}</span>
                  </li>
                ))}
              </ul>
              
              <div className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                For Requesters
              </div>
            </div>
          </div>

          {/* Runners Column */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-[0_4px_10px_rgba(0,0,0,0.03)] border border-[#E0E0E0]">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#5ABDA7] to-[#4AB497] rounded-full flex items-center justify-center shadow-lg">
                  <CurrencyDollarIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-semibold text-[#000000] mb-6">
                Make money helping others near you
              </h3>
              
              <ul className="space-y-4 mb-8">
                {runnerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#5ABDA7] rounded-full flex-shrink-0"></div>
                    <span className="text-[#333333] text-lg font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="inline-block bg-gradient-to-r from-[#5ABDA7] to-[#4AB497] text-white px-6 py-2 rounded-full text-sm font-semibold">
                For Runners
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 