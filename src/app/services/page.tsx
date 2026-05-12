import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";

const services = [
  {
    emoji: "🔧",
    title: "Modular Duct Fabrication",
    subtitle: "Precision-built in our Memphis shop, delivered ready to install.",
    description:
      "Our core service: custom duct systems fabricated in a controlled shop environment using premium materials and precision tooling. Every section is measured, cut, assembled, and tested before it ever leaves our facility. The result is a duct system that fits perfectly, installs in hours instead of days, and delivers superior airflow performance.",
    features: [
      "Custom sizes and configurations to match any building layout",
      "Pre-insulated options with closed-cell foam or fiberglass wraps",
      "Galvanized steel construction with fully welded seams",
      "Fast turnaround — typical fabrication in 3-5 business days",
      "Quality-checked and pressure-tested before delivery",
    ],
  },
  {
    emoji: "❄️",
    title: "Movable Cooling Units",
    subtitle: "Plug-and-play AC that moves where you need it.",
    description:
      "Our movable cooling units are a game-changer for commercial spaces. Factory-built and fully self-contained, these modular AC units are delivered to your site, positioned, and connected — with minimal disruption to your operations. Need to reconfigure your space next year? No problem: our units are designed to be relocated and reconnected without major construction.",
    features: [
      "Factory-assembled and tested — true plug-and-play operation",
      "Modular design allows scaling from single rooms to entire floors",
      "Ideal for retrofits, tenant improvements, and temporary cooling",
      "Relocatable: move units as your floor plan changes",
      "Available in multiple tonnage capacities to match your load",
    ],
  },
  {
    emoji: "⚙️",
    title: "On-Site Installation",
    subtitle: "Certified teams, minimal downtime, full commissioning.",
    description:
      "Fabrication is only half the equation. Our certified installation crews handle everything from delivery logistics to final testing. Because our components are pre-fabricated, on-site work is dramatically faster than traditional methods. Most installations are completed in 48 hours or less, and our teams are trained to work around your schedule to minimize business disruption.",
    features: [
      "OSHA-certified installation crews with HVAC credentials",
      "Full delivery coordination — crane, lift, and rigging if needed",
      "Minimal on-site cutting, welding, or fabrication",
      "Complete system testing and commissioning before handoff",
      "Post-installation walkthrough and documentation provided",
    ],
  },
];

const maintenanceFeatures = [
  "Quarterly filter replacement and coil cleaning",
  "Refrigerant level checks and leak detection",
  "Electrical connection inspection and torque verification",
  "Airflow and static pressure testing with report",
  "Priority scheduling and emergency response within 4 hours",
  "Annual system efficiency audit and optimization recommendations",
];

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Modular HVAC Services
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
              From fabrication to installation, we handle every step of your
              commercial cooling project — built in our Memphis shop, installed
              on your site.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, i) => (
        <section
          key={service.title}
          className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Icon / Visual */}
              <div
                className={`flex justify-center ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="w-48 h-48 bg-surface rounded-3xl flex items-center justify-center border border-surface-dark shadow-inner">
                  <span className="text-7xl">{service.emoji}</span>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                  Service
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">
                  {service.title}
                </h2>
                <p className="text-lg text-accent font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-text-light leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <h3 className="font-semibold text-text text-sm uppercase tracking-wider">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-accent mt-0.5 shrink-0"
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
                        <span className="text-text-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Button href="/contact" variant="primary" size="md">
                    Inquire About {service.title}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Maintenance Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Ongoing Care"
            title="Maintenance Plans"
            description="Keep your modular system running at peak efficiency with our comprehensive maintenance programs. Regular service extends equipment life, prevents costly breakdowns, and ensures your space stays comfortable year-round."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {maintenanceFeatures.map((feature) => (
              <Card key={feature} hover>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-accent"
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
                  </div>
                  <span className="text-text">{feature}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-text-light mb-6">
              Plans available for quarterly, bi-annual, or annual service
              schedules. Custom plans available for multi-unit facilities.
            </p>
            <Button href="/contact" variant="outline" size="lg">
              Learn About Maintenance Plans
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
