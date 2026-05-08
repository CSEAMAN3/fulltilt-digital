export default function page() {
  return (
    <main className="">
      {/* add structured data regards schemas - this was pasted from another page may be relevant */}
      <div className="bg-linear-to-b from-brand-main to-transparent">
        <div className="text-center grid place-content-center px-8 pt-60 pb-40">
          <h1 className="font-bold text-balance mb-4 max-w-[24ch] text-[40px] sm:text-[60px] leading-none tracking-tight">
            We Mean Business
          </h1>
          <p className="font-light text-balance mb-8 max-w-[60ch] mx-auto">
            We help local businesses grow online through bespoke websites,
            branding, content, visuals and SEO. All designed to work together
            and support your business long-term.
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-foreground/60">
              Scroll down to explore our services.
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
    </main>
  );
}
