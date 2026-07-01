import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadcrumbStructuredData from '../components/structured-data/BreadcrumbStructuredData';
import { buildPageMetadata } from '../config/metadata';

export const metadata = buildPageMetadata({
  title: 'Data Deletion Instructions - Techhind Private Limited',
  description:
    'Techhind Private Limited Data Deletion Instructions - How to request deletion of your personal data collected through our website, ERP platform, and Meta integrations.',
  path: '/data-deletion',
  keywords: [
    'data deletion',
    'GDPR',
    'DPDP Act',
    'privacy rights',
    'data removal',
    'Techhind data deletion',
  ],
});

export default function DataDeletion() {
  return (
    <div className="min-h-screen bg-[#0b1c33]">
      <BreadcrumbStructuredData
        items={[{ name: 'Data Deletion Instructions', path: '/data-deletion' }]}
      />
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Data Deletion Instructions
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
                  Techhind Private Limited ("Techhind", "we", "our", or "us") respects user privacy and provides a mechanism for individuals to request deletion of their personal data collected through our website, ERP platform, CRM software, and third-party integrations including Meta platforms (Facebook and Instagram).
                </p>

                <p className="text-lg font-medium text-gray-200">
                  This page explains how users may request deletion of their data.
                </p>

                <div className="space-y-8">
                  {/* Section 1 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Scope of This Page</h2>
                    <p className="mb-4">
                      This Data Deletion Instructions page applies to personal information collected through:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Facebook Lead Ads</li>
                      <li>Instagram Lead Ads</li>
                      <li>Techhind CRM platform</li>
                      <li>Techhind ERP platform</li>
                      <li>website contact forms</li>
                      <li>demo request submissions</li>
                      <li>WhatsApp Business integrations (where applicable)</li>
                    </ul>
                  </section>

                  {/* Section 2 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. Data Collected via Facebook & Instagram Lead Ads</h2>
                    <p className="mb-4">
                      Techhind acts primarily as a technology service provider (Data Processor) for businesses using our CRM platform.
                    </p>
                    <p className="mb-4">
                      When users submit their information through Facebook or Instagram Lead Ads:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>the data is collected by the advertiser (our client)</li>
                      <li>the data is securely transferred to Techhind CRM via Meta APIs</li>
                      <li>Techhind processes this data only on behalf of the advertiser</li>
                    </ul>
                    <p className="mt-4 text-[#00823b] font-medium">
                      Techhind does not sell or reuse Lead Ads data for independent marketing purposes.
                    </p>
                  </section>

                  {/* Section 3 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">3. How to Request Data Deletion</h2>
                    <p className="mb-4">
                      If you submitted your personal information through a Facebook or Instagram Lead Ad powered by Techhind-integrated systems, you may request deletion by contacting:
                    </p>
                    <div className="bg-[#0f2942] rounded-lg p-4">
                      <p className="text-[#00823b] font-medium text-lg">privacy@techhind.in</p>
                    </div>
                    <p className="mt-4 mb-2">Please include:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>your full name</li>
                      <li>email address or phone number used in the Lead Ad</li>
                      <li>approximate date of submission (if available)</li>
                      <li>advertiser/business name (if known)</li>
                    </ul>
                    <p className="mt-4 text-[#00823b]">
                      This helps us process your request faster.
                    </p>
                  </section>

                  {/* Section 4 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">4. Processing of Deletion Requests</h2>
                    <p className="mb-4">After receiving a request:</p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Techhind verifies the request details</li>
                      <li>The request is forwarded to the relevant advertiser/client (data owner)</li>
                      <li>Data is deleted from our systems where applicable</li>
                      <li>Confirmation is provided once completed</li>
                    </ol>
                    <p className="mt-4">
                      Deletion requests are processed within timelines required under applicable laws including the Digital Personal Data Protection Act, 2023 (India).
                    </p>
                  </section>

                  {/* Section 5 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">5. Requests Submitted Directly to Advertisers</h2>
                    <p className="mb-4">
                      Since Lead Ads data belongs to the advertiser:
                    </p>
                    <p className="mb-4">
                      Users may alternatively request deletion directly from the business whose advertisement they interacted with.
                    </p>
                    <p className="mt-4">
                      Techhind will assist advertisers in fulfilling such requests when required.
                    </p>
                  </section>

                  {/* Section 6 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">6. Website Contact Form Data Deletion</h2>
                    <p className="mb-4">
                      If you submitted information directly through:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Techhind website contact forms</li>
                      <li>demo request forms</li>
                      <li>onboarding registration forms</li>
                    </ul>
                    <p className="mt-4">
                      You may request deletion by emailing:
                    </p>
                    <div className="bg-[#0f2942] rounded-lg p-4">
                      <p className="text-[#00823b] font-medium text-lg">privacy@techhind.in</p>
                    </div>
                    <p className="mt-4">
                      We will process verified requests within statutory timelines.
                    </p>
                  </section>

                  {/* Section 7 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">7. WhatsApp Communication Data</h2>
                    <p className="mb-4">
                      If you communicated with a business through WhatsApp integrations powered by Techhind systems:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Techhind stores messaging metadata only where required for service delivery</li>
                      <li>message ownership remains with the business you interacted with</li>
                    </ul>
                    <p className="mt-4">
                      Deletion requests may be submitted using:
                    </p>
                    <div className="bg-[#0f2942] rounded-lg p-4">
                      <p className="text-[#00823b] font-medium text-lg">privacy@techhind.in</p>
                    </div>
                  </section>

                  {/* Section 8 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">8. Identity Verification Requirement</h2>
                    <p className="mb-4">
                      To protect user privacy and prevent unauthorized deletion requests, Techhind may request limited information to verify identity before processing deletion requests.
                    </p>
                  </section>

                  {/* Section 9 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">9. Data Retention Exceptions</h2>
                    <p className="mb-4">
                      Certain data may be retained if required for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>legal compliance</li>
                      <li>fraud prevention</li>
                      <li>contractual obligations</li>
                      <li>regulatory reporting</li>
                    </ul>
                    <p className="mt-4">
                      Such retention will follow applicable law.
                    </p>
                  </section>

                  {/* Section 10 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">10. Contact for Data Deletion Requests</h2>
                    <p className="mb-4">For all deletion-related requests:</p>
                    <div className="bg-[#0f2942] rounded-lg p-4">
                      <p className="text-gray-300">Techhind Private Limited</p>
                      <p className="text-gray-300">Vijapur, Gujarat, India</p>
                      <p className="font-semibold text-white mt-4 mb-2">Email:</p>
                      <p className="text-[#00823b] font-medium text-lg">privacy@techhind.in</p>
                    </div>
                  </section>

                  {/* Section 11 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">11. Updates to This Page</h2>
                    <p className="mb-4">
                      Techhind may update this page periodically to reflect legal or platform policy changes.
                    </p>
                    <p className="mb-4">
                      Updates will be published on:
                    </p>
                    <p className="text-[#00823b] font-medium">techhind.in/data-deletion</p>
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
