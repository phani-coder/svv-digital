import { useState } from "react";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main>
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow">
          <SectionHeading
            label="Get in Touch"
            title="Let's Discuss Your Ecommerce Goals"
            description="Reach out via WhatsApp for a quick conversation or fill out the form below."
          />

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Info */}
            <div className="space-y-6">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-accent/10 border border-accent/20 rounded-xl p-5 hover:bg-accent/15 transition-colors"
              >
                <MessageCircle size={24} className="text-accent shrink-0" />
                <div>
                  <div className="font-semibold text-foreground text-sm">Chat on WhatsApp</div>
                  <div className="text-muted-foreground text-xs">Get a response within hours</div>
                </div>
              </a>
              <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-5">
                <Mail size={24} className="text-accent shrink-0" />
                <div>
                  <div className="font-semibold text-foreground text-sm">Email</div>
                  <div className="text-muted-foreground text-xs">hello@svvdigital.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-5">
                <MapPin size={24} className="text-accent shrink-0" />
                <div>
                  <div className="font-semibold text-foreground text-sm">Location</div>
                  <div className="text-muted-foreground text-xs">India · Serving clients worldwide</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-5">
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground font-semibold py-3 rounded-lg text-sm hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
