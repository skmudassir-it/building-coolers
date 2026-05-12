import SectionHeading from "@/components/ui/SectionHeading";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content:
      "Building Coolers LLC (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By accessing or using our website, you consent to the practices described in this policy.",
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content:
      "We may collect personal information that you voluntarily provide when you fill out a contact form, request a quote, or otherwise interact with our website. This may include your name, email address, phone number, company name, and project details. We also automatically collect certain technical information, such as your IP address, browser type, operating system, referring URLs, and pages visited, through standard web analytics tools.",
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content:
      "We use the information we collect to: respond to your inquiries and provide quotes; deliver, maintain, and improve our services; send you project updates, estimates, and relevant communications; analyze website usage to enhance user experience; comply with legal obligations; and protect against fraudulent or unauthorized activity. We do not sell, rent, or lease your personal information to third parties.",
  },
  {
    id: "sharing",
    title: "4. Information Sharing and Disclosure",
    content:
      "We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing your project — provided those parties agree to keep your information confidential. We may also disclose information when required by law, to enforce our site policies, or to protect our rights, property, or safety. In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.",
  },
  {
    id: "cookies",
    title: "5. Cookies and Tracking Technologies",
    content:
      "Our website may use cookies, web beacons, and similar tracking technologies to enhance your browsing experience and collect analytical data. Cookies are small text files stored on your device that help us remember your preferences and understand how you interact with our site. You can control cookie settings through your browser preferences. Disabling cookies may affect certain features of our website.",
  },
  {
    id: "data-security",
    title: "6. Data Security",
    content:
      "We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encrypted data transmission (SSL/TLS), access controls, and regular security assessments. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    id: "data-retention",
    title: "7. Data Retention",
    content:
      "We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law. When your information is no longer needed, we will securely delete or anonymize it in accordance with our data retention policies.",
  },
  {
    id: "your-rights",
    title: "8. Your Rights",
    content:
      "Depending on your jurisdiction, you may have the right to: access the personal information we hold about you; request correction of inaccurate information; request deletion of your information; object to or restrict certain processing activities; and withdraw consent where processing is based on consent. To exercise these rights, please contact us using the information below. We will respond to your request within the timeframes required by applicable law.",
  },
  {
    id: "third-party-links",
    title: "9. Third-Party Links",
    content:
      "Our website may contain links to third-party websites or services that are not owned or controlled by Building Coolers LLC. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.",
  },
  {
    id: "children",
    title: "10. Children's Privacy",
    content:
      "Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information promptly.",
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    content:
      "We reserve the right to update or modify this Privacy Policy at any time. Changes will be posted on this page with an updated effective date. Your continued use of our website after any modifications constitutes acceptance of the revised policy. We encourage you to review this page periodically.",
  },
  {
    id: "contact",
    title: "12. Contact Us",
    content:
      "If you have questions, concerns, or wish to exercise your privacy rights, please reach out to us at: Building Coolers LLC, 1234 Precision Drive, Memphis, TN 38118. Phone: (901) 555-1234. Email: privacy@buildingcoolers.com. We take your privacy seriously and will address your inquiry promptly.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Legal"
            title="Privacy Policy"
            description="Effective Date: January 1, 2026. Your privacy matters — here's how we protect it."
            light
          />
        </div>
      </section>

      {/* Privacy Content */}
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
        </div>
      </section>
    </>
  );
}
