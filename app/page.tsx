export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-purple-700">Pamcare AI</h1>
            <span className="text-sm text-gray-500">
              Intelligent Health Management
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#conditions"
              className="text-gray-600 hover:text-purple-700"
            >
              Conditions We Support
            </a>
            <a href="#services" className="text-gray-600 hover:text-red-500">
              Key Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-700">
              Pricing & Access
            </a>
            <a href="#inside" className="text-gray-600 hover:text-purple-700">
              About Pamcare AI{" "}
            </a>
            <a href="#reviews" className="text-gray-600 hover:text-purple-700">
              Success Stories
            </a>
          </div>
          <button className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition-colors">
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold text-purple-900 leading-tight">
              Smarter Care for Complex Health Needs.{" "}
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-center gap-3">
                <span className="text-purple-700 font-semibold">1.</span>
                <span>Personalized AI Checkups and Risk Alerts</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-purple-700 font-semibold">2.</span>
                <span>
                  Dedicated Trackers for Arthritis, Pregnancy, & Malaria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-purple-700 font-semibold">3.</span>
                <span>Trusted Resource Library, and Symptom Guidance</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition-colors">
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
                  className="w-5 h-5 text-green-500"
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
                  className="w-5 h-5 text-green-500"
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
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-pink-100 rounded-full opacity-50 blur-3xl"></div>

              {/* Phone frame */}
              <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] h-full overflow-hidden">
                  {/* Phone header */}
                  <div className="bg-purple-700 text-white px-4 py-3 flex items-center justify-between">
                    <span className="font-bold">Docta</span>
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
                          Hello I'm suffering from fever since 3 days.
                        </p>
                      </div>
                      <div className="bg-purple-100 rounded-lg p-3 ml-4">
                        <p className="text-sm">
                          Okay, no worries we will know how you get now?
                        </p>
                      </div>
                    </div>

                    <button className="w-full bg-purple-700 text-white py-3 rounded-lg font-medium">
                      Doctor Online
                    </button>

                    {/* Doctor image placeholder */}
                    <div className="mt-8 flex justify-center">
                      <div className="w-32 h-32 bg-purple-200 rounded-full flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-purple-600"
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
              <h2 className="text-4xl lg:text-5xl font-bold text-purple-900">
                Smart and affordable.
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-purple-700"
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
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-purple-700"
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
                      A price that doesn't hurt
                    </h3>
                    <p className="text-gray-600">
                      Your visit is $39 - and even less with insurance.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-purple-700"
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
                      You'll get a customized treatment plan, plus.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Column - Image placeholder */}
            <div className="lg:order-1 relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-pink-100 rounded-full opacity-50 blur-3xl"></div>
              <div className="relative bg-blue-100 rounded-2xl p-8 flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-blue-600"
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
                  <p className="text-gray-600">Person with smartphone</p>
                </div>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-purple-900">
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
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-2xl opacity-50 blur-3xl"></div>
                <div className="relative bg-blue-50 rounded-2xl p-8 flex items-center justify-center h-96">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-blue-600"
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
                    <p className="text-gray-600">Older man with smartphone</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-purple-900">
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
                <h3 className="text-2xl font-bold text-purple-900">
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
                  <button className="text-purple-700 font-medium text-sm">
                    View more →
                  </button>
                </div>
              </div>
              <div className="relative lg:order-1">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-pink-100 rounded-2xl opacity-50 blur-3xl"></div>
                <div className="relative bg-pink-50 rounded-2xl p-8 flex items-center justify-center h-96">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-pink-600"
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
                    <p className="text-gray-600">Doctor with clipboard</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-2xl opacity-50 blur-3xl"></div>
                <div className="relative bg-blue-50 rounded-2xl p-8 flex items-center justify-center h-96">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                      </svg>
                    </div>
                    <p className="text-gray-600">Person with credit card</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-purple-900">
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
                    <span className="text-2xl font-bold text-purple-700">
                      $39
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 lg:order-2">
                <h3 className="text-2xl font-bold text-purple-900">
                  Start feeling better
                </h3>
                <p className="text-gray-600 text-lg">
                  Once your treatment plan is in place, you can start feeling
                  better. We'll follow up with you to ensure your recovery is on
                  track.
                </p>
                <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-purple-700 rounded flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-purple-700"
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
                    <div className="w-5 h-5 border-2 border-purple-700 rounded flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-purple-700"
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
                    <div className="w-5 h-5 border-2 border-purple-700 rounded flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-purple-700"
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
                    <div className="w-5 h-5 border-2 border-purple-700 rounded flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-purple-700"
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
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-pink-100 rounded-2xl opacity-50 blur-3xl"></div>
                <div className="relative bg-pink-50 rounded-2xl p-8 flex items-center justify-center h-96">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-pink-600"
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
                    <p className="text-gray-600">Smiling man with smartphone</p>
                  </div>
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
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
              <div className="relative bg-blue-50 rounded-2xl p-8 flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">Doctor with security shield</p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="space-y-8">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Quality by design
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-purple-900">
                Safe and secure.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We use the latest security protocols to ensure your personal and
                medical information is always safe. Our platform is HIPAA
                compliant and GDPR ready.
              </p>
              <button className="bg-white text-purple-700 border-2 border-purple-700 px-6 py-3 rounded-full hover:bg-purple-50 transition-colors">
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
              <h2 className="text-4xl lg:text-5xl font-bold text-purple-900">
                Ready to give us a try?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Join thousands of satisfied patients who have experienced
                convenient, affordable, and high-quality online healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition-colors">
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
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-pink-100 rounded-full opacity-50 blur-3xl"></div>
                <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-[2rem] h-full overflow-hidden">
                    <div className="bg-purple-700 text-white px-4 py-3 flex items-center justify-between">
                      <span className="font-bold">Docta</span>
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
                        <div className="w-32 h-32 bg-purple-200 rounded-full flex items-center justify-center">
                          <svg
                            className="w-16 h-16 text-purple-600"
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

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-purple-700 mb-2">Docta</h3>
              <p className="text-sm text-gray-500">Medical Care</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Help</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#how-it-works" className="hover:text-purple-700">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-purple-700">
                    Our Service
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-purple-700">
                    Pricing & Insurance
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-purple-700">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#careers" className="hover:text-purple-700">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-purple-700">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#support" className="hover:text-purple-700">
                    Help & Support
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-purple-700">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#about" className="hover:text-purple-700">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-purple-700">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="hover:text-purple-700">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} Docta. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-purple-700">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-700">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-700">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-700">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
