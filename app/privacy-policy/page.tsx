import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadcrumbStructuredData from '../components/structured-data/BreadcrumbStructuredData';
import { buildPageMetadata } from '../config/metadata';

export const metadata = buildPageMetadata({
  title: 'Privacy Policy - Techhind Private Limited',
  description:
    'Techhind Private Limited Privacy Policy - How we collect, process, and protect your personal data in compliance with DPDP Act 2023 and Meta platform policies.',
  path: '/privacy-policy',
  keywords: [
    'privacy policy',
    'data protection',
    'DPDP Act 2023',
    'Meta privacy',
    'Techhind privacy',
    'SolarCRM',
    'camera permission',
  ],
});

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0b1c33]">
      <BreadcrumbStructuredData
        items={[{ name: 'Privacy Policy', path: '/privacy-policy' }]}
      />
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <div className="text-gray-400 space-y-2">
              <p className="text-lg">Techhind Private Limited</p>
              <div className="flex justify-center space-x-6 text-sm">
                <span>Effective Date: 01 January 2026</span>
                <span>•</span>
                <span>Last Updated: 13 May 2026</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-[#0a1a2e] rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700/50">
            <div className="prose prose-invert max-w-none">
              <div className="text-gray-300 leading-relaxed space-y-6">
                
                <p className="text-lg font-medium text-gray-200">
                  Techhind Private Limited ("Techhind", "we", "our", or "us") is committed to protecting personal information and ensuring transparency in how data is collected, processed, stored, and shared through our website, ERP platform, CRM software, and integrations with third-party services including Meta platforms (Facebook and Instagram).
                </p>

                <p className="text-lg font-medium text-gray-200">
                  This Privacy Policy explains how we comply with the Digital Personal Data Protection Act, 2023 (India) and Meta Platform Terms & Developer Policies.
                </p>

                <div className="space-y-8">
                  {/* Section 1 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Our Role & Scope</h2>
                    <p className="mb-4">
                      Techhind provides enterprise software infrastructure including ERP, CRM, workflow automation systems, and marketing integrations.
                    </p>
                    <p className="mb-4">Our platform integrates with:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Meta Lead Ads APIs (Facebook & Instagram)</li>
                      <li>WhatsApp Business API</li>
                      <li>Email communication services</li>
                      <li>Secure cloud infrastructure providers</li>
                    </ul>
                    
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-white mb-3">Data Fiduciary vs Data Processor</h3>
                      <p className="mb-4">Techhind acts as:</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-[#00823b] mb-2">Data Processor</h4>
                          <p>When processing personal data on behalf of client businesses using our ERP/CRM platform.</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-[#00823b] mb-2">Data Fiduciary</h4>
                          <p>When collecting personal information directly through:</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>website contact forms</li>
                            <li>demo requests</li>
                            <li>onboarding registrations</li>
                            <li>support requests</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 2 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                    <p className="mb-4">
                      We collect only the minimum data necessary to operate our services.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Account Information</h3>
                        <p className="mb-2">Includes:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Name</li>
                          <li>Email address</li>
                          <li>Phone number</li>
                          <li>Company name</li>
                          <li>Designation</li>
                          <li>Encrypted login credentials</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Business Operational Data</h3>
                        <p className="mb-2">Provided by client organizations:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>employee records</li>
                          <li>workflow configurations</li>
                          <li>CRM entries</li>
                          <li>operational metadata</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Meta Lead Ads Data</h3>
                        <p className="mb-2">
                          When connected via Meta APIs, we receive lead information submitted voluntarily by users through Facebook or Instagram Lead Ads forms:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Name</li>
                          <li>Phone number</li>
                          <li>Email address</li>
                          <li>Location</li>
                          <li>Custom responses defined by advertisers</li>
                        </ul>
                        <p className="mt-2 text-[#00823b]">
                          This data belongs to the respective advertiser/client business.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">SolarCRM: user accounts and business data</h3>
                        <p className="mb-2">
                          SolarCRM is a mobile application offered by Techhind Private Limited. SolarCRM may collect and process business-related information in order to provide ERP services and business workflow functionality, including:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>company details</li>
                          <li>employee information</li>
                          <li>authentication credentials</li>
                          <li>operational records</li>
                          <li>uploaded content</li>
                        </ul>
                        <p className="mt-2">
                          All transmitted data is protected using industry-standard security practices, as described further in this policy.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Section 3 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">3. Camera permission and device media (SolarCRM)</h2>
                    <p className="mb-4">
                      SolarCRM is offered by Techhind Private Limited. SolarCRM may request access to your device camera for business-related ERP operations such as:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>capturing site images</li>
                      <li>uploading work progress photos</li>
                      <li>scanning documents or QR codes</li>
                      <li>attaching images to reports, tickets, or tasks</li>
                    </ul>
                    <p className="mt-4">
                      The camera is accessed only when you explicitly use camera-related features inside the application. We do not access the camera in the background without user interaction or consent.
                    </p>
                    <p className="mt-4">
                      Captured images and files are securely transmitted to our servers for authorized business operations and are not shared with unauthorized third parties.
                    </p>
                    <p className="mt-4 text-[#00823b]">
                      If you deny camera permission, certain image capture or scanning features of the application may not function properly.
                    </p>
                  </section>

                  {/* Section 4 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">4. Purpose of Processing</h2>
                    <p className="mb-4">
                      We process personal data only for legitimate business purposes including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>delivering ERP and CRM services</li>
                      <li>synchronizing Meta Lead Ads with client dashboards</li>
                      <li>enabling WhatsApp and email notifications</li>
                      <li>improving platform functionality</li>
                      <li>maintaining infrastructure security</li>
                      <li>preventing unauthorized access and fraud</li>
                    </ul>
                    <p className="mt-4 text-[#00823b]">
                      We do not use Meta Lead data for independent advertising or profiling.
                    </p>
                  </section>

                  {/* Section 5 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">5. Meta Platform & Third-Party Integrations</h2>
                    <p className="mb-4">
                      In compliance with Meta Platform Terms:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Lead data is processed only for the advertiser/client that owns the ad account</li>
                      <li>Techhind does not sell or reuse Meta Lead data</li>
                      <li>Data is encrypted during transmission via secure APIs (SSL/TLS)</li>
                      <li>Access is restricted using role-based permissions</li>
                    </ul>
                    <p className="mt-4">
                      Meta users requesting deletion of their Lead Ads data may contact:
                    </p>
                    <p className="text-[#00823b] font-medium">privacy@techhind.in</p>
                  </section>

                  {/* Section 6 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">6. Legal Basis of Processing (DPDP Act 2023)</h2>
                    <p className="mb-4">
                      Techhind processes personal data based on:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>consent provided by users through Lead Ads or website forms</li>
                      <li>contractual necessity with client organizations</li>
                      <li>compliance with applicable legal obligations</li>
                      <li>legitimate business interests related to platform security and operations</li>
                    </ul>
                  </section>

                  {/* Section 7 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">7. Data Ownership & Retention</h2>
                    <p className="mb-4">
                      Client organizations retain full ownership of their customer lead data.
                    </p>
                    <p className="mb-4">Techhind retains data:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>during active subscription periods</li>
                      <li>as required under applicable laws</li>
                      <li>until deletion is requested by authorized clients</li>
                    </ul>
                    <p className="mt-4">
                      Clients may delete their stored data at any time through platform controls.
                    </p>
                  </section>

                  {/* Section 8 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">8. Data Security Measures</h2>
                    <p className="mb-4">
                      We implement industry-standard security safeguards including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>encryption in transit and at rest</li>
                      <li>access control policies</li>
                      <li>authentication safeguards</li>
                      <li>infrastructure monitoring</li>
                      <li>periodic internal security reviews</li>
                    </ul>
                  </section>

                  {/* Section 9 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">9. Cross-Border Data Transfers</h2>
                    <p className="mb-4">
                      Some infrastructure providers used by Techhind may process data outside India.
                    </p>
                    <p className="mb-4">Whenever cross-border transfers occur, we ensure:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>contractual safeguards</li>
                      <li>secure infrastructure providers</li>
                      <li>compliance with DPDP Act requirements</li>
                    </ul>
                  </section>

                  {/* Section 10 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">10. Sub-Processors & Infrastructure Providers</h2>
                    <p className="mb-4">
                      Techhind may engage trusted infrastructure vendors including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>cloud hosting providers</li>
                      <li>email delivery services</li>
                      <li>Meta platform integrations</li>
                      <li>WhatsApp Business API providers</li>
                    </ul>
                    <p className="mt-4">
                      These vendors process data only under contractual confidentiality and security obligations.
                    </p>
                  </section>

                  {/* Section 11 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">11. User Rights Under DPDP Act 2023</h2>
                    <p className="mb-4">Users have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>request access to their data</li>
                      <li>request correction</li>
                      <li>request deletion</li>
                      <li>withdraw consent where applicable</li>
                    </ul>
                    <p className="mt-4">
                      Meta Lead Ads users may request deletion by contacting:
                    </p>
                    <p className="text-[#00823b] font-medium">privacy@techhind.in</p>
                    <p className="mt-2">
                      Requests are processed within statutory timelines.
                    </p>
                  </section>

                  {/* Section 12 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">12. Children's Data Policy</h2>
                    <p className="mb-4">
                      Techhind services are not intended for individuals under 18 years of age.
                    </p>
                    <p className="mb-4">
                      We do not knowingly collect children's personal data.
                    </p>
                    <p className="mb-4">
                      If such data is identified, it will be deleted promptly.
                    </p>
                  </section>

                  {/* Section 13 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">13. Data Breach Notification</h2>
                    <p className="mb-4">
                      In the event of a data security incident affecting personal data, Techhind will:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>investigate immediately</li>
                      <li>notify affected parties where required</li>
                      <li>comply with applicable regulatory obligations</li>
                    </ul>
                  </section>

                  {/* Section 14 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">14. Grievance Redressal Officer</h2>
                    <p className="mb-4">
                      In accordance with the Digital Personal Data Protection Act, 2023:
                    </p>
                    <div className="bg-[#0f2942] rounded-lg p-4 mt-4">
                      <p className="font-semibold text-white mb-2">Grievance Officer</p>
                      <p className="text-gray-300">Techhind Private Limited</p>
                      <p className="text-gray-300 mt-2">Email: support@techhind.in</p>
                      <p className="text-gray-300">Address: Vijapur, Gujarat, India</p>
                    </div>
                  </section>

                  {/* Section 15 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">15. Changes to This Policy</h2>
                    <p className="mb-4">
                      Techhind may update this Privacy Policy periodically to reflect:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>legal updates</li>
                      <li>infrastructure changes</li>
                      <li>Meta platform policy updates</li>
                      <li>service improvements</li>
                    </ul>
                    <p className="mt-4">
                      Updates will be published on our website.
                    </p>
                  </section>

                  {/* Section 16 */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">16. Contact Information</h2>
                    <p className="mb-4">For privacy-related concerns:</p>
                    <div className="bg-[#0f2942] rounded-lg p-4">
                      <p className="text-gray-300">Techhind Private Limited</p>
                      <p className="text-gray-300">Website: www.techhind.in</p>
                      <p className="text-[#00823b] font-medium">Email: privacy@techhind.in</p>
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
