import { Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTABlock from "@/components/CTABlock";

const plans = [
  {
    name: "Starter",
    desc: "For small retailers launching their first online store.",
    features: [
      "Custom store design",
      "Up to 50 products",
      "Payment gateway setup",
      "Hosting & domain included",
      "SSL certificate",
      "Monthly maintenance",
      "Email support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    desc: "For growing brands scaling their online operations.",
    features: [
      "Everything in Starter",
      "Up to 500 products",
      "Advanced analytics dashboard",
      "SEO optimization",
      "Priority support",
      "Monthly strategy review",
      "Performance monitoring",
    ],
    highlight: true,
  },
  {
    name: "Custom",
    desc: "For established businesses with complex requirements.",
    features: [
      "Fully custom build",
      "Unlimited products",
      "Dedicated account manager",
      "SLA-backed uptime guarantee",
      "Custom integrations",
      "Multi-channel selling",
      "Quarterly business review",
    ],
    highlight: false,
  },
];

const Plans = () => (
  <main>
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-narrow">
        <SectionHeading
          label="Subscription Plans"
          title="Choose Your Managed Ecommerce Plan"
          description="All plans operate on a 12-month managed subscription commitment. Hosting, domain, and maintenance are included."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-xl p-8 border flex flex-col ${
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
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className={`text-sm flex items-start gap-2 ${p.highlight ? "opacity-80" : "text-muted-foreground"}`}>
                    <Check size={15} className="text-accent mt-0.5 shrink-0" /> {f}
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
        <p className="text-center mt-10 text-muted-foreground text-xs">
          All plans require a 12-month commitment. Hosting, domain registration, and ongoing maintenance are included at no extra cost.
        </p>
      </div>
    </section>
    <CTABlock />
  </main>
);

export default Plans;
