import PricingSlider from "@/src/components/PricingSlider";

export default function PricingPage() {
  return (
    <main>
      <div className="bg-linear-to-b from-brand-main to-transparent">
        <div className="text-center grid place-content-center px-8 pt-60 pb-40">
          <h1 className="font-bold text-balance mb-4 max-w-[24ch] text-[40px] sm:text-[60px] leading-none tracking-tight">
            Flexible Solutions Built Around Your Business
          </h1>
          <p className="font-light text-balance mb-8 max-w-[60ch] mx-auto">
            No two businesses are the same, and neither are the solutions we
            provide. The pricing below offers a guide to our most popular
            services and packages, giving you a clearer idea of how we can help
            your business get found, build trust and generate more enquiries.
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-foreground/60">
              Scroll down to explore some of our popular packages.
            </p>

            <span className="block mt-4 animate-bounce">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/arrow.svg"
                alt=""
                width={10}
                style={{ width: "24px", height: "auto" }}
                className="rotate-90 transition-all duration-300"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="px-8 max-w-300 mx-auto">
        <h2 className="font-bold text-xl">Website Pricing</h2>
        <p className="font-light">here is some text</p>
        <PricingSlider data="web" />
      </div>
      <div className="px-8 max-w-300 mx-auto">
        <h2 className="font-bold text-xl">Brand & Identity Pricing</h2>
        <p className="font-light">here is some text</p>
        <PricingSlider data="brand" />
      </div>
      <div className="px-8 max-w-300 mx-auto">
        <h2 className="font-bold text-xl">
          Photography & Video Production Pricing
        </h2>
        <p className="font-light">here is some text</p>
        <PricingSlider data="photo" />
      </div>
      <div className="px-8 max-w-300 mx-auto">
        <h2 className="font-bold text-xl">
          Search Engine Optimisation Pricing
        </h2>
        <p className="font-light">here is some text</p>
        <PricingSlider data="seo" />
      </div>
      <div className="px-8 max-w-300 mx-auto">
        <h2 className="font-bold text-xl">Illustration & Design Pricing</h2>
        <p className="font-light">here is some text</p>
        <PricingSlider data="graphic" />
      </div>
      <div className="px-8 max-w-300 mx-auto">
        <h2 className="font-bold text-xl">Social Content Pricing</h2>
        <p className="font-light">here is some text</p>
        <PricingSlider data="social" />
      </div>
    </main>
  );
}
