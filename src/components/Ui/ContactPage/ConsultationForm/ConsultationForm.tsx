"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Upload } from "lucide-react";

const PROJECT_TYPES = [
  "Residential",
  "Commercial",
  "Industrial",
  "Infrastructure",
  "Institutional",
  "Other",
];

const SERVICES = [
  "Architecture",
  "Structural Engineering",
  "Civil Engineering",
  "MEP",
  "Project Management",
  "Survey",
  "BIM",
  "Other",
];

type ConsultationFormValues = {
  fullName: string;
  company?: string;
  email: string;
  phone?: string;
  projectType: string;
  projectLocation?: string;
  services: string[];
  projectSize?: string;
  projectBudget?: string;
  message: string;
};

const inputClass =
  "w-full h-12 rounded-sm border border-brand-900/15 px-3.5 text-sm text-brand-900 placeholder:text-brand-300 outline-none transition focus:border-brand-900";

const labelClass = "block text-[13px] font-semibold text-brand-900 mb-2";

const ConsultationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormValues>();

  const onSubmit = async (data: ConsultationFormValues) => {
    // No consultation-request backend endpoint exists yet — this
    // confirms receipt locally rather than pretending to submit it.
    void data;
    await new Promise((resolve) => setTimeout(resolve, 400));
    toast.success("Thanks — we'll be in touch within 1 business day.");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-md border border-brand-900/10 bg-white p-8 sm:p-11"
    >
      <h2 className="mb-7 text-2xl font-semibold text-brand-900">
        Request a Consultation
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>
            Full Name <span className="text-gold-600">*</span>
          </label>
          <input
            className={inputClass}
            placeholder="Jane Rahman"
            {...register("fullName", { required: "Full name is required" })}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-red-500">{errors.fullName.message}</p>
          )}
        </div>
        <div>
          <label className={labelClass}>Company / Organization</label>
          <input className={inputClass} placeholder="Company name" {...register("company")} />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>
            Email Address <span className="text-gold-600">*</span>
          </label>
          <input
            type="email"
            className={inputClass}
            placeholder="you@company.com"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
            })}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Phone Number</label>
          <input className={inputClass} placeholder="+880 XXX XXXXXXX" {...register("phone")} />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>
            Project Type <span className="text-gold-600">*</span>
          </label>
          <select
            defaultValue=""
            className={`${inputClass} text-brand-900`}
            {...register("projectType", { required: "Select a project type" })}
          >
            <option value="" disabled>
              Select project type
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className="mt-1.5 text-xs text-red-500">{errors.projectType.message}</p>
          )}
        </div>
        <div>
          <label className={labelClass}>Project Location</label>
          <input className={inputClass} placeholder="City, Country" {...register("projectLocation")} />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass}>
          Services Required <span className="text-gold-600">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {SERVICES.map((service) => (
            <label key={service} className="flex items-center gap-2 text-[13.5px] text-brand-900">
              <input
                type="checkbox"
                value={service}
                className="h-4 w-4 rounded-sm border-brand-900/30 text-brand-900 focus:ring-brand-900"
                {...register("services", { required: "Select at least one service" })}
              />
              {service}
            </label>
          ))}
        </div>
        {errors.services && (
          <p className="mt-1.5 text-xs text-red-500">{errors.services.message}</p>
        )}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Estimated Project Size</label>
          <input className={inputClass} placeholder="e.g. 25,000 sq ft" {...register("projectSize")} />
        </div>
        <div>
          <label className={labelClass}>Project Budget</label>
          <input
            className={inputClass}
            placeholder="e.g. $500,000 – $1M"
            {...register("projectBudget")}
          />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass}>
          Tell Us About Your Project <span className="text-gold-600">*</span>
        </label>
        <textarea
          rows={4}
          className="w-full rounded-sm border border-brand-900/15 px-3.5 py-3 text-sm text-brand-900 placeholder:text-brand-300 outline-none transition focus:border-brand-900"
          placeholder="Describe your project goals, timeline, and any specific requirements…"
          {...register("message", { required: "Please tell us about your project" })}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>}
      </div>

      <div className="mt-5">
        <label className={labelClass}>Upload Project Documents</label>
        <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-brand-900/25 bg-brand-50 px-6 py-7 text-center text-[13px] text-brand-500 transition hover:border-brand-900/40">
          <Upload size={20} className="text-gold-600" />
          Drag files here or click to browse
          <input type="file" multiple className="hidden" />
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-7 w-full rounded-sm bg-brand-900 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-brand-800 disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Request Consultation"}
      </button>
    </form>
  );
};

export default ConsultationForm;
