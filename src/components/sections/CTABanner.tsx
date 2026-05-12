import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
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

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Cool Smarter?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Get a custom quote for your modular HVAC project. We'll assess your
          needs and deliver a solution that fits your timeline and budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="secondary" size="lg">
            Get Your Free Quote
          </Button>
          <Button
            href="tel:+19015551234"
            variant="outline"
            size="lg"
          >
            <span className="text-white border-white hover:text-primary">
              Call (901) 555-1234
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
