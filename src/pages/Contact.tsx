import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'analysis',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: 'analysis',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-azure to-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-100">
            Ready to transform your digital workspace? Let's start the conversation.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-steel mb-6">Schedule a Free Consultation</h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below, and one of our Microsoft 365 specialists will reach out to discuss your needs and how we can help transform your firm's digital workspace.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Send className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-steel mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent outline-none transition"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-steel mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent outline-none transition"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-steel mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent outline-none transition"
                        placeholder="Your Firm Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-steel mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent outline-none transition"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-steel mb-2">
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent outline-none transition bg-white"
                    >
                      <option value="analysis">M365 Infrastructure Analysis</option>
                      <option value="migration">M365 Setup & Migration</option>
                      <option value="support">Support & Hypercare Services</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-steel mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure focus:border-transparent outline-none transition resize-none"
                      placeholder="Tell us about your current setup and what you're hoping to achieve..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto bg-azure text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-steel mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-azure/10 rounded-full">
                        <Mail className="text-azure" size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-steel mb-1">Email</h4>
                      <p className="text-gray-700">info@aegisonesolutions.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-azure/10 rounded-full">
                        <Phone className="text-azure" size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-steel mb-1">Phone</h4>
                      <p className="text-gray-700">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-azure/10 rounded-full">
                        <MapPin className="text-azure" size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-steel mb-1">Service Area</h4>
                      <p className="text-gray-700">Serving clients nationwide</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-azure/10 to-blue-100 p-6 rounded-lg">
                <h4 className="font-semibold text-steel mb-3">Office Hours</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-azure text-white p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Emergency Support</h4>
                <p className="text-sm text-blue-100">
                  For existing clients with Premium Hypercare, 24/7 emergency support is available at our dedicated hotline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
