import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-narrow px-6 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-lg font-bold mb-3">
            SVV <span className="text-gradient">Digital</span>
          </h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Managed ecommerce systems built for long-term retail growth.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider opacity-60">Company</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about" className="hover:opacity-100 transition-opacity">About</Link></li>
            <li><Link to="/portfolio" className="hover:opacity-100 transition-opacity">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider opacity-60">Services</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/solutions" className="hover:opacity-100 transition-opacity">Ecommerce Solutions</Link></li>
            <li><Link to="/plans" className="hover:opacity-100 transition-opacity">Subscription Plans</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider opacity-60">Get in Touch</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>hello@svvdigital.com</li>
            <li>+91 99999 99999</li>
          </ul>
        </div>
      </div>
      <div className="mt-14 pt-6 border-t border-primary-foreground/10 text-xs opacity-50 text-center">
        © {new Date().getFullYear()} SVV Digital. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
