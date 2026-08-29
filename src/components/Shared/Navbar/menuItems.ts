export interface MenuItem {
  display: string;
  href: string;
  children?: MenuItem[];
}

export const MENU_ITEMS: MenuItem[] = [
  { display: "Home", href: "/" },
  { display: "Services", href: "/services" },
  { display: "Projects", href: "/projects" },
  { display: "About Us", href: "/about" },
  { display: "Contact", href: "/contact" },
];

// TODO: replace with the firm's real contact details
export const CONTACT_PHONE = "+880 XXX XXXXXXX";
export const CONTACT_EMAIL = "info@company.com";
export const OFFICE_ADDRESS = "[Company Address], Dhaka, Bangladesh";
export const OPEN_HOURS = "Sunday – Thursday, 9:00 AM – 6:00 PM";
