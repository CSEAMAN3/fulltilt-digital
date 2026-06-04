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
      <div className="px-8 max-w-300 mx-auto mb-16">
        <h2 className="font-bold tracking-tight text-3xl sm:text-[40px] mbe-2">
          <span className="block w-fit text-2xl">Built for growth</span>
          Websites That Generate Enquiries
        </h2>
        <p className="font-light max-w-[80ch] text-pretty mb-4">
          Whether you&#39;re launching a new business or investing in long-term
          growth, our websites are designed to help you get found, build trust
          and generate more enquiries. Every website is bespoke, fast,
          mobile-first and built around the goals of your business.
        </p>
        <PricingSlider data="web" />
      </div>
      <div className="px-8 max-w-300 mx-auto mb-16">
        <h2 className="font-bold tracking-tight text-3xl sm:text-[40px] mbe-2">
          <span className="block w-fit text-2xl">Build Recognition</span>
          Brands That Get Remembered
        </h2>
        <p className="font-light max-w-[80ch] text-pretty mb-4">
          A strong brand helps customers recognise, trust and remember your
          business. From logos and visual identities to complete brand systems,
          we create brands that look professional, communicate clearly and
          support long-term growth.
        </p>
        <PricingSlider data="brand" />
      </div>
      <div className="px-8 max-w-300 mx-auto mb-16">
        <h2 className="font-bold tracking-tight text-3xl sm:text-[40px] mbe-2">
          <span className="block w-fit text-2xl">Bring It To Life</span>
          Visuals That Build Trust
        </h2>
        <p className="font-light max-w-[80ch] text-pretty mb-4">
          Professional photography and video help showcase the quality of your
          work, the people behind your business and the services you provide. We
          create authentic visual content designed to engage audiences and
          strengthen your online presence.
        </p>
        <PricingSlider data="photo" />
      </div>
      <div className="px-8 max-w-300 mx-auto mb-16">
        <h2 className="font-bold tracking-tight text-3xl sm:text-[40px] mbe-2">
          <span className="block w-fit text-2xl">Get Found</span>
          SEO That Builds Visibility
        </h2>
        <p className="font-light max-w-[80ch] text-pretty mb-4">
          Being online isn&#39;t enough if customers can&#39;t find you. Our SEO
          services are designed to improve visibility, attract the right traffic
          and help your business appear where potential customers are already
          searching.
        </p>
        <PricingSlider data="seo" />
      </div>
      <div className="px-8 max-w-300 mx-auto mb-16">
        <h2 className="font-bold tracking-tight text-3xl sm:text-[40px] mbe-2">
          <span className="block w-fit text-2xl">Support Your Brand</span>
          Design That Delivers
        </h2>
        <p className="font-light max-w-[80ch] text-pretty mb-4">
          From marketing materials and social graphics to custom illustrations
          and branded assets, we create design that supports your business,
          strengthens your brand and helps you communicate more effectively.
        </p>
        <PricingSlider data="graphic" />
      </div>
      <div className="px-8 max-w-300 mx-auto mb-16">
        <h2 className="font-bold tracking-tight text-3xl sm:text-[40px] mbe-2">
          <span className="block w-fit text-2xl">Stay Visible</span>
          Content That Connects
        </h2>
        <p className="font-light max-w-[80ch] text-pretty mb-4">
          Consistent content helps businesses stay relevant, build trust and
          remain visible to potential customers. We create content designed to
          showcase your expertise, tell your story and support your wider
          marketing efforts.
        </p>
        <PricingSlider data="social" />
      </div>
    </main>
  );
}
