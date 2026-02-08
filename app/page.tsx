import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-4 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left relative z-10">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              <span className="text-teal-500">Modular EHR</span> Software
              <br />
              Built for Your Practice
            </h1>
            <p className="mx-auto lg:mx-0 mt-6 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
              Choose the features you need. Scale as you grow. From basic patient management to AI integration, Aunova builds Electronic Health Record software that adapts to your unique requirements.
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6">
              <Link
                href="/contact"
                className="rounded-full bg-teal-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-teal-600"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="rounded-full border-2 border-teal-500 px-8 py-4 text-lg font-semibold text-teal-500 transition hover:bg-teal-50"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Image - large, no frame, no fade */}
          <div className="relative h-[550px] lg:h-[700px]">
            <Image
              src="/hero-africa.jpg"
              alt="Healthcare technology connecting Africa"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
