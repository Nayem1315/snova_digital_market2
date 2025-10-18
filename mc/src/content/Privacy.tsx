import { Shield } from 'lucide-react';
import Card from '@/components/Card';

const Privacy = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 glow-blue">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>
        </div>

        <Card glow>
          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-3">
                We collect several types of information from and about users of our website:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Order history and preferences</li>
                <li>Technical data (IP address, browser type, device information)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-3">
                We use the information we collect for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>To process and fulfill your orders</li>
                <li>To communicate with you about your orders and account</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To improve our website and customer service</li>
                <li>To prevent fraud and enhance security</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell, trade, or rent your personal information to third parties. We may 
                share your information with trusted service providers who assist us in operating our 
                website and conducting our business, provided they agree to keep this information 
                confidential. We may also disclose your information when required by law or to protect 
                our rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet is 100% secure, and we cannot guarantee 
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">5. Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to enhance your browsing experience, 
                analyze site traffic, and understand where our audience is coming from. You can control 
                cookie settings through your browser, but disabling cookies may affect site functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">7. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our website is not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13. If you are a parent or guardian 
                and believe we have collected information from your child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">8. Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites. We are not responsible for the 
                privacy practices of these external sites. We encourage you to read their privacy 
                policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">9. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date. We encourage 
                you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-foreground">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:privacy@snovadigital.com" className="text-primary hover:underline">
                    privacy@snovadigital.com
                  </a>
                </p>
                <p className="text-foreground mt-2">
                  <strong>Address:</strong> 123 Tech Street, Digital City, DC 10001
                </p>
              </div>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
