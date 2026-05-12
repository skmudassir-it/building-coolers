import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";

const values = [
  {
    emoji: "🏆",
    title: "Quality First",
    description:
      "Every duct section and cooling unit is built to exacting standards in our Memphis shop. We use premium galvanized steel, precision welding, and industry-best insulation materials to ensure every component performs flawlessly for years.",
  },
  {
    emoji: "💡",
    title: "Innovation",
    description:
      "We don't just follow industry trends — we set them. Our modular approach to HVAC was born from asking a simple question: why build everything on-site when you can fabricate with precision in a controlled environment?",
  },
  {
    emoji: "🤝",
    title: "Customer Partnership",
    description:
      "We treat every project as a collaboration. From initial consultation through final commissioning, our engineers and installers work side-by-side with your team to ensure the solution fits your space, budget, and timeline perfectly.",
  },
  {
    emoji: "🏙️",
    title: "Memphis Proud",
    description:
      "Founded and headquartered in Memphis, Tennessee, we're committed to our community. We hire local talent, partner with regional suppliers, and take pride in bringing world-class HVAC innovation to the Mid-South and beyond.",
  },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              About Building Coolers LLC
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
              Fifteen years of HVAC innovation, thousands of successful
              installations, and one simple mission: make commercial cooling
              smarter, faster, and more reliable.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                label="Our Story"
                title="From a Small Shop to a Full-Scale Modular Facility"
                description="What started as a two-person operation in a Memphis garage has grown into a leading modular HVAC fabrication and installation company serving the Mid-South and beyond."
                align="left"
              />
              <div className="mt-6 space-y-4 text-text-light leading-relaxed">
                <p>
                  In 2009, our founder — a veteran HVAC engineer — saw a problem:
                  on-site duct fabrication was slow, inconsistent, and disruptive
                  to businesses. Why not build duct systems and cooling units in a
                  controlled shop environment, then install them quickly on-site?
                </p>
                <p>
                  That simple insight launched Building Coolers LLC. Over the
                  next 15+ years, we refined our modular approach, invested in
                  state-of-the-art fabrication equipment, and assembled a team of
                  the most skilled technicians and installers in the region.
                </p>
                <p>
                  Today, our Memphis facility produces precision-engineered duct
                  sections, movable cooling units, and custom HVAC components
                  that ship to commercial sites across Tennessee, Arkansas,
                  Mississippi, and beyond. We've completed over 500 projects, and
                  every single one has reinforced our belief that modular is the
                  future of HVAC.
                </p>
              </div>
            </div>
            <div className="bg-surface rounded-2xl p-10 border border-surface-dark">
              <div className="space-y-8">
                {[
                  { value: "15+", label: "Years in Business" },
                  { value: "500+", label: "Projects Completed" },
                  { value: "48hr", label: "Average Install Time" },
                  { value: "100%", label: "Client Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-5">
                    <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-xl">
                        {stat.value}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-text text-lg">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Mission
          </span>
          <blockquote className="text-2xl md:text-3xl font-bold text-text leading-relaxed italic">
            &ldquo;To revolutionize commercial HVAC with modular, plug-and-play
            solutions that save time, reduce costs, and deliver consistent
            quality.&rdquo;
          </blockquote>
          <p className="mt-6 text-text-light max-w-2xl mx-auto leading-relaxed">
            Every decision we make — from material sourcing to installation
            protocols — is guided by this mission. We believe that HVAC doesn't
            have to be disruptive, expensive, or unpredictable. Modular changes
            everything.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="What Drives Every Project"
            description="Four principles that shape how we work, what we build, and how we serve our clients."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            {values.map((value) => (
              <Card key={value.title} hover>
                <div className="flex gap-5">
                  <div className="text-4xl shrink-0">{value.emoji}</div>
                  <div>
                    <h3 className="text-xl font-bold text-text mb-3">
                      {value.title}
                    </h3>
                    <p className="text-text-light leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team & CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="Our Team"
              title="Skilled Hands, Sharp Minds"
              description="From our shop floor fabricators to our field installation crews, every member of the Building Coolers team is committed to one thing: getting your cooling right the first time."
            />
            <p className="mt-6 text-text-light leading-relaxed">
              We invest heavily in training and certification. Our technicians
              hold industry-leading credentials, and our engineers stay ahead of
              evolving HVAC codes and energy-efficiency standards. When you work
              with Building Coolers, you're getting a team that treats your
              project like it's their own facility.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Meet Our Team — Get Started
              </Button>
              <Button href="/projects" variant="outline" size="lg">
                View Our Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
