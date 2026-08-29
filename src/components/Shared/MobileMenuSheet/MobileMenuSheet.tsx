"use client";

import Link from "next/link";
import { X } from "lucide-react";
import Logo from "../Logo/Logo";
import { MENU_ITEMS } from "../Navbar/menuItems";

interface MobileMenuSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenuSheet = ({ isOpen, onClose }: MobileMenuSheetProps) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-95 bg-brand-900/40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* SHEET */}
      <div
        className={`fixed inset-x-0 top-0 z-95 max-w-md mx-auto h-full max-h-screen w-full bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-900/10">
          <Logo variant="dark" size="sm" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-brand-900 transition hover:bg-brand-50"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex h-[calc(100%-77px)] flex-col justify-between overflow-y-auto px-6 py-6">
          <nav className="flex flex-col gap-1">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="rounded-md px-2 py-3 text-base font-medium text-brand-900 transition hover:bg-brand-50"
              >
                {item.display}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full rounded-sm bg-brand-900 py-3.5 text-center font-semibold text-white transition hover:bg-brand-800"
          >
            Request a Consultation
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenuSheet;
