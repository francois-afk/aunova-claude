import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-white px-4 md:px-6 py-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-4 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
              <span className="text-teal-500">Modular EHR</span> Software
              <br />
              Built for Your Practice
            </h1>
            <p className="mx-auto lg:mx-0 mt-4 md:mt-6 max-w-2xl text-base md:text-lg lg:text-xl leading-7 md:leading-8 text-gray-600">
              Choose the features you need. Scale as you grow. From basic patient management to AI integration, Aunova builds Electronic Health Record software that adapts to your unique requirements.
            </p>
            <div className="mt-6 md:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-full bg-teal-500 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white shadow-lg transition hover:bg-teal-600 text-center"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto rounded-full border-2 border-teal-500 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-teal-500 transition hover:bg-teal-50 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]">
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
