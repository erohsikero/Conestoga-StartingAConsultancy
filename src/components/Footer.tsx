import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-steel text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/image.png" alt="AegisOne Solutions" className="h-12 mb-4" />
            <p className="text-gray-300 text-sm">
              Empowering firms with Microsoft 365 solutions for secure, efficient, and collaborative workspaces.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@aegisonesolutions.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Serving clients nationwide</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-azure transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-xs text-gray-400">
                Microsoft 365 Certified Partner
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AegisOne Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
