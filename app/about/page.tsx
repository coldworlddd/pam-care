export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            About Pamcare AI
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Revolutionizing healthcare with intelligent AI assistance for
            Malaria, Pregnancy, and Arthritis care.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Pamcare AI, we believe that quality healthcare should be
                accessible to everyone, everywhere. Our mission is to leverage
                the power of Artificial Intelligence to provide accurate,
                timely, and personalized health guidance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We focus on three critical areas affecting millions worldwide:
                Malaria prevention and management, Pregnancy support, and
                Arthritis care. By combining medical expertise with cutting-edge
                technology, we empower you to take control of your health.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
              <span className="text-gray-400">Mission Image Placeholder</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Pregnancy Care
              </h3>
              <p className="text-gray-600">
                Comprehensive support for expectant mothers, tracking milestones
                and providing expert advice throughout the journey.
              </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Malaria Support
              </h3>
              <p className="text-gray-600">
                Early detection tools, symptom tracking, and immediate guidance
                on treatment protocols for Malaria management.
              </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Arthritis Management
              </h3>
              <p className="text-gray-600">
                Daily pain tracking, exercise recommendations, and lifestyle
                adjustments to help manage Arthritis effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
