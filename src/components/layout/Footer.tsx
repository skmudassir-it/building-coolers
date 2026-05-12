import Link from "next/link";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services", label: "Modular Duct Systems" },
    { href: "/services", label: "Movable Cooling Units" },
    { href: "/services", label: "On-Site Installation" },
    { href: "/services", label: "Maintenance Plans" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo.png"
                alt="Building Coolers LLC"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="font-bold text-lg text-white">
                Building Coolers LLC
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Precision-Built. Plug-and-Play Cooling. Modular HVAC solutions
              fabricated in our Memphis facility and installed on-site across
              the region.
            </p>
            <p className="text-sm text-gray-500">Memphis, Tennessee</p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Memphis, TN</li>
              <li>
                📞{" "}
                <a
                  href="tel:+19015551234"
                  className="hover:text-accent transition-colors"
                >
                  (901) 555-1234
                </a>
              </li>
              <li>
                ✉️{" "}
                <a
                  href="mailto:info@buildingcoolers.com"
                  className="hover:text-accent transition-colors"
                >
                  info@buildingcoolers.com
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-gray-500 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Building Coolers LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
