import Link from "next/link";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found on techHind.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0b1c33]">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-[#00823b] hover:bg-[#00662e] text-white rounded-xl font-bold transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/pricing"
            className="px-6 py-3 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
          >
            View Pricing
          </Link>
          <Link
            href="/#faq"
            className="px-6 py-3 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
          >
            Read FAQ
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
