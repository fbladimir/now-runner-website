import { Battery100Icon, ShoppingBagIcon, SparklesIcon } from '@heroicons/react/24/outline';

const useCases = [
  {
    icon: Battery100Icon,
    title: "Battery Jump",
    description: "Got a runner in minutes to jump-start my car!",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: ShoppingBagIcon,
    title: "Delivery",
    description: "Needed a quick grocery delivery. Worked perfectly.",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: SparklesIcon,
    title: "Room Cleaning",
    description: "The runner did a fantastic job cleaning up my place.",
    color: "from-green-500 to-emerald-500"
  }
];

export default function UseCases() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Use Cases */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#000000] mb-8">
              Use Cases
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-[0_4px_10px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow duration-300 border border-[#E0E0E0]">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-[#000000]">
                        {useCase.title}
                      </h3>
                      <p className="text-[#333333] text-sm leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Testimonial */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-[0_4px_10px_rgba(0,0,0,0.03)] border border-[#E0E0E0] h-full">
              <div className="flex flex-col justify-center h-full">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5ABDA7] to-[#4AB497] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-center space-y-6">
                  <p className="text-2xl lg:text-3xl font-semibold text-[#000000] leading-relaxed">
                    &ldquo;Now Runner makes getting tasks done so easy!&rdquo;
                  </p>
                  
                  {/* Attribution */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#5ABDA7] to-[#4AB497] rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">S</span>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-[#000000]">Sarah W.</p>
                      <p className="text-sm text-[#666666]">Verified Customer</p>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 