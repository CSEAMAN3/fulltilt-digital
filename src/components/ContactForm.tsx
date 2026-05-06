"use client";

import { useState } from "react";
import { useForm, SubmitHandler, FieldPath, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import { sendEmail } from "../app/_actions";
import { ContactFormSchema } from "../lib/schema";

export type ContactFormInputs = z.input<typeof ContactFormSchema>;
export type ContactFormOutput = z.output<typeof ContactFormSchema>;

const steps = [
  "Service",
  "Project",
  "Business",
  "Contact",
  "Details",
  "Review",
] as const;

const serviceOptions = [
  { value: "websites", label: "Website + Digital" },
  { value: "branding", label: "Brand + Identity" },
  { value: "photography", label: "Video + Photography" },
  { value: "social", label: "Social + Content" },
  { value: "illustration", label: "Design + Illustration" },
  { value: "seo", label: "SEO" },
  { value: "various", label: "Multiple services" },
  { value: "unsure", label: "Not sure yet" },
  { value: "other", label: "Other" },
] as const;

const budgetOptions = [
  { value: "under-1000", label: "Under £1,000" },
  { value: "1000-3000", label: "£1,000 - £3,000" },
  { value: "3000-5000", label: "£3,000 - £5,000" },
  { value: "5000-plus", label: "£5,000+" },
  { value: "unsure", label: "Not sure yet" },
] as const;

const timelineOptions = [
  { value: "asap", label: "ASAP" },
  { value: "within-1-month", label: "Within 1 month" },
  { value: "1-3-months", label: "1-3 months" },
  { value: "3-plus-months", label: "3+ months" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export default function ContactForm() {
  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    control,
    trigger,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs, unknown, ContactFormOutput>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      service: "other",
      honeypot: "",
      phone: "",
      website: "",
      business: "",
      name: "",
      email: "",
      message: "",
      budget: "",
      timeline: "",
    },
    mode: "onTouched",
  });

  const watchedValues = useWatch({ control });

  const {
    service,
    business,
    website,
    name,
    email,
    phone,
    budget,
    timeline,
    message,
  } = watchedValues;

  const progress = ((step + 1) / steps.length) * 100;

  const fieldsByStep: FieldPath<ContactFormInputs>[][] = [
    ["service"],
    ["message"],
    ["business", "website"],
    ["name", "email", "phone"],
    [],
    [],
  ];

  const nextStep = async () => {
    const fields = fieldsByStep[step];

    if (fields.length > 0) {
      const valid = await trigger(fields);
      if (!valid) return;
    }

    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const processForm: SubmitHandler<ContactFormOutput> = async (data) => {
    if (step !== steps.length - 1) return;

    const result = await sendEmail(data);

    if (result?.success) {
      toast.success("Enquiry sent");
      reset({
        service: "other",
        honeypot: "",
        phone: "",
        website: "",
        business: "",
        name: "",
        email: "",
        message: "",
        budget: "",
        timeline: "",
      });
      setStep(0);
      return;
    }

    console.log("sendEmail error", result?.error);
    toast.error("Something went wrong");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <p className="mb-2 text-sm font-bold">
          Step {step + 1} of {steps.length}
        </p>

        <div className="h-2 w-full overflow-hidden rounded-full bg-brand-main/10">
          <motion.div
            className="h-full bg-brand-main"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <form
        onSubmit={handleSubmit(processForm)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && step !== steps.length - 1) {
            const target = e.target as HTMLElement;
            if (target.tagName !== "TEXTAREA") {
              e.preventDefault();
            }
          }
        }}
      >
        {/* honeypot */}
        <div className="absolute -left-2499.75 top-auto h-px w-px overflow-hidden">
          <label htmlFor="honeypot">Leave this field empty</label>
          <input
            id="honeypot"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("honeypot")}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="min-h-90"
          >
            {step === 0 && (
              <div>
                <h2 className="mb-3 text-3xl font-bold">
                  What can we help you with?
                </h2>
                <p className="mb-8 max-w-[60ch] font-light">
                  Choose the service you&#39;re most interested in. If
                  you&#39;re not sure yet, that&#39;s fine too.
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {serviceOptions.map((option) => {
                    const isSelected = service === option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setValue("service", option.value, {
                            shouldValidate: true,
                            shouldTouch: true,
                            shouldDirty: true,
                          });
                        }}
                        className={`rounded-sm border-2 px-4 py-4 text-left transition-colors duration-300 ${
                          isSelected
                            ? "border-brand-main bg-brand-main/10"
                            : "border-brand-main/0 hover:border-brand-main"
                        }`}
                      >
                        <span className="font-bold">{option.label}</span>
                      </button>
                    );
                  })}
                </div>

                {errors.service?.message && (
                  <p className="mt-3 text-sm text-red-400">
                    {errors.service.message}
                  </p>
                )}
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="mb-3 text-3xl font-bold">
                  Tell us about your project
                </h2>
                <p className="mb-8 max-w-[60ch] font-light">
                  What are you looking to achieve? What challenge are you trying
                  to solve?
                </p>

                <label htmlFor="message" className="mb-1 block w-fit font-bold">
                  Project details
                </label>
                <textarea
                  id="message"
                  rows={10}
                  className="max-h-63 w-full border-2 border-accent-one p-2 outline-0"
                  {...register("message")}
                />
                {errors.message?.message && (
                  <p className="ml-1 mt-1 text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="mb-3 text-3xl font-bold">
                  A few details about your business
                </h2>
                <p className="mb-8 max-w-[60ch] font-light">
                  This helps us understand where you&#39;re at and how we can
                  help.
                </p>

                <div className="grid gap-8">
                  <div>
                    <label
                      htmlFor="business"
                      className="mb-1 block w-fit font-bold"
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      className="max-w-[60ch] w-full border-2 border-transparent border-b-brand-main p-2 outline-0"
                      {...register("business")}
                    />
                    {errors.business?.message && (
                      <p className="ml-1 mt-1 text-sm text-red-400">
                        {errors.business.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="mb-1 block w-fit font-bold"
                    >
                      Current Website{" "}
                      <span className="font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="website"
                      className="max-w-[60ch] w-full border-2 border-transparent border-b-brand-main p-2 outline-0"
                      {...register("website")}
                    />
                    {errors.website?.message && (
                      <p className="ml-1 mt-1 text-sm text-red-400">
                        {errors.website.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="mb-3 text-3xl font-bold">
                  How can we reach you?
                </h2>
                <p className="mb-8 max-w-[60ch] font-light">
                  Leave your details below and we&#39;ll get back to you as soon
                  as we can.
                </p>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block w-fit font-bold"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="name"
                      className="w-full border-2 border-transparent border-b-brand-main p-2 outline-0"
                      {...register("name")}
                    />
                    {errors.name?.message && (
                      <p className="ml-1 mt-1 text-sm text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1 block w-fit font-bold"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      autoComplete="tel"
                      className="w-full border-2 border-transparent border-b-brand-main p-2 outline-0"
                      {...register("phone")}
                    />
                    {errors.phone?.message && (
                      <p className="ml-1 mt-1 text-sm text-red-400">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="email"
                      className="mb-1 block w-fit font-bold"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      autoComplete="email"
                      className="max-w-[60ch] w-full border-2 border-transparent border-b-brand-main p-2 outline-0"
                      {...register("email")}
                    />
                    {errors.email?.message && (
                      <p className="ml-1 mt-1 text-sm text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="mb-3 text-3xl font-bold">
                  A couple more details
                </h2>
                <p className="mb-8 max-w-[60ch] font-light">
                  These are optional, but they help us reply more usefully.
                </p>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-4 block w-fit font-bold"
                    >
                      Budget <span className="font-normal">(optional)</span>
                    </label>
                    <select
                      id="budget"
                      className="selectPadding w-full border-2 border-transparent border-b-brand-main outline-0"
                      {...register("budget")}
                    >
                      <option value="">Select a budget</option>
                      {budgetOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="mb-4 block w-fit font-bold"
                    >
                      Timeline <span className="font-normal">(optional)</span>
                    </label>
                    <select
                      id="timeline"
                      className="selectPadding w-full border-2 border-transparent border-b-brand-main outline-0"
                      {...register("timeline")}
                    >
                      <option value="">Select a timeline</option>
                      {timelineOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div>
                <h2 className="mb-3 text-3xl font-bold">Review your enquiry</h2>
                <p className="mb-8 max-w-[60ch] font-light">
                  Here&#39;s a quick summary before you send it through.
                </p>

                <div className="grid gap-4">
                  <div>
                    <p className="font-bold">Service</p>
                    <p>
                      {serviceOptions.find((option) => option.value === service)
                        ?.label || "Not provided"}
                    </p>
                  </div>

                  <div>
                    <p className="font-bold">Business</p>
                    <p>{business || "Not provided"}</p>
                  </div>

                  <div>
                    <p className="font-bold">Website</p>
                    <p>{website || "Not provided"}</p>
                  </div>

                  <div>
                    <p className="font-bold">Name</p>
                    <p>{name || "Not provided"}</p>
                  </div>

                  <div>
                    <p className="font-bold">Email</p>
                    <p>{email || "Not provided"}</p>
                  </div>

                  <div>
                    <p className="font-bold">Phone</p>
                    <p>{phone || "Not provided"}</p>
                  </div>

                  <div>
                    <p className="font-bold">Budget</p>
                    <p>
                      {budgetOptions.find((option) => option.value === budget)
                        ?.label || "Not provided"}
                    </p>
                  </div>

                  <div>
                    <p className="font-bold">Timeline</p>
                    <p>
                      {timelineOptions.find(
                        (option) => option.value === timeline,
                      )?.label || "Not provided"}
                    </p>
                  </div>

                  <div>
                    <p className="font-bold">Project</p>
                    <p>{message || "Not provided"}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={prevStep}
            disabled={step === 0 || isSubmitting}
            className="rounded-sm border border-brand-main-dark px-6 py-3 font-bold disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
          >
            Back
          </button>

          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                nextStep();
              }}
              className="cursor-pointer rounded-sm bg-brand-main-dark px-8 py-4 font-bold text-white transition-colors duration-300 hover:bg-brand-main hover:text-black"
            >
              Continue
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit(processForm, () =>
                toast.error("Please check the form details and try again."),
              )}
              className="cursor-pointer rounded-sm bg-brand-main-dark px-8 py-4 font-bold text-white transition-colors duration-300 hover:bg-brand-main hover:text-black"
              disabled={isSubmitting}
            >
              {isSubmitting ? "sending..." : "Send Message"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
