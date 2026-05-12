import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import CTABanner from "@/components/sections/CTABanner";

const projects = [
  {
    name: "Riverfront Data Center",
    location: "Memphis, TN",
    description:
      "Modular duct system with redundant cooling for a 12,000 sq ft Tier III data center. Delivered and commissioned in 3 weeks.",
    gradient: "from-primary to-accent",
  },
  {
    name: "Midtown Medical Offices",
    location: "Memphis, TN",
    description:
      "Movable cooling units for a multi-tenant medical building. Plug-and-play design allows rapid reconfiguration between tenants.",
    gradient: "from-primary-light to-accent-light",
  },
  {
    name: "Southaven Logistics Hub",
    location: "Southaven, MS",
    description:
      "Pre-fab roof-mounted cooling package for a 40,000 sq ft warehouse. Designed for quick installation during a tight holiday shutdown window.",
    gradient: "from-accent to-cool",
  },
  {
    name: "Germantown Corporate HQ",
    location: "Germantown, TN",
    description:
      "Custom modular AHU solution integrated with existing building automation. Zero downtime during switchover.",
    gradient: "from-cool to-primary-light",
  },
  {
    name: "Downtown Mixed-Use Tower",
    location: "Memphis, TN",
    description:
      "Floor-by-floor modular cooling for a 14-story mixed-use building. Each floor operates independently for maximum efficiency.",
    gradient: "from-primary to-primary-light",
  },
  {
    name: "Bartlett School District",
    location: "Bartlett, TN",
    description:
      "Movable cooling units for portable classrooms across 5 campuses. Quick deployment during summer renovation window.",
    gradient: "from-accent-light to-cool",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Portfolio"
            title="Our Projects"
            description="Real modular HVAC installations across the Mid-South. Every project is a partnership — built for the long haul."
            light
          />
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} hover className="p-0 overflow-hidden flex flex-col">
                {/* Image placeholder with gradient */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 20px 20px, white 1px, transparent 0)",
                        backgroundSize: "30px 30px",
                      }}
                    />
                  </div>
                  <span className="text-white/60 text-lg font-semibold tracking-wider">
                    PROJECT IMAGE
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs font-medium text-accent uppercase tracking-wider mb-2">
                    <span>📍</span>
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-text mb-3">
                    {project.name}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "12", label: "Years in Business" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "5 States", label: "Service Area" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-text-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
