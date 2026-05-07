import ServicesSlider from "./ServicesSlider";

export default function HomeServicesSection() {
  return (
    <div className="max-w-300 mx-auto px-8 py-16 sm:py-24">
      <div className="">
        <h2 className="font-bold text-4xl mb-4 tracking-tight text-balance">
          <span className="block text-2xl mb-2">Made to work</span>
          Designed to generate enquiries
        </h2>
        <p className="font-light max-w-[60ch]">
          Everything we offer is designed to support your growth. From websites
          and branding to content and SEO, our services work together to help
          your business get found, build trust and generate more enquiries.
        </p>
        <ServicesSlider />
      </div>
    </div>
  );
}
