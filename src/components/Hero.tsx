import PhoneMockup from './PhoneMockup';

export default function Hero() {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Need help fast?{' '}
                <span className="text-[#5ABDA7]">Get a Runner Now.</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                From battery jumps to room cleaning, Now Runner connects you with real people who can help — instantly.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#5ABDA7] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#4AADA7] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Download the App
              </button>
              
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-[#5ABDA7] hover:text-[#5ABDA7] transition-colors duration-200 bg-white">
                Become a Runner
              </button>
            </div>
          </div>

          {/* Right side - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
