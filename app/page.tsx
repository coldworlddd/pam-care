"use client";

import Smile from "@/components/Smile";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Header */}

      <section className="relative pt-4xl bg-[#0C1D0D] text-white overflow-hidden">
        {/* Hero Content */}
        <div className=" relative z-10 flex flex-col min-h-screen items-center justify-end  px-10 md:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ letterSpacing: -3 }}
            className="text-3xl pt-40 leading-6 md:leading-12 md:text-5xl lg:text-5xl font-bold"
          >
            <span className="text-transparent bg-clip-text bg-primary">
              Smarter Care
            </span>
            <span> for</span>
            <span className="block mt-2">Complex Health Needs.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:mt-8 mt-4 max-w-lg text-sm md:text-md text-white leading-relaxed"
          >
            Personalized AI checkups, smart condition trackers, and a trusted
            symptom-guidance library —all in one simple health platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="absolute top-1/2 md:top-auto "
          >
            <Image
              src="/pamcare-hero-grid.png" // Replace with your actual phone mockup image
              alt="PamCare AI App on iPhone"
              width={880}
              height={780}
              className="relative z-10 drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className=" relative md:mt-16 mt-40 max-w-md mx-auto"
          >
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
          </motion.div>
          <div className="z-10 w-screen absolute bottom-0 left-0">
            <div className="w-full h-40 bg-linear-to-b from-transparent to-[#0C1D0D] rounded-3xl" />
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-24 bg-[#F6FFF7]">
        <div className="container mx-auto px-6">
          <ScrollAnimation className="text-center max-w-3xl mx-auto mb-16">
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
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Easy Book Appointment */}
            <ScrollAnimation delay={0.1}>
              <div className="bg-[#F3F4F6] p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-2">
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
            </ScrollAnimation>

            {/* Card 2: Phone Mockup (Center) */}
            <ScrollAnimation delay={0.2}>
              <div className="bg-[#F3F4F6] rounded-3xl overflow-hidden relative group hover:shadow-xl transition-all duration-300 flex items-end justify-center pt-10 cursor-pointer hover:-translate-y-2">
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
            </ScrollAnimation>

            {/* Card 3: Digital Health Report */}
            <ScrollAnimation delay={0.3}>
              <div className="bg-[#F3F4F6] p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-2">
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
            </ScrollAnimation>

            {/* Card 4: Pharmacy */}
            <ScrollAnimation delay={0.1}>
              <div className="bg-[#F3F4F6] p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-2">
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
            </ScrollAnimation>

            {/* Card 5: AI Powered */}
            <ScrollAnimation delay={0.2}>
              <div className="bg-[#F3F4F6] p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-2">
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
            </ScrollAnimation>

            {/* Card 6: Secured & Encrypted */}
            <ScrollAnimation delay={0.3}>
              <div className="bg-[#F3F4F6] p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-2">
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
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Innovation & Technology Focus Section */}
      <section id="about" className="py-24 bg-[#F6FFF7]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <ScrollAnimation className="space-y-8">
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
            </ScrollAnimation>

            {/* Right Column - Image */}
            <ScrollAnimation delay={0.2} className="relative bg-gray-50 rounded-[2.5rem]  flex items-center justify-center">
              {/* Using pamcare-hero-grid.png as it likely contains the multiple phones view or similar */}
              <Image
                src="/about.png"
                alt="PamCare App Interface Showcase"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <ScrollAnimation>
            <div className="bg-gradient-to-br from-[#4CAF50] to-[#45A049] rounded-[2.5rem] p-12 md:p-16 flex flex-col items-center justify-center text-center shadow-xl">
              {/* QR Code */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-2xl mb-6 shadow-lg"
              >
                <Image
                  src="/qr_code.png"
                  alt="Download App QR Code"
                  width={120}
                  height={120}
                  className="w-28 h-28 md:w-32 md:h-32"
                />
              </motion.div>

              {/* Download Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-white text-lg md:text-xl font-medium mb-8 max-w-md"
              >
                Scan to download App on the
                <br />
                <span className="font-bold">Playstore and Appstore</span>
              </motion.p>

              {/* App Store Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 items-center justify-center"
              >
                {/* Google Play Button */}
                <Link
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg min-w-[180px]"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </Link>

                {/* App Store Button */}
                <Link
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg min-w-[180px]"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

    </div >
  );
}
