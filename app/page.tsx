import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Smarter Care for Complex Health Needs.{" "}
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-center gap-3">
                <span className="text-primary font-semibold">1.</span>
                <span>Personalized AI Checkups and Risk Alerts</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-semibold">2.</span>
                <span>
                  Dedicated Trackers for Arthritis, Pregnancy, & Malaria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-semibold">3.</span>
                <span>Trusted Resource Library, and Symptom Guidance</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-1.41-.59-2.3-.96-3.65-1.49C2.87 15.89 2 14 2 12c0-2 1-3.89 2.99-4.75 1.35-.53 2.24-.9 3.65-1.49 1.16-.48 2.15-.94 3.24-1.44 1.03-.47 2.1-.55 3.08.4 1.18 1.14 2.55 2.67 3.93 4.25.28.32.53.59.7.82.18.24.31.46.39.65.25.63.23 1.24-.03 1.79-.09.21-.26.45-.44.7-.17.23-.42.5-.7.82-1.38 1.58-2.75 3.11-3.93 4.25z" />
                </svg>
                Download on the Apple Store
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-gray-800 border-2 border-gray-200 px-6 py-3 rounded-full hover:border-gray-300 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Get it on Google Play
              </button>
            </div>
            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                </svg>
                <span className="text-gray-700 font-medium">
                  Thousands of Lives Supported{" "}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-gray-700 font-medium">
                  Highly Rated for Specialized Guidance{" "}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-64 h-[600px]">
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full opacity-50 blur-3xl"></div>

              {/* Phone frame */}
              <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] h-full overflow-hidden">
                  {/* Phone header */}
                  <div className="bg-primary text-white px-4 py-3 flex items-center justify-between">
                    <span className="font-bold">Palmcare AI</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Phone content */}
                  <div className="p-4 space-y-4">
                    <h3 className="font-semibold text-lg">Consult a doctor</h3>
                    <p className="text-sm text-gray-600">
                      anytime, anywhere via video call
                    </p>

                    {/* Chat messages */}
                    <div className="space-y-3 mt-6">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm">
                          Hello I&apos;m suffering from fever since 3 days.
                        </p>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-3 ml-4">
                        <p className="text-sm">
                          Okay, no worries we will know how you get now?
                        </p>
                      </div>
                    </div>

                    <button className="w-full bg-primary text-white py-3 rounded-lg font-medium">
                      Doctor Online
                    </button>

                    {/* Doctor image placeholder */}
                    <div className="mt-8 flex justify-center">
                      <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart and Affordable Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Right Column - Text */}
            <div className="lg:order-2 space-y-8">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Why simple is better
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                Smart and affordable.
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Always available
                    </h3>
                    <p className="text-gray-600">
                      Skip the trip and start your visit any time with any
                      device.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      A price that doesn&apos;t hurt
                    </h3>
                    <p className="text-gray-600">
                      Your visit is $39 - and even less with insurance.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Prescriptions & treatment plans
                    </h3>
                    <p className="text-gray-600">
                      You&apos;ll get a customized treatment plan, plus.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Column - Image placeholder */}
            <div className="lg:order-1 relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full opacity-50 blur-3xl"></div>
              <div className="relative bg-primary/10 rounded-2xl p-8 flex items-center justify-center h-96">
                <Image
                  src="/man-phone.jpeg"
                  alt="Man with phone"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Guide Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
              How it works
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary">
              A step by step guide
            </h2>
            <p className="text-xl text-gray-600 mt-2">
              Your 24/7 online clinic
            </p>
          </div>

          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-2xl opacity-50 blur-3xl"></div>
                <div className="relative bg-primary/5 rounded-2xl p-8 flex items-center justify-center h-96">
                  <Image
                    src="/older-man.jpeg"
                    alt="Man with phone"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  Answer a few questions
                </h3>
                <p className="text-gray-600 text-lg">
                  We gather your basic health information to help us understand
                  your condition better and connect you with the right doctor.
                </p>
                <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Gender</span>
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                    <span className="text-gray-600">Age</span>
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                    <span className="text-gray-600">Weight</span>
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                    <span className="text-gray-600">Height</span>
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                    <span className="text-gray-600">Location</span>
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 lg:order-2">
                <h3 className="text-2xl font-bold text-primary">
                  Diagnosis by real people, really fast
                </h3>
                <p className="text-gray-600 text-lg">
                  Our board-certified doctors will review your information,
                  provide a diagnosis, and create a personalized treatment plan.
                  You can chat with them directly.
                </p>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-2">
                    Medical information and diagnosis details...
                  </p>
                  <button className="text-primary font-medium text-sm">
                    View more →
                  </button>
                </div>
              </div>
              <div className="relative lg:order-1">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-2xl opacity-50 blur-3xl"></div>
                <div className="relative bg-primary/5 rounded-2xl p-8 flex items-center justify-center h-96">
                  <Image
                    src="/clipboard.jpeg"
                    alt="clipboard"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-2xl opacity-50 blur-3xl"></div>
                <div className="relative bg-primary/5 rounded-2xl p-8 flex items-center justify-center h-96">
                  <Image
                    src="/credit-card.jpeg"
                    alt="credit card"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  Payment & Insurance
                </h3>
                <p className="text-gray-600 text-lg">
                  We accept most major insurance plans and offer transparent
                  pricing for self-pay patients. Your payment information is
                  secure.
                </p>
                <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
                  <div>
                    <label className="text-sm text-gray-600">Card number</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 border border-gray-200 rounded"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm text-gray-600">
                        Expiry date
                      </label>
                      <input
                        type="text"
                        className="w-full mt-1 px-3 py-2 border border-gray-200 rounded"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">CVV</label>
                      <input
                        type="text"
                        className="w-full mt-1 px-3 py-2 border border-gray-200 rounded"
                        placeholder="123"
                      />
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                    <span className="font-semibold">Total</span>
                    <span className="text-2xl font-bold text-primary">$39</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 lg:order-2">
                <h3 className="text-2xl font-bold text-primary">
                  Start feeling better
                </h3>
                <p className="text-gray-600 text-lg">
                  Once your treatment plan is in place, you can start feeling
                  better. We&apos;ll follow up with you to ensure your recovery
                  is on track.
                </p>
                <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-primary rounded flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">Take your medication</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-primary rounded flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">Rest</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-primary rounded flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Drink plenty of fluids
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-primary rounded flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">Follow up with doctor</span>
                  </div>
                </div>
              </div>
              <div className="relative lg:order-1">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-2xl opacity-50 blur-3xl"></div>
                <div className="relative bg-primary/5 rounded-2xl p-8 flex items-center justify-center h-96">
                  <Image
                    src="/smile.jpg"
                    alt="Man with phone"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safe and Secure Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full opacity-50 blur-3xl"></div>
              <div className="relative bg-primary/5 rounded-2xl p-8 flex items-center justify-center h-96">
                <Image
                  src="/doctor-shield.jpg"
                  alt="Man with phone"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="space-y-8">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Quality by design
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                Safe and secure.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We use the latest security protocols to ensure your personal and
                medical information is always safe. Our platform is HIPAA
                compliant and GDPR ready.
              </p>
              <button className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-full hover:bg-primary/5 transition-colors">
                Read more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Give Us a Try Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Why wait & help
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                Ready to give us a try?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Join thousands of satisfied patients who have experienced
                convenient, affordable, and high-quality online healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-1.41-.59-2.3-.96-3.65-1.49C2.87 15.89 2 14 2 12c0-2 1-3.89 2.99-4.75 1.35-.53 2.24-.9 3.65-1.49 1.16-.48 2.15-.94 3.24-1.44 1.03-.47 2.1-.55 3.08.4 1.18 1.14 2.55 2.67 3.93 4.25.28.32.53.59.7.82.18.24.31.46.39.65.25.63.23 1.24-.03 1.79-.09.21-.26.45-.44.7-.17.23-.42.5-.7.82-1.38 1.58-2.75 3.11-3.93 4.25z" />
                  </svg>
                  Download on the Apple Store
                </button>
                <button className="flex items-center justify-center gap-2 bg-white text-gray-800 border-2 border-gray-200 px-6 py-3 rounded-full hover:border-gray-300 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Get it on Google Play
                </button>
              </div>
            </div>

            {/* Right Column - Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-64 h-[600px]">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full opacity-50 blur-3xl"></div>
                <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-[2rem] h-full overflow-hidden">
                    <div className="bg-primary text-white px-4 py-3 flex items-center justify-between">
                      <span className="font-bold">Palmcare AI</span>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="p-4 space-y-4">
                      <h3 className="font-semibold text-lg">
                        Consult a doctor
                      </h3>
                      <p className="text-sm text-gray-600">
                        anytime, anywhere via video call
                      </p>
                      <div className="mt-8 flex justify-center">
                        <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                          <svg
                            className="w-16 h-16 text-primary"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
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
    </div>
  );
}
