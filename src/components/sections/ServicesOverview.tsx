import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

const services = [
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
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    title: "Modular Duct Fabrication",
    description:
      "Precision-engineered duct systems built in our Memphis shop. Custom sizes, pre-insulated options, and rapid turnaround.",
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
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    title: "Movable Cooling Units",
    description:
      "Plug-and-play modular AC units. Deliver, position, connect — no heavy construction. Perfect for retrofits and temporary needs.",
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
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "On-Site Installation",
    description:
      "Our certified team handles the full install — delivery, placement, connections, testing. Minimal disruption to your operations.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Services"
          title="Modular HVAC, Built Different"
          description="We fabricate in our shop and install on your site — saving time, reducing on-site labor, and ensuring consistent quality."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {services.map((service) => (
            <Card key={service.title} hover>
              <div className="w-14 h-14 bg-surface rounded-xl flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-text mb-3">
                {service.title}
              </h3>
              <p className="text-text-light leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-primary transition-colors"
          >
            View All Services
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
