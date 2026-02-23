const CTABlock = () => (
  <section className="section-padding bg-primary text-primary-foreground">
    <div className="container-narrow text-center max-w-2xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
        Ready to Build Your Online Store?
      </h2>
      <p className="text-sm md:text-base opacity-70 mb-8 leading-relaxed">
        Let's discuss how a managed ecommerce system can give your retail business the online presence it deserves — with ongoing support you can count on.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity"
        >
          Chat on WhatsApp
        </a>
        <a
          href="/contact"
          className="border border-primary-foreground/20 font-semibold px-6 py-3 rounded-lg text-sm hover:bg-primary-foreground/10 transition-colors"
        >
          Book Free Consultation
        </a>
      </div>
    </div>
  </section>
);

export default CTABlock;
