import SectionHeading from "@/components/SectionHeading";
import CTABlock from "@/components/CTABlock";

const projects = [
  {
    title: "Urban Thread — Retail Fashion Store",
    category: "Fashion & Apparel",
    desc: "A full-service fashion ecommerce store with 200+ products, integrated payment gateway, mobile-responsive design, and managed hosting. Monthly subscription includes seasonal design updates and product management support.",
    results: ["200+ products managed", "99.9% uptime", "40% increase in mobile conversions"],
  },
  {
    title: "VoltEdge — Electronics Store",
    category: "Consumer Electronics",
    desc: "A high-performance electronics store with advanced filtering, product comparison features, and multi-gateway payment support. Full infrastructure management and security handled under subscription.",
    results: ["500+ SKUs", "Sub-2s page load time", "PCI-compliant payment setup"],
  },
  {
    title: "FreshBasket — Grocery Ecommerce",
    category: "Grocery & Essentials",
    desc: "A local grocery delivery platform with inventory management, delivery zone configuration, and real-time order tracking. Ongoing platform management and feature updates included monthly.",
    results: ["1,000+ orders/month", "Delivery zone management", "Automated inventory alerts"],
  },
];

const Portfolio = () => (
  <main>
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-narrow">
        <SectionHeading
          label="Our Work"
          title="Managed Ecommerce Projects"
          description="A selection of ecommerce stores we've built and continue to manage under our subscription model."
        />
        <div className="space-y-8">
          {projects.map((p) => (
            <div key={p.title} className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-secondary h-48 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">{p.category} — Preview</span>
              </div>
              <div className="p-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.category}</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {p.results.map((r) => (
                    <span key={r} className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full">{r}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CTABlock />
  </main>
);

export default Portfolio;
