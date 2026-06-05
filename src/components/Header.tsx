import Link from "next/link";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="px-8 py-8 ">
        <Link href="/" className="block w-fit">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-dark.svg"
            alt="fulltilt digital logo"
            className="w-50 h-auto"
          />
        </Link>
        <HeaderNav />
      </div>
    </header>
  );
}
