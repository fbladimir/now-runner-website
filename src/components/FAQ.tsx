'use client';

import { useState } from 'react';
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "How does Now Runner work?",
    answer: "Simply open the app, describe what you need help with, and we'll match you with a nearby Runner who can assist. Whether it's a battery jump, delivery, or cleaning task, our Runners are ready to help within minutes."
  },
  {
    question: "How much does it cost?",
    answer: "Pricing varies by task type and location. Most services start at $15-25, with transparent pricing shown before you confirm. No hidden fees or surprises - you'll know exactly what you're paying upfront."
  },
  {
    question: "How quickly can I get help?",
    answer: "Most requests are fulfilled within 15-30 minutes. Our Runners are located throughout your area and can respond quickly to urgent needs. For non-urgent tasks, you can schedule in advance."
  },
  {
    question: "Are the Runners background checked?",
    answer: "Yes, all Now Runner service providers undergo comprehensive background checks, identity verification, and safety training. We prioritize your safety and only work with trusted, verified individuals."
  },
  {
    question: "What types of tasks can Runners help with?",
    answer: "Our Runners can assist with a wide variety of tasks including battery jumps, grocery delivery, room cleaning, errands, moving help, and much more. If you need it done, we can help find someone to do it."
  },
  {
    question: "Can I become a Runner?",
    answer: "Absolutely! If you're 18+ with a clean background, you can apply to become a Runner. Earn money on your own schedule while helping others in your community. The application process is simple and quick."
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer: "We stand behind every service. If you're not completely satisfied, contact our support team within 24 hours and we'll make it right. Your satisfaction is our priority."
  },
  {
    question: "Is Now Runner available 24/7?",
    answer: "Yes! Now Runner operates 24/7 in active service areas. Whether you need help at 2 AM or 2 PM, our Runners are available around the clock to assist with your needs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-[#5ABDA7] to-[#4AB497] rounded-full flex items-center justify-center shadow-lg">
              <QuestionMarkCircleIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#000000] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#333333] max-w-2xl mx-auto">
            Everything you need to know about Now Runner and how we can help you.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-[#E0E0E0] shadow-[0_4px_10px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:shadow-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-[#F4F5F7] transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-[#000000] pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <ChevronDownIcon className="w-6 h-6 text-[#5ABDA7]" />
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="border-t border-[#E0E0E0] pt-4">
                    <p className="text-[#333333] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#5ABDA7] to-[#4AB497] rounded-2xl p-8 lg:p-12 text-white shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Still have questions?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Our support team is here to help. Get in touch and we&apos;ll get back to you within hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#5ABDA7] px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
                Contact Support
              </button>
              <button className="border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
