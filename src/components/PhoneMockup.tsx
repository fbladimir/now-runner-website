export default function PhoneMockup() {
  return (
    <div className="relative">
      {/* Phone Frame */}
      <div className="relative w-80 h-[600px] mx-auto">
        {/* Phone Body */}
        <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl border-8 border-gray-800">
          {/* Screen */}
          <div className="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-6 py-2 bg-white">
              <span className="text-sm font-semibold text-black">9:21</span>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-2 bg-black rounded-sm"></div>
                <div className="w-1 h-2 bg-black rounded-sm"></div>
                <div className="w-1 h-2 bg-black rounded-sm"></div>
                <div className="w-1 h-2 bg-black rounded-sm"></div>
              </div>
            </div>

            {/* App Content */}
            <div className="px-6 py-8 space-y-6">
              {/* Main Question */}
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-[#000000] mb-4">
                  What do you need help with?
                </h2>
              </div>

              {/* Input Field */}
              <div className="bg-[#F4F5F7] rounded-xl p-4">
                <p className="text-[#333333] text-sm">
                  My car won&apos;t start. I think it&apos;s the battery.
                </p>
              </div>

              {/* Suggested Action Button */}
              <button className="w-full bg-gradient-to-r from-[#5ABDA7] to-[#4AB497] text-white py-3 px-4 rounded-xl font-semibold text-center">
                Battery Jumpstart
              </button>

              {/* Location */}
              <div className="flex items-center space-x-2 bg-[#F4F5F7] rounded-xl p-4">
                <svg className="w-5 h-5 text-[#666666]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#333333] font-medium">1130 Coral Way</span>
              </div>

              {/* Primary CTA Button */}
              <button className="w-full bg-gradient-to-r from-[#5ABDA7] to-[#4AB497] text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg">
                Request Runner
              </button>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-32 h-1 bg-gray-800 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 