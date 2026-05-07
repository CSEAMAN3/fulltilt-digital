import ContactForm from "@/src/components/ContactForm";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      <div className="min-h-100 px-8 py-60 text-center bg-linear-to-b from-brand-main to-transparent">
        <h1 className="text-balance mb-8 gradient-heading text-[40px] sm:text-[60px] max-w-[18ch] mx-auto leading-none font-bold">
          Let&#39;s talk about your project
        </h1>
        <p className="text-balance max-w-[80ch] mx-auto font-light">
          Tell us a bit about your business, what you&#39;re looking to achieve
          and how we can help. We&#39;ll review your enquiry and come back to
          you to discuss the next steps.
        </p>
      </div>
      <div className="px-8">
        <div className="bg-white p-8 relative -top-32 mx-auto shadow-lg max-w-240 border border-brand-main/50 rounded-sm">
          <h2 className="text-2xl text-balance mb-2 font-semibold max-w-3xl mx-auto">
            Contact us today
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className=" max-w-[60ch] mb-8 font-light">
              Whether you&#39;re ready to get started or just exploring your
              options, we&#39;re happy to talk things through and point you in
              the right direction.
            </p>
          </div>
          <ContactForm />
          <div className="text-xs mt-8 grid gap-2 max-w-3xl mx-auto">
            <p className="font-light">
              We always aim to respond to any enquiry within 24 hours Monday to
              Friday and within 48 hours if sent on a Saturday or Sunday.
            </p>
            <p className="font-light">
              We&#39;ll only ever contact you with regards to your enquiry. For
              more information you can read our privacy policy{" "}
              <Link
                href={"/"}
                className="font-bold text-accent-one-dark underline hover:text-accent-one transition-colors duration-300"
              >
                here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
