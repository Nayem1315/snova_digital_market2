import { FileText } from 'lucide-react';
import Card from '@/components/Card';

const Terms = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 glow-blue">
            <FileText className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>
        </div>

        <Card glow>
          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Snova Digital Market, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to these terms, 
                please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">2. Use License</h2>
              <p className="text-muted-foreground mb-3">
                Permission is granted to temporarily access the materials on Snova Digital Market 
                for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">3. Product Information</h2>
              <p className="text-muted-foreground">
                We strive to ensure that product descriptions and pricing are accurate. However, 
                we do not warrant that product descriptions, pricing, or other content is accurate, 
                complete, reliable, current, or error-free. We reserve the right to correct any 
                errors, inaccuracies, or omissions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">4. Purchases</h2>
              <p className="text-muted-foreground">
                All purchases through our site are subject to product availability. We reserve the 
                right to refuse or cancel any order for any reason. Prices are subject to change 
                without notice. Payment must be received before products are shipped.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">5. User Accounts</h2>
              <p className="text-muted-foreground">
                When you create an account with us, you must provide accurate and complete information. 
                You are responsible for maintaining the security of your account and password. We cannot 
                and will not be liable for any loss or damage arising from your failure to comply with 
                this security obligation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">6. Shipping and Delivery</h2>
              <p className="text-muted-foreground">
                We will ship products to the address you provide. Delivery times are estimates and 
                not guaranteed. Risk of loss and title for items pass to you upon delivery to the carrier.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">7. Returns and Refunds</h2>
              <p className="text-muted-foreground">
                Our return policy allows returns within 30 days of purchase for most items. Please 
                refer to our Returns & Refunds page for complete details on eligibility and procedures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                In no event shall Snova Digital Market or its suppliers be liable for any damages 
                arising out of the use or inability to use the materials on our website, even if 
                we have been notified of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">9. Modifications</h2>
              <p className="text-muted-foreground">
                We reserve the right to revise these terms of service at any time without notice. 
                By using this website you are agreeing to be bound by the current version of these 
                terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold gradient-text mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at 
                <a href="mailto:legal@snovadigital.com" className="text-primary hover:underline ml-1">
                  legal@snovadigital.com
                </a>
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Terms;
