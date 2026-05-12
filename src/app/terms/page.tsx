import SectionHeading from "@/components/ui/SectionHeading";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the Building Coolers LLC website (\"Site\") and services, you agree to be bound by these Terms and Conditions (\"Terms\"). If you do not agree to all of these Terms, you may not access the Site or use our services. These Terms constitute a legally binding agreement between you and Building Coolers LLC, a Tennessee limited liability company.",
  },
  {
    id: "definitions",
    title: "2. Definitions",
    content:
      "\"Company,\" \"we,\" \"us,\" or \"our\" refers to Building Coolers LLC. \"Client,\" \"you,\" or \"your\" refers to the individual or entity accessing our Site or engaging our services. \"Services\" refers to modular HVAC fabrication, delivery, installation, maintenance, and related consulting provided by the Company. \"Project\" refers to any specific scope of work agreed upon between the Company and Client.",
  },
  {
    id: "services",
    title: "3. Services and Scope of Work",
    content:
      "All services are provided subject to a separate written agreement, statement of work, or approved proposal outlining the specific scope, timeline, deliverables, and pricing. The Company reserves the right to modify, suspend, or discontinue any service offering at its discretion. Estimates and quotes are valid for 30 days from issuance unless otherwise stated. Final pricing is contingent upon site assessment and may be adjusted based on conditions not apparent during initial consultation.",
  },
  {
    id: "payment",
    title: "4. Payment Terms",
    content:
      "Payment terms are specified in each project agreement. Standard terms require a deposit upon contract signing, progress payments at defined milestones, and final payment upon substantial completion and commissioning. All invoices are due net 30 days from date of issuance unless otherwise agreed in writing. Late payments accrue interest at the rate of 1.5% per month or the maximum permitted by law. Client is responsible for all applicable taxes, permits, and fees.",
  },
  {
    id: "warranty",
    title: "5. Warranty and Limitation of Liability",
    content:
      "The Company warrants that all fabricated systems will be free from defects in materials and workmanship for a period of one (1) year from date of substantial completion, under normal use and maintenance. THIS WARRANTY IS EXCLUSIVE AND IN LIEU OF ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. The Company's total liability for any claim arising out of services shall not exceed the total fees paid by Client for the specific project giving rise to the claim. In no event shall the Company be liable for indirect, consequential, incidental, special, or punitive damages.",
  },
  {
    id: "ip",
    title: "6. Intellectual Property",
    content:
      "All designs, drawings, specifications, calculations, methodologies, and technical documentation developed by the Company in connection with a project remain the intellectual property of the Company, unless otherwise agreed in writing. Client receives a non-exclusive, perpetual license to use such materials solely in connection with the operation and maintenance of the installed system. The Company retains the right to use project imagery and descriptions for portfolio and marketing purposes, subject to reasonable confidentiality requests.",
  },
  {
    id: "termination",
    title: "7. Termination",
    content:
      "Either party may terminate a project agreement upon 30 days' written notice if the other party materially breaches these Terms and fails to cure such breach within the notice period. Upon termination, Client shall pay for all work performed through the date of termination, including materials procured, labor expended, and reasonable demobilization costs. The Company may terminate or suspend access to the Site immediately for any violation of these Terms without prior notice.",
  },
  {
    id: "indemnification",
    title: "8. Indemnification",
    content:
      "Client agrees to indemnify, defend, and hold harmless Building Coolers LLC, its officers, employees, and subcontractors from and against any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from: Client's breach of these Terms; Client's negligent or wrongful acts or omissions; or Client's violation of applicable laws or regulations in connection with the project.",
  },
  {
    id: "force-majeure",
    title: "9. Force Majeure",
    content:
      "Neither party shall be liable for delays or failure to perform caused by circumstances beyond its reasonable control, including but not limited to acts of God, natural disasters, fire, flood, severe weather, war, terrorism, riot, civil unrest, government action, epidemic, pandemic, labor disputes, supply chain disruptions, or utility failures. The affected party shall notify the other promptly and use reasonable efforts to resume performance.",
  },
  {
    id: "disputes",
    title: "10. Dispute Resolution",
    content:
      "Any dispute arising from or relating to these Terms or any project agreement shall first be submitted to informal negotiation between the parties in good faith. If the dispute is not resolved within 30 days, the parties agree to mediate in Shelby County, Tennessee, before a mutually agreed mediator. If mediation is unsuccessful, the dispute shall be resolved by binding arbitration in accordance with the rules of the American Arbitration Association. Each party bears its own costs, and the parties share mediator/arbitrator fees equally.",
  },
  {
    id: "governing-law",
    title: "11. Governing Law",
    content:
      "These Terms and any agreements entered into pursuant to them shall be governed by and construed in accordance with the laws of the State of Tennessee, without regard to its conflict of law principles. The parties irrevocably submit to the exclusive jurisdiction of the state and federal courts located in Shelby County, Tennessee, for any action to enforce an arbitration award or seek injunctive relief.",
  },
  {
    id: "general",
    title: "12. General Provisions",
    content:
      "These Terms, together with any project-specific agreement, constitute the entire understanding between the parties and supersede all prior agreements. No waiver of any provision shall be deemed a continuing waiver. If any provision is found unenforceable, the remaining provisions shall remain in full force and effect. The Company may assign these Terms without Client's consent; Client may not assign without prior written consent. Notices shall be in writing and delivered to the addresses specified in the project agreement or as updated by either party.",
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Legal"
            title="Terms & Conditions"
            description="Effective Date: January 1, 2026. Please read these terms carefully before using our services."
            light
          />
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-10">
            {sections.map((section) => (
              <div key={section.id}>
                <h2 className="text-xl font-bold text-text mb-3">
                  {section.title}
                </h2>
                <p className="text-text-light leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-12 p-6 bg-surface rounded-xl border border-gray-100 text-center">
            <p className="text-sm text-text-light">
              For questions about these Terms, contact us at{" "}
              <a
                href="mailto:legal@buildingcoolers.com"
                className="text-accent hover:underline font-medium"
              >
                legal@buildingcoolers.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+19015551234"
                className="text-accent hover:underline font-medium"
              >
                (901) 555-1234
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
