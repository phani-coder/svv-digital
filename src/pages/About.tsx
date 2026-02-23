import SectionHeading from "@/components/SectionHeading";
import CTABlock from "@/components/CTABlock";

const About = () => (
  <main>
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-narrow max-w-3xl mx-auto">
        <SectionHeading
          label="About Us"
          title="Your Long-Term Ecommerce Technology Partner"
        />
        <div className="prose prose-sm text-muted-foreground space-y-6 leading-relaxed">
          <p>
            SVV Digital was founded on a straightforward observation: retail businesses investing in ecommerce rarely receive the ongoing technical support they need after their store goes live. One-time development projects end abruptly, leaving business owners responsible for hosting renewals, security patches, and platform updates they were never equipped to manage.
          </p>
          <p>
            We built SVV Digital to solve that problem. Our managed ecommerce subscription model ensures that your online store receives continuous technical ownership — from initial setup through every stage of growth. We handle the infrastructure, security, payments, and platform updates so you can focus entirely on running your business.
          </p>
          <p>
            Our approach is structured and accountable. Every client receives a clearly defined scope of service, predictable monthly costs, and a dedicated point of contact for technical matters. There are no surprise invoices, no "additional charges" for routine maintenance, and no gaps in support.
          </p>
          <p>
            We work with retail businesses across India and international markets — from independent fashion brands to multi-category online stores. Whether you're launching your first online store or transitioning from an existing platform, we provide the technical foundation and ongoing management your business needs to sell online with confidence.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-6 text-center">
          {[
            { stat: "50+", label: "Stores Managed" },
            { stat: "99.9%", label: "Uptime Commitment" },
            { stat: "24/7", label: "Technical Support" },
          ].map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-xl p-8">
              <div className="font-display text-3xl font-bold text-accent mb-1">{s.stat}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CTABlock />
  </main>
);

export default About;
