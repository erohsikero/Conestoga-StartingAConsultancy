import { Search, Rocket, HeadphonesIcon, ArrowRight, CheckCircle } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-azure to-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100">
            Comprehensive Microsoft 365 solutions designed to transform your digital workspace.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-azure/10 rounded-full mb-6">
                  <Search className="text-azure" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-steel mb-4">M365 Infrastructure Analysis</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Before any transformation, understanding your current state is critical. Our comprehensive infrastructure analysis provides a detailed assessment of your existing systems, security posture, and business workflows.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-azure flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Complete audit of current IT infrastructure and email systems</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-azure flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Security vulnerability assessment and risk analysis</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-azure flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Workflow optimization opportunities identification</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-azure flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Detailed roadmap with prioritized recommendations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-azure flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Cost-benefit analysis and ROI projections</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-azure/10 to-blue-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-steel mb-4">What You'll Receive</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-azure font-bold">•</span>
                    <span>Comprehensive 40+ page assessment report</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-azure font-bold">•</span>
                    <span>Executive summary for stakeholders</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-azure font-bold">•</span>
                    <span>Technical implementation roadmap</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-azure font-bold">•</span>
                    <span>Risk mitigation strategies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-azure font-bold">•</span>
                    <span>Follow-up consultation session</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-azure/10 to-blue-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-steel mb-4">Implementation Includes</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-azure font-bold">•</span>
                    <span>Complete Microsoft 365 tenant configuration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-azure font-bold">•</span>
                    <span>Email migration with zero data loss</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-azure font-bold">•</span>
                    <span>SharePoint and OneDrive setup</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-azure font-bold">•</span>
                    <span>Teams deployment and optimization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-azure font-bold">•</span>
                    <span>Security and compliance configuration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-azure font-bold">•</span>
                    <span>Staff training and documentation</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-azure/10 rounded-full mb-6">
                  <Rocket className="text-azure" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-steel mb-4">M365 Setup & Migration</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our proven migration methodology ensures a smooth, secure transition to Microsoft 365 with minimal disruption to your business operations. We handle every aspect of the setup and migration process.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-azure flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Detailed project planning and timeline development</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-azure flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Phased migration approach to minimize business impact</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-azure flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Complete data migration with integrity verification</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-azure flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Custom training programs for all user levels</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-azure flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Post-migration optimization and fine-tuning</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-azure/10 rounded-full mb-6">
                  <HeadphonesIcon className="text-azure" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-steel mb-4">Support & Hypercare Services</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Your journey doesn't end after migration. Our support and hypercare services ensure your team has the assistance they need to maximize productivity and quickly resolve any issues that arise.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-azure flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Dedicated support team with rapid response times</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-azure flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Proactive monitoring and issue resolution</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-azure flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Regular system health checks and optimization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-azure flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Ongoing training and knowledge base access</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-azure flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Flexible support tiers to match your needs</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-azure/10 to-blue-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-steel mb-4">Support Tiers</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-steel mb-2">Standard Support</h4>
                    <p className="text-sm text-gray-700">Business hours support with 4-hour response time</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-steel mb-2">Priority Support</h4>
                    <p className="text-sm text-gray-700">Extended hours with 2-hour response time</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-steel mb-2">Premium Hypercare</h4>
                    <p className="text-sm text-gray-700">24/7 support with 1-hour response time and dedicated account manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-azure text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss which services are right for your firm and create a customized plan for your Microsoft 365 transformation.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-azure px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center space-x-2 shadow-lg"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
