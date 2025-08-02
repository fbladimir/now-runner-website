import { CheckCircleIcon, CurrencyDollarIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function UserTypes() {
  return (
    <section className="bg-white py-16 sm:py-24">
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

        {/* Requester Section - Image Left, Text Right */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Main Image Container */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 border border-blue-100">
                  <div className="relative">
                    {/* Person requesting help illustration */}
                    <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                          <CheckCircleIcon className="w-12 h-12 text-blue-500" />
                        </div>
                        <h3 className="text-2xl font-semibold text-blue-900 mb-2">Need Help?</h3>
                        <p className="text-blue-700">Request assistance in minutes</p>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-blue-100">
                      <div className="flex items-center space-x-2">
                        <ClockIcon className="w-5 h-5 text-blue-500" />
                        <span className="text-sm font-semibold text-blue-900">15 min</span>
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-blue-100">
                      <div className="flex items-center space-x-2">
                        <ShieldCheckIcon className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-semibold text-green-900">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-semibold text-[#000000]">For Requesters</h3>
                </div>
                
                <h4 className="text-2xl font-semibold text-[#000000] mb-4">
                  Need help with something?
                </h4>
                
                <p className="text-lg text-[#333333] leading-relaxed mb-6">
                  Whether it&apos;s a dead battery, grocery delivery, or room cleaning, 
                  our verified Runners are ready to help within minutes. 
                  Simply describe what you need and we&apos;ll match you with the right person.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-[#333333] font-medium">Battery jump</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-[#333333] font-medium">Room cleaning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-[#333333] font-medium">Delivery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-[#333333] font-medium">Errands</span>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 mt-6">
                  Download the App
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Runner Section - Text Left, Image Right */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5ABDA7] to-[#4AB497] rounded-full flex items-center justify-center">
                    <CurrencyDollarIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-semibold text-[#000000]">For Runners</h3>
                </div>
                
                <h4 className="text-2xl font-semibold text-[#000000] mb-4">
                  Make money helping others near you
                </h4>
                
                <p className="text-lg text-[#333333] leading-relaxed mb-6">
                  Join our community of verified Runners and earn money on your own schedule. 
                  Help people in your neighborhood while building your income. 
                  Set your own hours and choose the tasks you want to do.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#5ABDA7] rounded-full"></div>
                    <span className="text-[#333333] font-medium">Flexible hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#5ABDA7] rounded-full"></div>
                    <span className="text-[#333333] font-medium">Fast payouts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#5ABDA7] rounded-full"></div>
                    <span className="text-[#333333] font-medium">Easy to start</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#5ABDA7] rounded-full"></div>
                    <span className="text-[#333333] font-medium">Choose your tasks</span>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-[#5ABDA7] to-[#4AB497] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 mt-6">
                  Become a Runner
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div>
              <div className="relative">
                {/* Main Image Container */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-12 border border-green-100">
                  <div className="relative">
                    {/* Runner doing work illustration */}
                    <div className="w-full h-80 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                          <CurrencyDollarIcon className="w-12 h-12 text-[#5ABDA7]" />
                        </div>
                        <h3 className="text-2xl font-semibold text-green-900 mb-2">Earn Money</h3>
                        <p className="text-green-700">Help others, build income</p>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-green-100">
                      <div className="flex items-center space-x-2">
                        <CurrencyDollarIcon className="w-5 h-5 text-[#5ABDA7]" />
                        <span className="text-sm font-semibold text-green-900">$25/hr</span>
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-green-100">
                      <div className="flex items-center space-x-2">
                        <ClockIcon className="w-5 h-5 text-[#5ABDA7]" />
                        <span className="text-sm font-semibold text-green-900">Flexible</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 