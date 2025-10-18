import { User, Mail, Phone, Lock } from 'lucide-react';
import Card from '@/components/Card';
import InputField from '@/components/InputField';
import Button from '@/components/Button';

const AccountDetails = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center gap-3 mb-8">
          <User className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold gradient-text">Account Details</h1>
        </div>

        <div className="space-y-6">
          {/* Profile Picture */}
          <Card>
            <h2 className="text-xl font-bold mb-6">Profile Picture</h2>
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center glow-blue">
                <User className="w-12 h-12 text-primary-foreground" />
              </div>
              <div className="flex gap-4">
                <Button variant="primary" size="sm">Upload New</Button>
                <Button variant="outline" size="sm">Remove</Button>
              </div>
            </div>
          </Card>

          {/* Personal Information */}
          <Card>
            <h2 className="text-xl font-bold mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="First Name" type="text" placeholder="John" defaultValue="John" />
              <InputField label="Last Name" type="text" placeholder="Doe" defaultValue="Doe" />
              <InputField
                label="Email"
                type="email"
                placeholder="john@example.com"
                defaultValue="john@example.com"
                className="md:col-span-2"
              />
              <InputField
                label="Phone"
                type="tel"
                placeholder="+1 234 567 8900"
                defaultValue="+1 234 567 8900"
                className="md:col-span-2"
              />
            </div>
            <Button variant="primary" className="mt-6" glow>
              Save Changes
            </Button>
          </Card>

          {/* Change Password */}
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold">Change Password</h2>
            </div>
            <div className="space-y-4">
              <InputField label="Current Password" type="password" placeholder="••••••••" />
              <InputField label="New Password" type="password" placeholder="••••••••" />
              <InputField label="Confirm New Password" type="password" placeholder="••••••••" />
            </div>
            <Button variant="primary" className="mt-6" glow>
              Update Password
            </Button>
          </Card>

          {/* Account Actions */}
          <Card>
            <h2 className="text-xl font-bold mb-6">Account Actions</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-semibold">Newsletter Subscription</p>
                  <p className="text-sm text-muted-foreground">Receive updates about new products and offers</p>
                </div>
                <input type="checkbox" className="w-5 h-5" defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-semibold">Order Notifications</p>
                  <p className="text-sm text-muted-foreground">Get notified about your order status</p>
                </div>
                <input type="checkbox" className="w-5 h-5" defaultChecked />
              </div>
              <div className="border-t border-border pt-4">
                <Button variant="outline" className="text-destructive hover:bg-destructive/10 w-full">
                  Delete Account
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
