"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "../Logo/Logo";
import MobileMenuSheet from "../MobileMenuSheet/MobileMenuSheet";
import { MENU_ITEMS } from "./menuItems";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState<string | null>(null);
  const pathname = usePathname();

  /* close the mobile drawer whenever the route changes */
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* stop body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full border-b border-brand-900/10 bg-white transition ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="container flex items-center justify-between h-[92px]">
          <Link href="/" className="shrink-0">
            <Logo variant="dark" />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {MENU_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b-2 pb-1 text-sm font-medium transition ${
                    isActive
                      ? "border-gold-500 text-brand-900 font-semibold"
                      : "border-transparent text-brand-700 hover:text-brand-900"
                  }`}
                >
                  {item.display}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex h-[46px] items-center rounded-sm bg-brand-900 px-6 text-[13.5px] font-semibold text-white transition hover:bg-brand-800"
            >
              Request a Consultation
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="flex h-10 w-10 items-center justify-center rounded-md text-brand-900 lg:hidden"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenuSheet isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* spacer so fixed header never overlaps page content */}
      <div className="h-[92px]" />
    </>
  );
};

export default Navbar;
