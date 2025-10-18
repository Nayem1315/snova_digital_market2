import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Card from '@/components/Card';
import { cn } from '@/lib/utils';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Orders & Shipping',
      questions: [
        {
          question: 'How long does shipping take?',
          answer: 'Standard shipping typically takes 3-5 business days. Express shipping options are available at checkout for faster delivery within 1-2 business days.',
        },
        {
          question: 'Do you ship internationally?',
          answer: 'Yes! We ship to over 50 countries worldwide. International shipping times vary by location but typically range from 7-14 business days.',
        },
        {
          question: 'How can I track my order?',
          answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order by logging into your account and visiting the Orders page.',
        },
      ],
    },
    {
      category: 'Returns & Refunds',
      questions: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Some restrictions apply to certain product categories.',
        },
        {
          question: 'How do I initiate a return?',
          answer: 'Log into your account, go to Orders, select the item you want to return, and click "Request Return". Follow the instructions to print your return label.',
        },
        {
          question: 'When will I receive my refund?',
          answer: 'Refunds are processed within 5-7 business days after we receive your return. The funds will be credited back to your original payment method.',
        },
      ],
    },
    {
      category: 'Payment & Security',
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay.',
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Absolutely. We use industry-standard SSL encryption to protect your payment information. We never store your full credit card details on our servers.',
        },
      ],
    },
    {
      category: 'Products & Warranty',
      questions: [
        {
          question: 'Are all products covered by warranty?',
          answer: 'Yes, all products come with manufacturer warranties. Warranty periods vary by product and manufacturer. Details are available on each product page.',
        },
        {
          question: 'Do you sell refurbished products?',
          answer: 'Some of our products are refurbished and clearly marked as such. Refurbished items are thoroughly tested and come with the same warranty as new products.',
        },
      ],
    },
  ];

  const allQuestions = faqs.flatMap((category) =>
    category.questions.map((q) => ({ ...q, category: category.category }))
  );

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 glow-blue">
            <HelpCircle className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our products and services
          </p>
        </div>

        <Card glow>
          <div className="space-y-3">
            {allQuestions.map((item, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-4 flex items-center justify-between hover:bg-muted transition-colors text-left"
                >
                  <div>
                    <span className="text-xs text-primary font-medium mb-1 block">
                      {item.category}
                    </span>
                    <span className="font-semibold">{item.question}</span>
                  </div>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-muted-foreground transition-transform',
                      openIndex === index && 'transform rotate-180'
                    )}
                  />
                </button>
                {openIndex === index && (
                  <div className="p-4 pt-0 text-muted-foreground border-t border-border animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        <Card className="mt-8 text-center">
          <h2 className="text-2xl font-bold gradient-text mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? Our customer support team is here to help.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:brightness-110 transition-all glow-blue"
            >
              Contact Support
            </a>
            <a
              href="mailto:support@snovadigital.com"
              className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Email Us
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
