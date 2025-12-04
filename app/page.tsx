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
      <section id="services" className="py-24 bg-[#F6FFF7]">
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
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="76" height="76" rx="12" fill="#E5E7EB" />
                  <path
                    d="M31.3333 27.5835C30.6499 27.5835 30.0833 27.0168 30.0833 26.3335V21.3335C30.0833 20.6502 30.6499 20.0835 31.3333 20.0835C32.0166 20.0835 32.5833 20.6502 32.5833 21.3335V26.3335C32.5833 27.0168 32.0166 27.5835 31.3333 27.5835Z"
                    fill="#101010"
                  />
                  <path
                    d="M44.6667 27.5835C43.9834 27.5835 43.4167 27.0168 43.4167 26.3335V21.3335C43.4167 20.6502 43.9834 20.0835 44.6667 20.0835C45.3501 20.0835 45.9167 20.6502 45.9167 21.3335V26.3335C45.9167 27.0168 45.3501 27.5835 44.6667 27.5835Z"
                    fill="#101010"
                  />
                  <path
                    d="M32.1667 42.1669C31.95 42.1669 31.7333 42.1169 31.5333 42.0335C31.3167 41.9502 31.15 41.8335 30.9833 41.6835C30.6833 41.3668 30.5 40.9502 30.5 40.5002C30.5 40.2835 30.55 40.0669 30.6333 39.8669C30.7167 39.6669 30.8333 39.4835 30.9833 39.3169C31.15 39.1669 31.3167 39.0502 31.5333 38.9668C32.1333 38.7168 32.8833 38.8502 33.35 39.3169C33.65 39.6335 33.8333 40.0669 33.8333 40.5002C33.8333 40.6002 33.8167 40.7169 33.8 40.8335C33.7833 40.9335 33.75 41.0335 33.7 41.1335C33.6667 41.2335 33.6167 41.3335 33.55 41.4335C33.5 41.5169 33.4167 41.6002 33.35 41.6835C33.0333 41.9835 32.6 42.1669 32.1667 42.1669Z"
                    fill="#101010"
                  />
                  <path
                    d="M37.9999 42.1665C37.7833 42.1665 37.5666 42.1165 37.3666 42.0331C37.1499 41.9498 36.9833 41.8331 36.8166 41.6831C36.5166 41.3664 36.3333 40.9498 36.3333 40.4998C36.3333 40.2831 36.3833 40.0664 36.4666 39.8664C36.5499 39.6664 36.6666 39.4831 36.8166 39.3165C36.9833 39.1665 37.1499 39.0498 37.3666 38.9664C37.9666 38.6998 38.7166 38.8498 39.1833 39.3165C39.4833 39.6331 39.6666 40.0665 39.6666 40.4998C39.6666 40.5998 39.6499 40.7165 39.6333 40.8331C39.6166 40.9331 39.5832 41.0331 39.5332 41.1331C39.4999 41.2331 39.4499 41.3331 39.3833 41.4331C39.3333 41.5165 39.2499 41.5998 39.1833 41.6831C38.8666 41.9831 38.4333 42.1665 37.9999 42.1665Z"
                    fill="#101010"
                  />
                  <path
                    d="M43.8334 42.1665C43.6167 42.1665 43.4001 42.1165 43.2001 42.0331C42.9834 41.9498 42.8167 41.8331 42.6501 41.6831C42.5834 41.5998 42.5167 41.5165 42.4501 41.4331C42.3834 41.3331 42.3334 41.2331 42.3001 41.1331C42.2501 41.0331 42.2167 40.9331 42.2001 40.8331C42.1834 40.7165 42.1667 40.5998 42.1667 40.4998C42.1667 40.0665 42.3501 39.6331 42.6501 39.3165C42.8167 39.1665 42.9834 39.0498 43.2001 38.9664C43.8167 38.6998 44.5501 38.8498 45.0167 39.3165C45.3167 39.6331 45.5001 40.0665 45.5001 40.4998C45.5001 40.5998 45.4834 40.7165 45.4667 40.8331C45.4501 40.9331 45.4167 41.0331 45.3667 41.1331C45.3334 41.2331 45.2834 41.3331 45.2168 41.4331C45.1668 41.5165 45.0834 41.5998 45.0167 41.6831C44.7001 41.9831 44.2667 42.1665 43.8334 42.1665Z"
                    fill="#101010"
                  />
                  <path
                    d="M32.1667 48C31.95 48 31.7333 47.95 31.5333 47.8667C31.3333 47.7833 31.15 47.6666 30.9833 47.5166C30.6833 47.2 30.5 46.7667 30.5 46.3333C30.5 46.1167 30.55 45.9 30.6333 45.7C30.7167 45.4833 30.8333 45.3 30.9833 45.15C31.6 44.5333 32.7333 44.5333 33.35 45.15C33.65 45.4667 33.8333 45.9 33.8333 46.3333C33.8333 46.7667 33.65 47.2 33.35 47.5166C33.0333 47.8166 32.6 48 32.1667 48Z"
                    fill="#101010"
                  />
                  <path
                    d="M37.9999 48C37.5666 48 37.1333 47.8166 36.8166 47.5166C36.5166 47.2 36.3333 46.7667 36.3333 46.3333C36.3333 46.1167 36.3833 45.9 36.4666 45.7C36.5499 45.4833 36.6666 45.3 36.8166 45.15C37.4333 44.5333 38.5666 44.5333 39.1833 45.15C39.3333 45.3 39.4499 45.4833 39.5332 45.7C39.6166 45.9 39.6666 46.1167 39.6666 46.3333C39.6666 46.7667 39.4833 47.2 39.1833 47.5166C38.8666 47.8166 38.4333 48 37.9999 48Z"
                    fill="#101010"
                  />
                  <path
                    d="M43.8334 47.9999C43.4001 47.9999 42.9667 47.8165 42.6501 47.5165C42.5001 47.3665 42.3834 47.1832 42.3001 46.9665C42.2168 46.7665 42.1667 46.5499 42.1667 46.3332C42.1667 46.1165 42.2168 45.8998 42.3001 45.6998C42.3834 45.4832 42.5001 45.2999 42.6501 45.1499C43.0334 44.7665 43.6167 44.5832 44.1501 44.6998C44.2667 44.7165 44.3667 44.7498 44.4667 44.7998C44.5667 44.8332 44.6668 44.8832 44.7668 44.9499C44.8501 44.9999 44.9334 45.0832 45.0167 45.1499C45.3167 45.4665 45.5001 45.8999 45.5001 46.3332C45.5001 46.7665 45.3167 47.1998 45.0167 47.5165C44.7001 47.8165 44.2667 47.9999 43.8334 47.9999Z"
                    fill="#101010"
                  />
                  <path
                    d="M52.1666 34.3999H23.8333C23.1499 34.3999 22.5833 33.8332 22.5833 33.1499C22.5833 32.4666 23.1499 31.8999 23.8333 31.8999H52.1666C52.8499 31.8999 53.4166 32.4666 53.4166 33.1499C53.4166 33.8332 52.8499 34.3999 52.1666 34.3999Z"
                    fill="#101010"
                  />
                  <path
                    d="M44.6667 55.9168H31.3333C25.25 55.9168 21.75 52.4168 21.75 46.3335V32.1668C21.75 26.0835 25.25 22.5835 31.3333 22.5835H44.6667C50.75 22.5835 54.25 26.0835 54.25 32.1668V46.3335C54.25 52.4168 50.75 55.9168 44.6667 55.9168ZM31.3333 25.0835C26.5667 25.0835 24.25 27.4002 24.25 32.1668V46.3335C24.25 51.1002 26.5667 53.4168 31.3333 53.4168H44.6667C49.4333 53.4168 51.75 51.1002 51.75 46.3335V32.1668C51.75 27.4002 49.4333 25.0835 44.6667 25.0835H31.3333Z"
                    fill="#101010"
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
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="76" height="76" rx="12" fill="#E5E7EB" />
                  <path
                    d="M49.6667 33.0002V31.0305C49.6667 28.2084 49.6667 26.7974 49.2463 25.6704C48.5706 23.8587 47.1415 22.4296 45.3298 21.7538C44.2028 21.3335 42.7918 21.3335 39.9697 21.3335C35.0311 21.3335 32.5618 21.3335 30.5896 22.0691C27.419 23.2516 24.9181 25.7525 23.7356 28.9231C23 30.8953 23 33.3646 23 38.3032L23 42.5456C23 47.6612 23 50.219 24.3297 51.9953C24.7107 52.5043 25.1625 52.9561 25.6715 53.3371C27.4478 54.6668 30.0056 54.6668 35.1212 54.6668H36.3333C38.2829 54.6668 42.1667 54.6668 42.1667 54.6668"
                    stroke="#101010"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M36.3333 41.8889H37.7338C38.8364 41.8889 39.3877 41.8889 39.8307 42.1793C40.2737 42.4697 40.5203 42.9927 41.0134 44.0386L43.6666 49.6667L47.3333 38L49.9865 43.6281C50.4796 44.674 50.7261 45.197 51.1691 45.4874C51.6122 45.7778 52.1635 45.7778 53.266 45.7778H54.6666"
                    stroke="#101010"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23 38.0002C23 34.9319 25.4873 32.4446 28.5556 32.4446H30.4074C31.2685 32.4446 31.699 32.4446 32.0523 32.35C33.0109 32.0931 33.7596 31.3444 34.0165 30.3858C34.1111 30.0325 34.1111 29.602 34.1111 28.7409V26.8891C34.1111 23.8208 36.5984 21.3335 39.6667 21.3335"
                    stroke="#101010"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="76" height="76" rx="12" fill="#E5E7EB" />
                  <path
                    d="M21.3333 38.9375C21.3333 33.7815 21.3333 31.2035 23.0418 29.6018C24.7503 28 27.5002 28 32.9999 28H42.9999C48.4996 28 51.2495 28 52.958 29.6018C54.6666 31.2035 54.6666 33.7815 54.6666 38.9375V42.0625C54.6666 47.2185 54.6666 49.7965 52.958 51.3982C51.2495 53 48.4996 53 42.9999 53H32.9999C27.5002 53 24.7503 53 23.0418 51.3982C21.3333 49.7965 21.3333 47.2185 21.3333 42.0625V38.9375Z"
                    stroke="#181818"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M33 40.5H43M38 35.5L38 45.5"
                    stroke="#181818"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M46.3334 28C46.3334 23.8633 45.4701 23 41.3334 23H34.6667C30.5301 23 29.6667 23.8633 29.6667 28"
                    stroke="#181818"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="76" height="76" rx="12" fill="#E5E7EB" />
                  <path
                    d="M21.3333 38.9375C21.3333 33.7815 21.3333 31.2035 23.0418 29.6018C24.7503 28 27.5002 28 32.9999 28H42.9999C48.4996 28 51.2495 28 52.958 29.6018C54.6666 31.2035 54.6666 33.7815 54.6666 38.9375V42.0625C54.6666 47.2185 54.6666 49.7965 52.958 51.3982C51.2495 53 48.4996 53 42.9999 53H32.9999C27.5002 53 24.7503 53 23.0418 51.3982C21.3333 49.7965 21.3333 47.2185 21.3333 42.0625V38.9375Z"
                    stroke="#181818"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M33 40.5H43M38 35.5L38 45.5"
                    stroke="#181818"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M46.3334 28C46.3334 23.8633 45.4701 23 41.3334 23H34.6667C30.5301 23 29.6667 23.8633 29.6667 28"
                    stroke="#181818"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="76" height="76" rx="12" fill="#E5E7EB" />
                  <path
                    d="M31.3333 27.5835C30.6499 27.5835 30.0833 27.0168 30.0833 26.3335V21.3335C30.0833 20.6502 30.6499 20.0835 31.3333 20.0835C32.0166 20.0835 32.5833 20.6502 32.5833 21.3335V26.3335C32.5833 27.0168 32.0166 27.5835 31.3333 27.5835Z"
                    fill="#101010"
                  />
                  <path
                    d="M44.6667 27.5835C43.9834 27.5835 43.4167 27.0168 43.4167 26.3335V21.3335C43.4167 20.6502 43.9834 20.0835 44.6667 20.0835C45.3501 20.0835 45.9167 20.6502 45.9167 21.3335V26.3335C45.9167 27.0168 45.3501 27.5835 44.6667 27.5835Z"
                    fill="#101010"
                  />
                  <path
                    d="M32.1667 42.1669C31.95 42.1669 31.7333 42.1169 31.5333 42.0335C31.3167 41.9502 31.15 41.8335 30.9833 41.6835C30.6833 41.3668 30.5 40.9502 30.5 40.5002C30.5 40.2835 30.55 40.0669 30.6333 39.8669C30.7167 39.6669 30.8333 39.4835 30.9833 39.3169C31.15 39.1669 31.3167 39.0502 31.5333 38.9668C32.1333 38.7168 32.8833 38.8502 33.35 39.3169C33.65 39.6335 33.8333 40.0669 33.8333 40.5002C33.8333 40.6002 33.8167 40.7169 33.8 40.8335C33.7833 40.9335 33.75 41.0335 33.7 41.1335C33.6667 41.2335 33.6167 41.3335 33.55 41.4335C33.5 41.5169 33.4167 41.6002 33.35 41.6835C33.0333 41.9835 32.6 42.1669 32.1667 42.1669Z"
                    fill="#101010"
                  />
                  <path
                    d="M37.9999 42.1665C37.7833 42.1665 37.5666 42.1165 37.3666 42.0331C37.1499 41.9498 36.9833 41.8331 36.8166 41.6831C36.5166 41.3664 36.3333 40.9498 36.3333 40.4998C36.3333 40.2831 36.3833 40.0664 36.4666 39.8664C36.5499 39.6664 36.6666 39.4831 36.8166 39.3165C36.9833 39.1665 37.1499 39.0498 37.3666 38.9664C37.9666 38.6998 38.7166 38.8498 39.1833 39.3165C39.4833 39.6331 39.6666 40.0665 39.6666 40.4998C39.6666 40.5998 39.6499 40.7165 39.6333 40.8331C39.6166 40.9331 39.5832 41.0331 39.5332 41.1331C39.4999 41.2331 39.4499 41.3331 39.3833 41.4331C39.3333 41.5165 39.2499 41.5998 39.1833 41.6831C38.8666 41.9831 38.4333 42.1665 37.9999 42.1665Z"
                    fill="#101010"
                  />
                  <path
                    d="M43.8334 42.1665C43.6167 42.1665 43.4001 42.1165 43.2001 42.0331C42.9834 41.9498 42.8167 41.8331 42.6501 41.6831C42.5834 41.5998 42.5167 41.5165 42.4501 41.4331C42.3834 41.3331 42.3334 41.2331 42.3001 41.1331C42.2501 41.0331 42.2167 40.9331 42.2001 40.8331C42.1834 40.7165 42.1667 40.5998 42.1667 40.4998C42.1667 40.0665 42.3501 39.6331 42.6501 39.3165C42.8167 39.1665 42.9834 39.0498 43.2001 38.9664C43.8167 38.6998 44.5501 38.8498 45.0167 39.3165C45.3167 39.6331 45.5001 40.0665 45.5001 40.4998C45.5001 40.5998 45.4834 40.7165 45.4667 40.8331C45.4501 40.9331 45.4167 41.0331 45.3667 41.1331C45.3334 41.2331 45.2834 41.3331 45.2168 41.4331C45.1668 41.5165 45.0834 41.5998 45.0167 41.6831C44.7001 41.9831 44.2667 42.1665 43.8334 42.1665Z"
                    fill="#101010"
                  />
                  <path
                    d="M32.1667 48C31.95 48 31.7333 47.95 31.5333 47.8667C31.3333 47.7833 31.15 47.6666 30.9833 47.5166C30.6833 47.2 30.5 46.7667 30.5 46.3333C30.5 46.1167 30.55 45.9 30.6333 45.7C30.7167 45.4833 30.8333 45.3 30.9833 45.15C31.6 44.5333 32.7333 44.5333 33.35 45.15C33.65 45.4667 33.8333 45.9 33.8333 46.3333C33.8333 46.7667 33.65 47.2 33.35 47.5166C33.0333 47.8166 32.6 48 32.1667 48Z"
                    fill="#101010"
                  />
                  <path
                    d="M37.9999 48C37.5666 48 37.1333 47.8166 36.8166 47.5166C36.5166 47.2 36.3333 46.7667 36.3333 46.3333C36.3333 46.1167 36.3833 45.9 36.4666 45.7C36.5499 45.4833 36.6666 45.3 36.8166 45.15C37.4333 44.5333 38.5666 44.5333 39.1833 45.15C39.3333 45.3 39.4499 45.4833 39.5332 45.7C39.6166 45.9 39.6666 46.1167 39.6666 46.3333C39.6666 46.7667 39.4833 47.2 39.1833 47.5166C38.8666 47.8166 38.4333 48 37.9999 48Z"
                    fill="#101010"
                  />
                  <path
                    d="M43.8334 47.9999C43.4001 47.9999 42.9667 47.8165 42.6501 47.5165C42.5001 47.3665 42.3834 47.1832 42.3001 46.9665C42.2168 46.7665 42.1667 46.5499 42.1667 46.3332C42.1667 46.1165 42.2168 45.8998 42.3001 45.6998C42.3834 45.4832 42.5001 45.2999 42.6501 45.1499C43.0334 44.7665 43.6167 44.5832 44.1501 44.6998C44.2667 44.7165 44.3667 44.7498 44.4667 44.7998C44.5667 44.8332 44.6668 44.8832 44.7668 44.9499C44.8501 44.9999 44.9334 45.0832 45.0167 45.1499C45.3167 45.4665 45.5001 45.8999 45.5001 46.3332C45.5001 46.7665 45.3167 47.1998 45.0167 47.5165C44.7001 47.8165 44.2667 47.9999 43.8334 47.9999Z"
                    fill="#101010"
                  />
                  <path
                    d="M52.1666 34.3999H23.8333C23.1499 34.3999 22.5833 33.8332 22.5833 33.1499C22.5833 32.4666 23.1499 31.8999 23.8333 31.8999H52.1666C52.8499 31.8999 53.4166 32.4666 53.4166 33.1499C53.4166 33.8332 52.8499 34.3999 52.1666 34.3999Z"
                    fill="#101010"
                  />
                  <path
                    d="M44.6667 55.9168H31.3333C25.25 55.9168 21.75 52.4168 21.75 46.3335V32.1668C21.75 26.0835 25.25 22.5835 31.3333 22.5835H44.6667C50.75 22.5835 54.25 26.0835 54.25 32.1668V46.3335C54.25 52.4168 50.75 55.9168 44.6667 55.9168ZM31.3333 25.0835C26.5667 25.0835 24.25 27.4002 24.25 32.1668V46.3335C24.25 51.1002 26.5667 53.4168 31.3333 53.4168H44.6667C49.4333 53.4168 51.75 51.1002 51.75 46.3335V32.1668C51.75 27.4002 49.4333 25.0835 44.6667 25.0835H31.3333Z"
                    fill="#101010"
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
      <section id="about" className="py-24 bg-[#F6FFF7]">
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
                  managing arthritis, diabetes, high-blood pressure, pregnancy,
                  and malaria.
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
    </div>
  );
}
