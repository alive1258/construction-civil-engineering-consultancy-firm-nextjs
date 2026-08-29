import { MapPin, Mail, Phone, Clock, type LucideIcon } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  OFFICE_ADDRESS,
  OPEN_HOURS,
} from "@/src/components/Shared/Navbar/menuItems";

const ITEMS: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: MapPin, label: "Office", value: OFFICE_ADDRESS },
  { icon: Mail, label: "Email", value: CONTACT_EMAIL },
  { icon: Phone, label: "Phone", value: CONTACT_PHONE },
  { icon: Clock, label: "Working Hours", value: OPEN_HOURS },
];

const ContactInfoCard = () => {
  return (
    <div className="rounded-md border border-brand-900/10 bg-white p-8">
      <h3 className="mb-1 text-[17px] font-semibold text-brand-900">Contact Information</h3>
      <div className="mt-4 flex flex-col">
        {ITEMS.map(({ icon: Icon, label, value }, i) => (
          <div
            key={label}
            className={`flex items-start gap-3.5 py-4 ${
              i !== ITEMS.length - 1 ? "border-b border-brand-900/10" : ""
            }`}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-gold-500/15 text-gold-600">
              <Icon size={19} />
            </span>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wide text-brand-400">
                {label}
              </div>
              <div className="mt-1 text-[14.5px] font-semibold text-brand-900">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoCard;
