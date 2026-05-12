import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";

const products = [
  {
    emoji: "📐",
    name: "Modular Duct Sections",
    description:
      "Pre-fabricated duct segments built to your specifications in our Memphis shop. Every section arrives labeled, quality-checked, and ready for rapid on-site assembly.",
    features: [
      "Custom lengths from 2 to 12 feet",
      "Galvanized steel, fully welded seams",
      "Available with or without insulation",
      "Pre-drilled connection flanges",
    ],
  },
  {
    emoji: "🏗️",
    name: "Movable AC Units",
    description:
      "Self-contained portable cooling towers that deliver commercial-grade cooling wherever you need it. Simply position, connect power, and turn it on.",
    features: [
      "5 to 50 ton capacity options",
      "Integrated duct connection ports",
      "Weather-resistant outdoor enclosures",
      "Casters or fork pockets for easy relocation",
    ],
  },
  {
    emoji: "📦",
    name: "Pre-Insulated Duct Kits",
    description:
      "All-in-one kits with everything needed for a complete duct run: insulated sections, connectors, hangers, and hardware. Ideal for new builds and major retrofits.",
    features: [
      "Closed-cell foam insulation, R-8 rated",
      "Sections numbered for fast assembly",
      "Includes all fittings, elbows, and reducers",
      "Detailed installation guide included",
    ],
  },
  {
    emoji: "🟦",
    name: "Custom Plenum Boxes",
    description:
      "Fabricated-to-spec plenum boxes that integrate seamlessly with your air handler and duct runs. Built from the same premium materials as our duct sections.",
    features: [
      "Any dimension up to 8×8×4 feet",
      "Gasketed access panels included",
      "Acoustic lining available",
      "Multiple take-off collar configurations",
    ],
  },
  {
    emoji: "🔗",
    name: "Quick-Connect Fittings",
    description:
      "Proprietary quick-connect system that eliminates on-site welding and reduces assembly time by up to 70%. Tool-less locking mechanism for secure, air-tight joints.",
    features: [
      "Tool-less clamp-and-lock design",
      "EPDM gaskets for air-tight seal",
      "Compatible with all duct section sizes",
      "Reusable — reposition as needed",
    ],
  },
  {
    emoji: "🌬️",
    name: "Modular VAV Boxes",
    description:
      "Variable air volume boxes built into a modular form factor. Factory-calibrated and tested, these units provide precise zone-level temperature control.",
    features: [
      "Pressure-independent operation",
      "Factory-calibrated DDC controls ready",
      "Integral reheat coil options",
      "Quiet operation — below NC-35",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25px 25px, white 2px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              Our Products
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Modular HVAC Products
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
              Factory-built cooling components that arrive ready to install.
              Every product is fabricated in our Memphis facility with precision
              tooling and premium materials.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Product Line"
            title="Built in Our Shop. Installed on Your Site."
            description="From individual duct sections to complete movable cooling units, every product is designed for fast installation, reliable performance, and easy reconfiguration."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {products.map((product) => (
              <Card key={product.name} hover>
                {/* Icon */}
                <div className="w-14 h-14 bg-surface rounded-xl flex items-center justify-center mb-5 text-2xl">
                  {product.emoji}
                </div>

                {/* Name & Description */}
                <h3 className="text-xl font-bold text-text mb-2">
                  {product.name}
                </h3>
                <p className="text-text-light leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 border-t border-gray-100 pt-4">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg
                        className="w-4 h-4 text-accent mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-text-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="Need Something Custom?"
              title="We Build to Your Specs"
              description="Don't see exactly what you need? Our engineering team specializes in custom fabrication. We'll work with your drawings or develop a solution from your requirements."
            />
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Request a Custom Quote
              </Button>
              <Button href="/how-it-works" variant="outline" size="lg">
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
