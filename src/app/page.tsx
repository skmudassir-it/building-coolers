import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import CTABanner from "@/components/sections/CTABanner";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const whyChooseFeatures = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Factory-Built Quality",
    description:
      "Every component is precision-fabricated in our Memphis facility under controlled conditions — no weather delays, no jobsite compromises.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Faster Installation",
    description:
      "Plug-and-play design means most systems are up and running within 48 hours — not weeks. Minimal disruption to your business.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Cost-Effective",
    description:
      "Shop fabrication eliminates expensive on-site labor and rework. You get commercial-grade cooling at a price that makes sense.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Memphis-Local",
    description:
      "Based right here in Memphis, we know the Mid-South climate. Fast response, local support, and a team that's part of your community.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <ServicesOverview />

      {/* Why Choose Us */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Choose Us"
            title="Built Better. Installed Faster."
            description="We do things differently — and that difference shows in every project we deliver."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {whyChooseFeatures.map((feature) => (
              <Card key={feature.title} hover className="text-center">
                <div className="w-14 h-14 bg-surface rounded-xl flex items-center justify-center mb-5 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-light leading-relaxed text-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
