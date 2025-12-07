import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogProps {
  onNavigate: (page: string) => void;
}

export default function Blog({ onNavigate }: BlogProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-azure to-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Insights & Resources</h1>
          <p className="text-xl text-blue-100">
            Expert guidance on Microsoft 365 and digital transformation.
          </p>
        </div>
      </section>

      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-steel mb-4">
              5 Signs Your Firm Is Ready for Microsoft 365
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>December 5, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>5 min read</span>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Have you ever searched for a client document and thought, "Where did you save that… Google Drive? Desktop? WhatsApp?"
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              In case this sounds like something you know, then your company may have already outgrown the tools it is currently using. Most of the professional service firms begin with simple systems, and as the workload grows, these tools start slowing all processes down.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Here are five clear signs that your firm is ready to upgrade to Microsoft 365:
            </p>

            <div className="space-y-10">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-azure">
                <h3 className="text-2xl font-bold text-steel mb-4">
                  1. Your files are scattered everywhere
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Through desktops, Google drive, email attaching, WhatsApp links. This not only wastes time, it is also confusing and may lose valuable documents.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-azure">
                <h3 className="text-2xl font-bold text-steel mb-4">
                  2. You want professional email addresses
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Customers will have confidence in companies with domain-based e-mail such as yourname@yourfirm.ca. In case you are still using personal account in Gmail or Outlook, then it is time to upgrade your brand identity.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-azure">
                <h3 className="text-2xl font-bold text-steel mb-4">
                  3. Clients expect secure communication
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Legal, financial, and consulting clients care deeply about confidentiality. If you're using consumer-grade apps like whatsapp or gmail for communication or file sharing, this puts client trust at risk.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-azure">
                <h3 className="text-2xl font-bold text-steel mb-4">
                  4. Your team feels slowed down by outdated tools
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  If your team spends more time searching for files than serving clients, your systems—not your staff—are the bottleneck.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-azure">
                <h3 className="text-2xl font-bold text-steel mb-4">
                  5. You want better compliance and control
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Microsoft 365 offers built-in security features like MFA, retention, encryption, and data-loss prevention—features that matter as you grow.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                Modernizing your digital workspace isn't just about technology it's about improving productivity, building client trust, and preparing your firm for growth. If even one or two of these signs feel familiar, your firm is likely ready to start the Microsoft 365 journey.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Curious where your firm stands today? Book a free 20-minute assessment and get a clear, simple roadmap tailored to your business.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-azure text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h3>
            <p className="text-blue-100 mb-6">
              Book a free 20-minute assessment and get a clear, simple roadmap tailored to your business.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-azure px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center space-x-2"
            >
              <span>Book a Free Assessment</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
