import Smile from "@/components/Smile";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

      <section className="relative pt-4xl bg-[#0C1D0D] text-white overflow-hidden">
        {/* Hero Content */}
        <div className=" relative z-10 flex flex-col min-h-screen items-center justify-end  px-10 md:px-6 text-center">
          <h1
            style={{ letterSpacing: -3 }}
            className="text-3xl pt-40 leading-6 md:leading-12 md:text-5xl lg:text-5xl font-bold"
          >
            <span className="text-transparent bg-clip-text bg-primary">
              Smarter Care
            </span>
            <span> for</span>
            <span className="block mt-2">Complex Health Needs.</span>
          </h1>

          <p className="md:mt-8 mt-4 max-w-lg text-sm md:text-md text-white leading-relaxed">
            Personalized AI checkups, smart condition trackers, and a trusted
            symptom-guidance library —all in one simple health platform.
          </p>

          <div className="absolute top-1/2 md:top-auto ">
            <Image
              src="/pamcare-hero-grid.png" // Replace with your actual phone mockup image
              alt="PamCare AI App on iPhone"
              width={880}
              height={780}
              className="relative z-10 drop-shadow-2xl"
              priority
            />
          </div>

          {/* Phone Mockup */}
          <div className=" relative md:mt-16 mt-40 max-w-md mx-auto">
            <div className="relative">
              <Image
                src="/pamcare-phone.png" // Replace with your actual phone mockup image
                alt="PamCare AI App on iPhone"
                width={400}
                height={780}
                className="relative z-10 drop-shadow-2xl"
                priority
              />

              {/* Glow effect behind phone */}
              <div className="absolute inset-0 blur-3xl">
                <div className="w-full h-full bg-gradient-to-b from-emerald-500/30 to-teal-600/20 rounded-3xl" />
              </div>
            </div>
          </div>
          <div className="z-10 w-screen absolute bottom-0 left-0">
            <div className="w-full h-40 bg-linear-to-b from-transparent to-[#0C1D0D] rounded-3xl" />
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 bg-[#F6FFF7]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-gray-600 mb-4">
              Our services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C1D0D] mb-6 tracking-tight">
              Everything You Need.
              <br />
              Nothing You Don&apos;t.
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive Healthcare management designed with simplicity and
              security in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Easy Book Appointment */}
            <div className="bg-[#F3F4F6] p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#E5E7EB] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <svg
                  className="w-7 h-7 text-[#0C1D0D] group-hover:text-primary transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0C1D0D] mb-3">
                Easy Book Appointment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Find doctors and book visit within seconds. Browse by specialty,
                location and availability.
              </p>
            </div>

            {/* Card 2: Phone Mockup (Center) */}
            <div className="bg-[#F3F4F6] rounded-3xl overflow-hidden relative group hover:shadow-xl transition-all duration-300 flex items-end justify-center pt-10">
              <div className="relative w-48 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/splash-half.png"
                  alt="PamCare App Interface"
                  width={300}
                  height={600}
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Card 3: Digital Health Report */}
            <div className="bg-[#F3F4F6] p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#E5E7EB] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <svg
                  className="w-7 h-7 text-[#0C1D0D] group-hover:text-primary transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0C1D0D] mb-3">
                Digital Health Report
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access and your prescriptions. Lab results and medical history
                securely.
              </p>
            </div>

            {/* Card 4: Pharmacy */}
            <div className="bg-[#F3F4F6] p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#E5E7EB] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <svg
                  className="w-7 h-7 text-[#0C1D0D] group-hover:text-primary transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0C1D0D] mb-3">
                Pharmacy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get the medicines you need fast. Check availability, compare
                nearby pharmacies, and order your prescriptions with ease.
              </p>
            </div>

            {/* Card 5: AI Powered */}
            <div className="bg-[#F3F4F6] p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#E5E7EB] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <svg
                  className="w-7 h-7 text-[#0C1D0D] group-hover:text-primary transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0C1D0D] mb-3">
                AI Powered
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI-powered chat helps you solve problems, find information,
                and get guidance in seconds.
              </p>
            </div>

            {/* Card 6: Secured & Encrypted */}
            <div className="bg-[#F3F4F6] p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#E5E7EB] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <svg
                  className="w-7 h-7 text-[#0C1D0D] group-hover:text-primary transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0C1D0D] mb-3">
                Secured & Encrypted
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your data stays protected with advanced security and full
                encryption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Technology Focus Section */}
      <section className="py-24 bg-[#F6FFF7]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                About us
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0C1D0D] tracking-tight leading-tight">
                Innovation & Technology
                <br />
                Focus
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  We are an AI-powered digital health company focused on
                  transforming how people manage everyday health challenges. By
                  blending advanced machine learning, clinical knowledge, and
                  thoughtful design, we deliver personalized guidance for users
                  managing arthritis, pregnancy, and malaria.
                </p>
                <p>
                  Our platform provides real-time insights, smart reminders, and
                  seamless care coordination helping users stay informed,
                  supported, and connected throughout their health journey.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative bg-gray-50 rounded-[2.5rem]  flex items-center justify-center">
              {/* Using pamcare-hero-grid.png as it likely contains the multiple phones view or similar */}
              <Image
                src="/about.png"
                alt="PamCare App Interface Showcase"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}




    </div >
  );
}
