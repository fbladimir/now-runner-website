import PhoneMockup from './PhoneMockup';

export default function Hero() {
  return (
    <section className="relative bg-[#F4F5F7] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#000000] leading-tight">
                Need help fast?{' '}
                <span className="text-[#5ABDA7]">Get a Runner Now.</span>
              </h1>
              
              <p className="text-xl text-[#333333] leading-relaxed max-w-2xl">
                From battery jumps to room cleaning, Now Runner connects you with real people who can help — instantly.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#5ABDA7] to-[#4AB497] text-white px-5 py-3 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
                Download the App
              </button>
              
              <button className="border-2 border-[#E0E0E0] text-[#333333] px-5 py-3 rounded-xl font-semibold text-lg hover:border-[#5ABDA7] hover:text-[#5ABDA7] transition-colors duration-200 bg-white">
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
