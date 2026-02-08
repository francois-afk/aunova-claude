import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-white px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              <span className="text-orange-500">Modular EHR</span> Software
              <br />
              Built for Your Practice
            </h1>
            <p className="mx-auto lg:mx-0 mt-6 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
              Choose the features you need. Scale as you grow. From basic patient management to AI integration, Aunova builds Electronic Health Record software that adapts to your unique requirements.
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6">
              <Link
                href="/contact"
                className="rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="rounded-full border-2 border-orange-500 px-8 py-4 text-lg font-semibold text-orange-500 transition hover:bg-orange-50"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
              alt="Medical professional using digital healthcare software on tablet"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
