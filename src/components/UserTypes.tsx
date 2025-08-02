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
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Path
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you need help or want to help others, Now Runner has you covered.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Requesters Column */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 border border-blue-100">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Need help with something?
              </h3>
              
              <ul className="space-y-4 mb-8">
                {requesterServices.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg font-medium">{service}</span>
                  </li>
                ))}
              </ul>
              
              <div className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                For Requesters
              </div>
            </div>
          </div>

          {/* Runners Column */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-12 border border-green-100">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="w-16 h-16 bg-[#5ABDA7] rounded-full flex items-center justify-center">
                  <CurrencyDollarIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Make money helping others near you
              </h3>
              
              <ul className="space-y-4 mb-8">
                {runnerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#5ABDA7] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="inline-block bg-[#5ABDA7] text-white px-6 py-2 rounded-full text-sm font-semibold">
                For Runners
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of people who are already using Now Runner to get help or earn money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#5ABDA7] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#4AADA7] transition-colors duration-200 shadow-lg hover:shadow-xl">
                Download the App
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-[#5ABDA7] hover:text-[#5ABDA7] transition-colors duration-200">
                Become a Runner
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 