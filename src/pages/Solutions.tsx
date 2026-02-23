import { Store, CreditCard, Server, ShieldCheck, Headphones } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTABlock from "@/components/CTABlock";

const services = [
  {
    icon: Store,
    title: "Store Design & Setup",
    desc: "We build your online store from the ground up — from product catalogues and category structures to checkout flows and mobile-responsive design. Every store is engineered for conversion and brand consistency.",
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    desc: "Accept payments seamlessly with integrated gateways like Razorpay, Stripe, and PayPal. We configure secure payment processing, manage compliance, and ensure smooth transaction experiences for your customers.",
  },
  {
    icon: Server,
    title: "Hosting & Infrastructure Management",
    desc: "Your store runs on reliable, high-performance infrastructure. We manage servers, uptime monitoring, SSL certificates, domain renewals, and CDN configuration — all included in your subscription.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Maintenance",
    desc: "Regular security audits, vulnerability patches, data backups, and platform updates keep your store protected. We take full technical responsibility so you can focus on selling.",
  },
  {
    icon: Headphones,
    title: "Continuous Technical Support",
    desc: "Need to update a product, change a banner, or troubleshoot an issue? Our team is available month after month as part of your managed subscription — no re-hiring required.",
  },
];

const Solutions = () => (
  <main>
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-narrow">
        <SectionHeading
          label="What We Do"
          title="Ecommerce Solutions Built for Retail Businesses"
          description="Every component of your online store — from design to security — is handled under one managed subscription."
        />
        <div className="space-y-6">
          {services.map((s, i) => (
            <div key={s.title} className="bg-card border border-border rounded-xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-secondary rounded-lg p-3 shrink-0">
                <s.icon size={28} className="text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CTABlock />
  </main>
);

export default Solutions;
