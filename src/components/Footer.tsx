import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-transparent to-brand-main py-16">
      <div className=" max-w-300 mx-auto px-8">
        <Link href="/" className="mb-4 block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.svg"
            alt="fulltilt digital logo"
            className="w-50 h-auto"
          />
        </Link>
        <h6 className="text-lg mb-8 gradient-subheading w-fit font-bold tracking-tight">
          Built for growth. Built to perform.
        </h6>
        <div className="mb-8">
          <address className="not-italic grid sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr] gap-y-4 sm:gap-y-12 gap-x-16 items-end text-lg">
            <div>
              <p>Fulltilt Digital Ltd</p>
              <p>
                The Union Building
                <br /> 51-59 Rose Lane <br /> Norwich, NR1 1BY
              </p>
            </div>
            <div>
              <a
                href="tel:01603511962"
                aria-label="Call Fulltilt Digital on 01603 511962"
                className="block text-xl hover:text-brand-main-dark transition-colors duration-300"
              >
                01603 511962
              </a>
              <a
                href="mailto:hello@fulltiltdigital.co.uk"
                className="block text-xl hover:text-brand-main-dark transition-colors duration-300"
              >
                hello@fulltiltdigital.co.uk
              </a>
            </div>
            <div>
              <Link
                href={"/contact"}
                className="text-3xl font-bold gradient-link flex gap-4 group tracking-tight"
              >
                Let&#39;s Talk
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/arrow.svg"
                  alt=""
                  width={10}
                  style={{ width: "24px", height: "auto" }}
                  className="group-hover:-rotate-45 transition-all duration-300"
                />
              </Link>
            </div>
          </address>
        </div>
        <div className="mb-8">
          <h6 className="mb-2">Find us on social</h6>
          <div className="flex gap-2">
            <Link href={"/"}>
              <FaLinkedin
                size={32}
                className="hover:text-brand-main-dark transition-colors duration-300"
              />
            </Link>
            <Link href={"/"}>
              <FaFacebookSquare
                size={32}
                className="hover:text-brand-main-dark transition-colors duration-300"
              />
            </Link>
            <Link href={"/"}>
              <FaInstagramSquare
                size={32}
                className="hover:text-brand-main-dark transition-colors duration-300"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2 mb-4 text-sm">
          <Link
            href={"/"}
            className="block hover:text-brand-main-dark transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href={"/"}
            className="block hover:text-brand-main-dark transition-colors duration-300"
          >
            Website Terms & Conditions
          </Link>
        </div>
        <div className="mb-4">
          <p className="text-sm text-balance">
            Registered in England and Wales: The Union Suite The Union Building,
            51-59 Rose Lane, Norwich, England, NR1 1BY
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2 text-sm">
          <p>©Fulltilt Digital Ltd</p>
          <p>Registered Number: 09374532</p>
          <p>VAT Number: 290744878</p>
        </div>
      </div>
    </footer>
  );
}
