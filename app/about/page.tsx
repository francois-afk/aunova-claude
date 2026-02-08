export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Why Aunova Section */}
      <section className="bg-teal-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Why Aunova?
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700 max-w-3xl mx-auto">
              Our clinician-led EHR design focuses on the real challenges faced by medical practitioners when capturing and accessing patient information. This inside perspective drives everything we build—ensuring our solutions actually work the way you need them to.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Clinician-Led Design",
                description: "Built by people who understand medical workflows firsthand",
                icon: "medical_services",
              },
              {
                title: "True Modularity",
                description: "Only pay for what you need, add features when you're ready",
                icon: "view_module",
              },
              {
                title: "Bespoke Solutions",
                description: "Your practice is unique—your EHR should be too",
                icon: "tune",
              },
              {
                title: "Simple to Use",
                description: "Intuitive interfaces designed for busy medical professionals",
                icon: "touch_app",
              },
              {
                title: "Highly Secure",
                description: "Your patient data is protected with industry-leading security standards",
                icon: "security",
              },
              {
                title: "Scales with You",
                description: "From solo practitioners to large clinics—grow as your practice expands",
                icon: "expand",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-500 text-white">
                  <span className="material-icons">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Modules Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Choose Your Modules
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Build your perfect EHR system with our modular approach
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Patient Information",
                description: "Secure capture and storage of patient data with easy access when you need it",
                icon: "assignment_ind",
                comingSoon: false,
              },
              {
                title: "AI Integration",
                description: "Leverage artificial intelligence for insights, diagnostics support, and workflow optimization",
                icon: "psychology",
                comingSoon: false,
              },
              {
                title: "Analytics",
                description: "View summarised statistics including patients seen, new vs recurring patients, frequent diagnoses, and clinic performance metrics",
                icon: "analytics",
                comingSoon: false,
              },
              {
                title: "Appointment Scheduling",
                description: "Streamline your scheduling with intelligent booking and reminder systems",
                icon: "event",
                comingSoon: false,
              },
              {
                title: "Custom Solutions",
                description: "Need something specific? We build custom modules tailored to your workflow",
                icon: "settings",
                comingSoon: false,
              },
              {
                title: "Billing Integration",
                description: "Seamlessly connect with billing systems for efficient financial management",
                icon: "payments",
                comingSoon: true,
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className={`relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md ${feature.comingSoon ? 'opacity-75' : ''}`}
              >
                {feature.comingSoon && (
                  <span className="absolute top-4 right-4 text-xs font-medium bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
                <span className="material-icons text-4xl text-teal-500">{feature.icon}</span>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scalable Approach Section */}
      <section className="bg-teal-500 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="material-icons text-5xl text-white mb-4">trending_up</span>
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            A Scalable Approach
          </h2>
          <p className="mt-4 text-lg text-teal-100">
            Start simple and add features as your practice grows. Our modular architecture means you're never locked into features you don't need—and you can expand seamlessly when you're ready.
          </p>
        </div>
      </section>
    </div>
  );
}
