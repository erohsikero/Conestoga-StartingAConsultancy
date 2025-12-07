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
              Is your firm still relying on outdated email systems, scattered file storage, or inefficient collaboration tools? Many startups and mid-sized firms continue to operate with legacy infrastructure simply because they're unsure when the right time to upgrade is. The truth is, there are clear indicators that signal your organization is ready for a modern cloud solution like Microsoft 365.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Here are five telltale signs that your firm should seriously consider making the switch to Microsoft 365:
            </p>

            <div className="space-y-10">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-azure">
                <h3 className="text-2xl font-bold text-steel mb-4">
                  1. Your Team Is Working Remotely or Hybrid
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The modern workplace is no longer confined to a physical office. If your team members are working from home, traveling frequently, or splitting time between office and remote locations, you need tools that support seamless collaboration regardless of location.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Microsoft 365 provides cloud-based access to email, documents, and collaboration tools from any device, anywhere in the world. With features like Microsoft Teams, SharePoint, and OneDrive, your team can stay connected and productive whether they're at their desk or on the go. If you're still relying on on-premises servers or VPN connections that struggle with remote access, it's time to consider a cloud-first approach.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-azure">
                <h3 className="text-2xl font-bold text-steel mb-4">
                  2. Security Concerns Keep You Up at Night
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cybersecurity threats are growing more sophisticated every day, and startups firms are increasingly becoming targets. If you're concerned about email phishing attacks, ransomware, data breaches, or compliance requirements, your current infrastructure may not be providing adequate protection.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Microsoft 365 includes enterprise-grade security features that were once available only to large corporations. Advanced threat protection, multi-factor authentication, data loss prevention, and encryption are all built into the platform. Plus, Microsoft's dedicated security team is constantly monitoring and updating defenses against emerging threats. For firms handling sensitive client information, these security capabilities are essential, not optional.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-azure">
                <h3 className="text-2xl font-bold text-steel mb-4">
                  3. File Sharing Is Chaotic and Inefficient
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Are your team members emailing documents back and forth, creating multiple versions with names like "Final_v2_REAL_FINAL.docx"? Is it difficult to find the latest version of important files? Are people still using USB drives or consumer-grade file sharing services?
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These are signs that your current file management approach isn't scaling with your business needs. Microsoft 365's SharePoint and OneDrive provide centralized, secure file storage with real-time collaboration features. Multiple team members can work on the same document simultaneously, version history is automatically tracked, and finding files is as simple as searching. This not only improves productivity but also reduces the risk of working with outdated information or losing important documents.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-azure">
                <h3 className="text-2xl font-bold text-steel mb-4">
                  4. Your Current Email System Is Unreliable or Limited
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Is your inbox constantly running out of storage space? Do you experience frequent email outages or slow performance? Are you stuck with a dated email interface that lacks modern features?
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Email remains the backbone of business communication, and any limitations here directly impact your firm's productivity and professionalism. Microsoft 365's Exchange Online provides robust, reliable email with generous storage limits, advanced spam filtering, and seamless integration with other productivity tools. The Outlook interface is intuitive and feature-rich, supporting everything from shared calendars to task management. If your current email solution is holding your team back, upgrading to Microsoft 365 will deliver immediate, noticeable improvements.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-azure">
                <h3 className="text-2xl font-bold text-steel mb-4">
                  5. You Want to Reduce IT Overhead and Costs
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Maintaining on-premises servers, managing software updates, and dealing with hardware failures can be expensive and time-consuming. Startups firms often lack dedicated IT staff, which means these technical issues fall on already-busy team members or require costly external support.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Microsoft 365 shifts these responsibilities to Microsoft's cloud infrastructure. Server maintenance, security patches, software updates, and backups are all handled automatically. This predictable, subscription-based model not only reduces total cost of ownership but also frees your team to focus on core business activities rather than IT troubleshooting. If you're tired of dealing with technical headaches or facing expensive hardware replacement costs, the cloud-based approach of Microsoft 365 offers a compelling alternative.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-steel mb-4">Making the Move</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you recognize your firm in one or more of these signs, you're likely ready to benefit from Microsoft 365. The platform's combination of powerful productivity tools, robust security, and flexible cloud infrastructure makes it an ideal solution for modern startups and mid-sized firms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                However, successful implementation requires careful planning and execution. From assessing your current infrastructure to migrating data and training staff, there are numerous considerations that impact your transition's success. That's where working with experienced Microsoft 365 consultants can make all the difference.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At AegisOne Solutions, we specialize in helping firms like yours navigate the Microsoft 365 journey. Whether you need a comprehensive infrastructure analysis, end-to-end migration support, or ongoing hypercare services, our team has the expertise to ensure a smooth, successful transition.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-azure text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h3>
            <p className="text-blue-100 mb-6">
              Let's discuss how Microsoft 365 can transform your firm's productivity, security, and collaboration capabilities.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-azure px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center space-x-2"
            >
              <span>Schedule a Free Consultation</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
