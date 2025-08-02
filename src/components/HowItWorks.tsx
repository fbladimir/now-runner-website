import { ChatBubbleLeftRightIcon, LightBulbIcon, UserIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Type or speak your task",
    description: "Enter what you need assistance with, using text or voice."
  },
  {
    icon: LightBulbIcon,
    title: "Let AI categorize & match",
    description: "We'll identify the task type and find the right Runner for the job."
  },
  {
    icon: UserIcon,
    title: "A nearby Runner picks it up",
    description: "Your Runner accepts the job and is on their way to help."
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#5ABDA7] rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 