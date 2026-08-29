import Link from "next/link";
import { MapPin, Mail, PhoneCall, Clock } from "lucide-react";
import Logo from "../Logo/Logo";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  OFFICE_ADDRESS,
  OPEN_HOURS,
} from "../Navbar/menuItems";

/* ================= CONSTANTS ================= */
const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Architecture", href: "/services#architecture" },
  { label: "Structural Engineering", href: "/services#structural" },
  { label: "Civil Engineering", href: "/services#civil" },
  { label: "MEP Engineering", href: "/services#mep" },
  { label: "Project Management", href: "/services#project-management" },
];

/* ================= COMPONENT ================= */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-white/70">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-12 pb-14 lg:grid-cols-12">
          {/* BRAND */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex">
              <Logo variant="light" size="lg" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Integrated engineering, architecture, and civil consultancy
              services for residential, commercial, industrial, and
              infrastructure projects &mdash; from concept to completion.
            </p>
          </div>

          {/* LINK COLUMNS */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-8 lg:grid-cols-3">
            <div className="space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors duration-300 hover:text-gold-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white">
                Services
              </h3>
              <ul className="space-y-3">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors duration-300 hover:text-gold-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white">
                Get in Touch
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2.5 text-sm text-white/60">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-gold-400" />
                  {OFFICE_ADDRESS}
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-start gap-2.5 text-sm text-white/60 transition-colors duration-300 hover:text-gold-400"
                  >
                    <Mail size={15} className="mt-0.5 shrink-0 text-gold-400" />
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`}
                    className="flex items-start gap-2.5 text-sm text-white/60 transition-colors duration-300 hover:text-gold-400"
                  >
                    <PhoneCall size={15} className="mt-0.5 shrink-0 text-gold-400" />
                    {CONTACT_PHONE}
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/60">
                  <Clock size={15} className="mt-0.5 shrink-0 text-gold-400" />
                  {OPEN_HOURS}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
          <p className="text-xs text-white/40">
            &copy; {currentYear} Meridian Engineering &amp; Consultancy. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs text-white/40 hover:text-gold-400">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-xs text-white/40 hover:text-gold-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
