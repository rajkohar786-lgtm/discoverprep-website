import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo / Brand */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="DiscoverPrep Logo"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <span className="text-white font-semibold text-lg">DiscoverPrep</span>
            </div>

            {/* Copyright */}
            <p className="text-slate-500 text-sm">
              &copy; 2026 Kohar Inc.
            </p>
          </div>
        </div>
    </footer>
  );
}
