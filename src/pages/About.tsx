import { Target, Users, Lightbulb, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-azure to-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About AegisOne Solutions</h1>
          <p className="text-xl text-blue-100">
            Your trusted partner in Microsoft 365 transformation and digital workspace modernization.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-steel mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              AegisOne Solutions was founded with a clear mission: to help firms harness the full power of Microsoft 365. We recognized that many organizations struggle with outdated systems, security vulnerabilities, and inefficient workflows that hold them back from reaching their full potential.
            </p>
            <p>
              Our team of Microsoft-certified consultants brings years of experience in cloud infrastructure, security implementation, and business process optimization. We've successfully guided over 100 firms through their digital transformation journey, helping them modernize their operations while maintaining the highest standards of security and compliance.
            </p>
            <p>
              What sets us apart is our commitment to understanding each client's unique needs. We don't believe in one-size-fits-all solutions. Instead, we take the time to analyze your current infrastructure, understand your business goals, and design a customized Microsoft 365 implementation that delivers real results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-steel text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-azure/10 rounded-full mb-4">
                <Target className="text-azure" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-steel mb-3">Client-Focused</h3>
              <p className="text-gray-600">
                Your success is our success. We're committed to delivering solutions that meet your specific business needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-azure/10 rounded-full mb-4">
                <Users className="text-azure" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-steel mb-3">Collaborative</h3>
              <p className="text-gray-600">
                We work alongside your team, ensuring knowledge transfer and long-term self-sufficiency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-azure/10 rounded-full mb-4">
                <Lightbulb className="text-azure" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-steel mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of the curve, bringing you the latest Microsoft 365 features and best practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-azure/10 rounded-full mb-4">
                <TrendingUp className="text-azure" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-steel mb-3">Results-Driven</h3>
              <p className="text-gray-600">
                We measure our success by the tangible improvements in your productivity and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-steel mb-6">Our Expertise</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-azure pl-6 py-2">
              <h3 className="text-xl font-semibold text-steel mb-2">Microsoft 365 Infrastructure</h3>
              <p className="text-gray-700">
                Comprehensive planning, deployment, and optimization of Microsoft 365 environments tailored to your firm's specific requirements.
              </p>
            </div>

            <div className="border-l-4 border-azure pl-6 py-2">
              <h3 className="text-xl font-semibold text-steel mb-2">Security & Compliance</h3>
              <p className="text-gray-700">
                Implementation of advanced security features, data loss prevention, and compliance frameworks to protect your sensitive information.
              </p>
            </div>

            <div className="border-l-4 border-azure pl-6 py-2">
              <h3 className="text-xl font-semibold text-steel mb-2">Migration Services</h3>
              <p className="text-gray-700">
                Seamless migration from legacy systems with minimal disruption to your business operations and complete data integrity.
              </p>
            </div>

            <div className="border-l-4 border-azure pl-6 py-2">
              <h3 className="text-xl font-semibold text-steel mb-2">Training & Support</h3>
              <p className="text-gray-700">
                Comprehensive user training and ongoing support to ensure your team maximizes the value of Microsoft 365.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
