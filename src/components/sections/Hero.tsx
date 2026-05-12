import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark bg-blend-overlay"
      style={{
        backgroundImage: "url('/images/building-exterior.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background pattern */}
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

      {/* Gradient overlays */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-44">
        <div className="max-w-3xl">
          <span className="inline-block bg-white/10 text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            Memphis-Based HVAC Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Precision-Built.
            <br />
            <span className="text-accent-light">Plug-and-Play Cooling.</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl">
            Modular HVAC systems fabricated in our Memphis facility and
            installed on-site — fast, reliable, and built to your exact
            specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="secondary" size="lg">
              Get a Free Quote
            </Button>
            <Button href="/how-it-works" variant="outline" size="lg">
              <span className="text-white border-white hover:text-primary">
                See How It Works →
              </span>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "500+", label: "Projects Completed" },
            { value: "48hr", label: "Average Install Time" },
            { value: "100%", label: "Satisfaction Rate" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="text-2xl md:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-blue-200 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
