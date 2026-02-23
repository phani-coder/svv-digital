import { ArrowRight, ShieldCheck, RefreshCcw, Headphones, EyeOff } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTABlock from "@/components/CTABlock";

const challenges = [
  { icon: Headphones, title: "Lack of Ongoing Support", desc: "Most agencies disappear after delivery, leaving you without help when issues arise." },
  { icon: EyeOff, title: "Hidden Renewal Costs", desc: "Domain, hosting, and SSL renewals often come as unexpected expenses." },
  { icon: ShieldCheck, title: "No Technical Responsibility", desc: "Without a structured support model, security and uptime become your burden." },
  { icon: RefreshCcw, title: "Difficulty Making Changes", desc: "Simple updates require hiring a new developer every time." },
];

const phases = [
  { step: "01", title: "Strategic Setup", desc: "We study your retail business, define your store architecture, and plan for scalable growth from day one." },
  { step: "02", title: "Professional Launch", desc: "Your store is designed, built, and launched with payment gateways, security, and performance fully configured." },
  { step: "03", title: "Managed Technical Ownership", desc: "Hosting, domain, SSL, security patches, and backups are handled entirely by our team — every month." },
  { step: "04", title: "Continuous Evolution", desc: "We iterate on your store with product updates, design improvements, and feature additions as your business grows." },
];

const plans = [
  { name: "Starter", desc: "For small retailers launching their first online store.", features: ["Store setup & design", "Payment integration", "Hosting & domain included", "Monthly support"], highlight: false },
  { name: "Growth", desc: "For growing brands scaling their online operations.", features: ["Everything in Starter", "Advanced analytics", "Priority support", "Monthly strategy review"], highlight: true },
  { name: "Custom", desc: "For established businesses with complex requirements.", features: ["Fully custom build", "Dedicated account manager", "SLA-backed uptime", "Custom integrations"], highlight: false },
];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center" style={{ background: "var(--hero-gradient)" }}>
      <div className="container-narrow px-6 py-28 md:py-36">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-6">Managed Ecommerce Partner</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: "hsl(0 0% 100%)" }}>
            Complete Ecommerce Systems Engineered for Scalable Retail Growth
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
            We design, launch, and manage your entire online store — including hosting, payments, and ongoing technical support — through a managed ecommerce subscription model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground font-semibold px-7 py-3.5 rounded-lg text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Chat on WhatsApp <ArrowRight size={16} />
            </a>
            <a
              href="/contact"
              className="border border-white/20 font-semibold px-7 py-3.5 rounded-lg text-sm hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              style={{ color: "hsl(0 0% 100%)" }}
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Challenges */}
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          label="The Problem"
          title="What Happens After a One-Time Website Build?"
          description="Most retail businesses face the same frustrations after a one-time website development project."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((c) => (
            <div key={c.title} className="bg-card rounded-xl p-6 border border-border">
              <c.icon size={28} className="text-accent mb-4" />
              <h3 className="font-semibold text-foreground mb-2 text-sm">{c.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed italic">
          With SVV Digital as your technology partner, your online store runs with the stability, security, and ongoing support growing brands rely on.
        </p>
      </div>
    </section>

    {/* Phases */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <SectionHeading
          label="Our Process"
          title="The Managed Ecommerce Subscription Model"
          description="A structured, four-phase approach that takes your store from concept to continuous growth."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {phases.map((p) => (
            <div key={p.step} className="bg-card rounded-xl p-8 border border-border flex gap-5">
              <span className="text-3xl font-display font-bold text-accent/30 shrink-0">{p.step}</span>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing Overview */}
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          label="Plans"
          title="Simple, Transparent Pricing"
          description="Choose a plan that fits your retail business. All plans include hosting, domain, and ongoing support."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-xl p-8 border ${
                p.highlight
                  ? "bg-primary text-primary-foreground border-primary ring-2 ring-accent"
                  : "bg-card text-card-foreground border-border"
              }`}
            >
              {p.highlight && (
                <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2 block">Most Popular</span>
              )}
              <h3 className="font-display text-2xl font-bold mb-1">{p.name}</h3>
              <p className={`text-sm mb-6 ${p.highlight ? "opacity-70" : "text-muted-foreground"}`}>{p.desc}</p>
              <div className="text-3xl font-bold mb-6">
                ₹ —<span className="text-sm font-normal opacity-60"> /month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className={`text-sm flex items-start gap-2 ${p.highlight ? "opacity-80" : "text-muted-foreground"}`}>
                    <span className="text-accent mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className={`block text-center text-sm font-semibold px-5 py-3 rounded-lg transition-colors ${
                  p.highlight
                    ? "bg-accent text-accent-foreground hover:opacity-90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTABlock />
  </main>
);

export default Index;
