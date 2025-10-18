import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Card from '@/components/Card';
import InputField from '@/components/InputField';
import Button from '@/components/Button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'support@snovadigital.com',
      link: 'mailto:support@snovadigital.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Tech Street, Digital City, DC 10001',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground">
            Have questions? We'd love to hear from you. Send us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} hover glow>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                  <info.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                <a
                  href={info.link}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {info.content}
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card glow>
            <h2 className="text-2xl font-bold gradient-text mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="First Name" type="text" placeholder="John" />
                <InputField label="Last Name" type="text" placeholder="Doe" />
              </div>
              <InputField label="Email" type="email" placeholder="john@example.com" />
              <InputField label="Subject" type="text" placeholder="How can we help?" />
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              <Button variant="primary" size="lg" className="w-full" glow>
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Map or Additional Info */}
          <Card glow>
            <h2 className="text-2xl font-bold gradient-text mb-6">Business Hours</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                <span className="font-semibold">Monday - Friday</span>
                <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                <span className="font-semibold">Saturday</span>
                <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                <span className="font-semibold">Sunday</span>
                <span className="text-muted-foreground">Closed</span>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-bold text-lg mb-4">Quick Support</h3>
              <p className="text-muted-foreground mb-4">
                Need immediate assistance? Our support team is available 24/7 through live chat.
              </p>
              <Button variant="outline" className="w-full">
                Start Live Chat
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
