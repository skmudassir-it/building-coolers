import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";

const steps = [
  {
    number: 1,
    emoji: "📋",
    title: "Consultation",
    description:
      "We start by understanding your space, cooling requirements, budget, and timeline. Our team conducts a thorough assessment — on-site or remote — to scope the right modular solution for your building.",
  },
  {
    number: 2,
    emoji: "🔧",
    title: "Fabrication",
    description:
      "Once the design is approved, our skilled technicians build your modular HVAC system in our Memphis fabrication facility. Every component is precision-cut, assembled, and quality-tested before it leaves the shop.",
    image: "/images/facility-workshop.jpg",
    imageAlt: "Clean modern workshop with ductwork on workbenches",
  },
  {
    number: 3,
    emoji: "🚛",
    title: "Delivery",
    description:
      "We transport the pre-fabricated units directly to your site. Because the system is modular, transport is efficient and the units arrive ready for immediate installation — no on-site cutting or assembly required.",
    image: "/images/delivery-truck.jpg",
    imageAlt: "Truck with cooling units being unloaded",
  },
  {
    number: 4,
    emoji: "✅",
    title: "Installation",
    description:
      "Our certified installers connect, test, and commission your system on-site. We verify performance, walk you through operation, and ensure everything is running at peak efficiency before we hand over the keys.",
    image: "/images/technician-install.jpg",
    imageAlt: "Technician performing HVAC installation",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Process"
            title="How It Works"
            description="Four simple steps from consultation to cooling — delivered with precision, installed with care."
            light
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical connector line (desktop) */}
            <div className="hidden md:block absolute left-10 top-0 bottom-0 w-px bg-accent/30" />

            <div className="space-y-16 md:space-y-20">
              {steps.map((step) => (
                <div key={step.number} className="relative flex flex-col md:flex-row gap-6 md:gap-10">
                  {/* Number badge */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                      <span className="text-white text-3xl">{step.emoji}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-sm font-bold shadow-md">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-surface rounded-xl p-6 md:p-8 border border-gray-100">
                    <h3 className="text-xl md:text-2xl font-bold text-text mb-3 flex items-center gap-3">
                      <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                        Step {step.number}
                      </span>
                      <span className="hidden md:inline text-text-light">|</span>
                      <span>{step.title}</span>
                    </h3>
                    <p className="text-text-light leading-relaxed text-base md:text-lg">
                      {step.description}
                    </p>
                    {step.image && (
                      <div className="mt-4">
                        <Image
                          src={step.image}
                          alt={step.imageAlt || step.title}
                          width={800}
                          height={400}
                          className="rounded-lg w-full object-cover max-h-64"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee / Trust */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-4">🏆</div>
          <h3 className="text-2xl font-bold text-text mb-4">
            Memphis-Built. Performance-Guaranteed.
          </h3>
          <p className="text-text-light max-w-2xl mx-auto leading-relaxed">
            Every system we deliver is fabricated under one roof and backed by our satisfaction
            guarantee. If it doesn't perform as promised, we make it right — no questions asked.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
