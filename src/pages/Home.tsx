import { ArrowRight, Shield, Award, CheckCircle, Star } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-azure to-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Helping firms modernize their digital workspace with Microsoft 365
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Transform your business with secure email, organized files, and seamless collaboration tools designed for modern teams.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-azure px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center space-x-2 shadow-lg"
          >
            <span>Book a Free Consultation</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-steel mb-12">
            Why Choose AegisOne Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-azure/10 rounded-full mb-4">
                <Shield className="text-azure" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-steel mb-3">Secure by Design</h3>
              <p className="text-gray-600">
                Enterprise-grade security protecting your sensitive data with advanced threat protection and compliance tools.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-azure/10 rounded-full mb-4">
                <CheckCircle className="text-azure" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-steel mb-3">Seamless Migration</h3>
              <p className="text-gray-600">
                Smooth transition from your current system with minimal downtime and comprehensive support throughout.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-azure/10 rounded-full mb-4">
                <Award className="text-azure" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-steel mb-3">Expert Guidance</h3>
              <p className="text-gray-600">
                Certified Microsoft 365 specialists dedicated to maximizing your investment and productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-steel mb-4">Trusted by Firms Nationwide</h2>
            <p className="text-gray-600">Microsoft 365 Certified Partner</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="text-azure mx-auto mb-3" size={48} />
              <h3 className="font-semibold text-steel mb-2">Microsoft Certified</h3>
              <p className="text-sm text-gray-600">Official Microsoft 365 Partner</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="text-azure mx-auto mb-3" size={48} />
              <h3 className="font-semibold text-steel mb-2">Security Focused</h3>
              <p className="text-sm text-gray-600">SOC 2 Compliant Operations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <CheckCircle className="text-azure mx-auto mb-3" size={48} />
              <h3 className="font-semibold text-steel mb-2">10+ Migrations</h3>
              <p className="text-sm text-gray-600">Successfully Completed</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex text-azure">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 italic mb-4">
                  "AegisOne Solutions transformed our entire workflow. The migration to Microsoft 365 was seamless, and their support team has been exceptional. Our productivity has increased significantly, and we finally have the secure, modern infrastructure our firm needed."
                </p>
                <p className="font-semibold text-steel">Sarah Johnson</p>
                <p className="text-sm text-gray-600">Managing Partner, Johnson & Associates Law Firm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-azure text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Workspace?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule a free consultation to discuss how Microsoft 365 can elevate your firm's productivity and security.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-azure px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center space-x-2 shadow-lg"
          >
            <span>Get Started Today</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
