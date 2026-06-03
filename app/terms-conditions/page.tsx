import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Techhind Private Limited',
  description: 'Techhind Private Limited Terms & Conditions - Legal terms governing the use of our ERP platform, CRM software, and business integration services.',
  keywords: ['terms and conditions', 'legal terms', 'service agreement', 'Techhind terms'],
  alternates: {
    canonical: '/terms-conditions',
  },
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-[#0b1c33]">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms & Conditions
            </h1>
            <div className="text-gray-400 space-y-2">
              <p className="text-lg">Techhind Private Limited</p>
              <div className="flex justify-center space-x-6 text-sm">
                <span>Effective Date: 01 January 2026</span>
                <span>•</span>
                <span>Last Updated: 29 March 2026</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-[#0a1a2e] rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700/50">
            <div className="prose prose-invert max-w-none">
              <div className="text-gray-300 leading-relaxed space-y-6">
                
                <p className="text-lg font-medium text-gray-200">
                  Welcome to Techhind Private Limited ("Techhind", "Company", "we", "our", or "us").
                </p>

                <p className="text-lg font-medium text-gray-200">
                  These Terms & Conditions ("Terms") govern access to and use of:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>www.techhind.in</li>
                  <li>Techhind ERP platform</li>
                  <li>Techhind CRM software</li>
                  <li>API integrations</li>
                  <li>WhatsApp Business integrations</li>
                  <li>Meta Lead Ads integrations</li>
                  <li>related software services</li>
                </ul>

                <p className="text-lg font-medium text-[#00823b]">
                  By accessing or using our services, you agree to be bound by these Terms.
                </p>

                <p className="text-lg font-medium text-gray-200">
                  If you do not agree, please do not use our services.
                </p>

                <div className="space-y-8">
                  {/* Section 1 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Company Information</h2>
                    <p className="mb-4">
                      Techhind Private Limited is an Indian technology company providing ERP, CRM, workflow automation, and business integration software solutions.
                    </p>
                    <div className="bg-[#0f2942] rounded-lg p-4">
                      <p className="font-semibold text-white mb-2">Registered Office:</p>
                      <p className="text-gray-300">Techhind Private Limited</p>
                      <p className="text-gray-300">Vijapur, Gujarat, India</p>
                      <p className="font-semibold text-white mt-4 mb-2">Contact Email:</p>
                      <p className="text-[#00823b]">support@techhind.in</p>
                    </div>
                  </section>

                  {/* Section 2 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. Services Provided</h2>
                    <p className="mb-4">
                      Techhind provides software services including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>ERP software solutions</li>
                      <li>CRM systems</li>
                      <li>lead management automation</li>
                      <li>Meta Lead Ads integrations</li>
                      <li>WhatsApp Business integrations</li>
                      <li>workflow automation tools</li>
                      <li>reporting dashboards</li>
                      <li>enterprise API connectivity</li>
                    </ul>
                    <p className="mt-4">
                      Services may be hosted:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>on Techhind infrastructure</li>
                      <li>on client infrastructure</li>
                      <li>on third-party cloud providers</li>
                    </ul>
                    <p className="mt-4">
                      depending on agreement with the client.
                    </p>
                  </section>

                  {/* Section 3 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">3. Eligibility</h2>
                    <p className="mb-4">
                      You must be at least 18 years old to use our services.
                    </p>
                    <p className="mb-4">By using our platform, you confirm:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>you are legally capable of entering a contract</li>
                      <li>your organization is authorized to use business software tools</li>
                      <li>information provided is accurate</li>
                    </ul>
                  </section>

                  {/* Section 4 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">4. Account Registration Responsibilities</h2>
                    <p className="mb-4">Users are responsible for:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>maintaining login confidentiality</li>
                      <li>protecting passwords</li>
                      <li>restricting unauthorized access</li>
                      <li>ensuring accuracy of account information</li>
                    </ul>
                    <p className="mt-4 text-[#00823b]">
                      Techhind is not liable for losses resulting from unauthorized account use.
                    </p>
                  </section>

                  {/* Section 5 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">5. Acceptable Use Policy</h2>
                    <p className="mb-4">Users agree NOT to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>misuse the platform</li>
                      <li>upload unlawful content</li>
                      <li>transmit malware</li>
                      <li>attempt unauthorized access</li>
                      <li>interfere with system operations</li>
                      <li>reverse engineer software</li>
                      <li>scrape platform data</li>
                      <li>violate Meta or WhatsApp platform policies</li>
                    </ul>
                    <p className="mt-4 text-[#00823b]">
                      Violation may result in suspension or termination of access.
                    </p>
                  </section>

                  {/* Section 6 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">6. Meta Platform Integrations</h2>
                    <p className="mb-4">
                      Techhind integrates with Meta platforms including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Facebook Lead Ads</li>
                      <li>Instagram Lead Ads</li>
                    </ul>
                    <p className="mt-4">When using these integrations:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>lead data belongs to the advertiser</li>
                      <li>Techhind processes data only as a technology provider</li>
                      <li>Techhind does not sell Meta lead data</li>
                      <li>usage must comply with Meta Platform Terms</li>
                    </ul>
                    <p className="mt-4">
                      Users are responsible for ensuring lawful use of lead data.
                    </p>
                  </section>

                  {/* Section 7 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">7. WhatsApp Business Integration</h2>
                    <p className="mb-4">
                      Techhind provides automation integrations with WhatsApp Business APIs.
                    </p>
                    <p className="mb-4">Users agree:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>messaging must follow WhatsApp Business policies</li>
                      <li>spam messaging is prohibited</li>
                      <li>consent must be obtained before communication</li>
                      <li>template approvals must follow Meta rules</li>
                    </ul>
                    <p className="mt-4 text-[#00823b]">
                      Techhind is not responsible for WhatsApp account restrictions caused by policy violations.
                    </p>
                  </section>

                  {/* Section 8 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">8. Data Ownership</h2>
                    <p className="mb-4">
                      Client organizations retain ownership of:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>customer lead data</li>
                      <li>CRM records</li>
                      <li>uploaded business content</li>
                      <li>workflow configurations</li>
                    </ul>
                    <p className="mt-4">
                      Techhind acts primarily as a Data Processor on behalf of clients.
                    </p>
                  </section>

                  {/* Section 9 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">9. Subscription & Payments</h2>
                    <p className="mb-4">
                      Access to some services may require:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>subscription plans</li>
                      <li>licensing fees</li>
                      <li>implementation charges</li>
                      <li>infrastructure costs</li>
                    </ul>
                    <p className="mt-4">
                      Payment terms are defined in individual service agreements.
                    </p>
                    <p className="mt-4 text-[#00823b]">
                      Failure to pay may result in suspension of services.
                    </p>
                  </section>

                  {/* Section 10 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">10. White-Label Deployments</h2>
                    <p className="mb-4">For white-label deployments:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>infrastructure responsibility depends on agreement</li>
                      <li>branding rights remain with client</li>
                      <li>core software intellectual property remains with Techhind</li>
                    </ul>
                    <p className="mt-4 text-[#00823b]">
                      Clients may not resell software without authorization.
                    </p>
                  </section>

                  {/* Section 11 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">11. Intellectual Property Rights</h2>
                    <p className="mb-4">
                      All software assets including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>source code</li>
                      <li>dashboards</li>
                      <li>architecture</li>
                      <li>automation logic</li>
                      <li>integrations</li>
                    </ul>
                    <p className="mt-4">
                      remain the intellectual property of Techhind Private Limited unless explicitly agreed otherwise.
                    </p>
                    <p className="mt-4 text-[#00823b]">
                      Unauthorized copying or redistribution is prohibited.
                    </p>
                  </section>

                  {/* Section 12 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">12. Data Security</h2>
                    <p className="mb-4">
                      Techhind implements reasonable safeguards including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>encryption</li>
                      <li>authentication controls</li>
                      <li>access restriction policies</li>
                      <li>monitoring systems</li>
                    </ul>
                    <p className="mt-4">
                      However, no system can guarantee absolute security.
                    </p>
                    <p className="mt-4">
                      Users are responsible for maintaining internal access controls within their organization.
                    </p>
                  </section>

                  {/* Section 13 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">13. Third-Party Services</h2>
                    <p className="mb-4">
                      Techhind services may integrate with:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Meta platforms</li>
                      <li>WhatsApp Business APIs</li>
                      <li>cloud hosting providers</li>
                      <li>email delivery providers</li>
                    </ul>
                    <p className="mt-4">
                      Use of such services is also governed by their respective policies.
                    </p>
                    <p className="mt-4 text-[#00823b]">
                      Techhind is not responsible for downtime caused by third-party providers.
                    </p>
                  </section>

                  {/* Section 14 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">14. Service Availability</h2>
                    <p className="mb-4">
                      We aim to maintain high uptime availability.
                    </p>
                    <p className="mb-4">
                      However, services may be temporarily unavailable due to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>maintenance</li>
                      <li>infrastructure upgrades</li>
                      <li>technical failures</li>
                      <li>third-party outages</li>
                    </ul>
                    <p className="mt-4 text-[#00823b]">
                      Techhind does not guarantee uninterrupted service.
                    </p>
                  </section>

                  {/* Section 15 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">15. Limitation of Liability</h2>
                    <p className="mb-4">
                      To the maximum extent permitted by law:
                    </p>
                    <p className="mb-2">
                      Techhind Private Limited shall not be liable for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>indirect losses</li>
                      <li>data loss</li>
                      <li>business interruption</li>
                      <li>revenue loss</li>
                      <li>third-party service failures</li>
                    </ul>
                    <p className="mt-4">
                      arising from platform usage.
                    </p>
                  </section>

                  {/* Section 16 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">16. Termination of Access</h2>
                    <p className="mb-4">
                      Techhind may suspend or terminate access if:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Terms are violated</li>
                      <li>unlawful activity is detected</li>
                      <li>payment obligations are not met</li>
                      <li>platform misuse occurs</li>
                    </ul>
                    <p className="mt-4">
                      Clients may terminate services according to contract terms.
                    </p>
                  </section>

                  {/* Section 17 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">17. Privacy Protection</h2>
                    <p className="mb-4">
                      Use of our services is also governed by our Privacy Policy available on:
                    </p>
                    <p className="text-[#00823b] font-medium">www.techhind.in/privacy-policy</p>
                  </section>

                  {/* Section 18 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">18. Compliance With Laws</h2>
                    <p className="mb-4">Users agree to comply with:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Indian IT laws</li>
                      <li>Digital Personal Data Protection Act 2023</li>
                      <li>Meta platform policies</li>
                      <li>WhatsApp Business policies</li>
                      <li>applicable international compliance obligations where relevant</li>
                    </ul>
                  </section>

                  {/* Section 19 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">19. Updates to Terms</h2>
                    <p className="mb-4">
                      Techhind may update these Terms periodically.
                    </p>
                    <p className="mb-4">
                      Updated versions will be published on our website.
                    </p>
                    <p className="text-[#00823b]">
                      Continued use of services indicates acceptance of revised Terms.
                    </p>
                  </section>

                  {/* Section 20 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">20. Governing Law & Jurisdiction</h2>
                    <p className="mb-4">
                      These Terms shall be governed by the laws of India.
                    </p>
                    <p className="mb-4">
                      Jurisdiction shall lie with courts located in Gujarat, India.
                    </p>
                  </section>

                  {/* Section 21 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">21. Contact Information</h2>
                    <div className="bg-[#0f2942] rounded-lg p-4">
                      <p className="text-gray-300">Techhind Private Limited</p>
                      <p className="text-gray-300">Vijapur, Gujarat, India</p>
                      <p className="font-semibold text-white mt-4 mb-2">Email:</p>
                      <p className="text-[#00823b]">support@techhind.in</p>
                    </div>
                  </section>

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
