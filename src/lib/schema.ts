import { z } from "zod";

const trimmedString = (label: string, min = 1, max = 100) =>
  z
    .string()
    .transform((v) => v.trim())
    .refine((v) => v.length >= min, { message: `${label} is required` })
    .refine((v) => v.length <= max, {
      message: `${label} must be ${max} characters or less`,
    });

const optionalTrimmedString = (max = 100) =>
  z
    .string()
    .transform((v) => v.trim())
    .refine((v) => v.length <= max, {
      message: `Must be ${max} characters or less`,
    })
    .optional()
    .or(z.literal(""));

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneSchema = z
  .string()
  .transform((v) => v.trim())
  .refine((v) => v.length > 0, { message: "Phone number is required" })
  .refine((v) => /^[0-9+\-()\s]+$/.test(v), {
    message: "Enter a valid phone number",
  })
  .refine((v) => v.replace(/\D/g, "").length >= 10, {
    message: "Phone number must include at least 10 digits",
  })
  .refine((v) => v.length <= 25, {
    message: "Phone number must be 25 characters or less",
  });

const ServiceEnum = z.enum([
  "websites",
  "branding",
  "illustration",
  "seo",
  "social",
  "photography",
  "various",
  "unsure",
  "other",
]);

const BudgetEnum = z.enum([
  "under-1000",
  "1000-3000",
  "3000-5000",
  "5000-plus",
  "unsure",
]);

const TimelineEnum = z.enum([
  "asap",
  "within-1-month",
  "1-3-months",
  "3-plus-months",
  "unsure",
]);

const optionalBudgetSchema = z.preprocess(
  (value) => (value === "" ? undefined : value),
  BudgetEnum.optional(),
);

const optionalTimelineSchema = z.preprocess(
  (value) => (value === "" ? undefined : value),
  TimelineEnum.optional(),
);

export const ContactFormSchema = z.object({
  name: trimmedString("Name", 1, 80),

  phone: phoneSchema,

  email: z
    .string()
    .transform((v) => v.trim())
    .refine((v) => v.length > 0, { message: "Email is required" })
    .refine((v) => emailRegex.test(v), {
      message: "Enter a valid email address",
    })
    .refine((v) => v.length <= 254, {
      message: "Email must be 254 characters or less",
    }),

  business: trimmedString("Business name", 1, 80),

  service: ServiceEnum,

  message: z
    .string()
    .transform((v) => v.trim())
    .refine((v) => v.length >= 10, {
      message: "Message must be at least 10 characters",
    })
    .refine((v) => v.length <= 2000, {
      message: "Message must be 2000 characters or less",
    }),

  website: optionalTrimmedString(200),
  budget: optionalBudgetSchema,
  timeline: optionalTimelineSchema,
  honeypot: z.literal(""),
});
