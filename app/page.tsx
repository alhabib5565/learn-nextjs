import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import desktopHero from "../public/hero-desktop.png";
import mobileHero from "../public/hero-mobile.png";
import Image from "next/image";
import AcmeLogo from "./ui/Logo";
import { lusitana } from "./lib/utils";

const HomePage = () => {
  return (
    <main>
      {/* logo section */}
      <div className="bg-blue-500 rounded-b-lg p-4 lg:p-8 text-white h-20 md:h-52 flex items-end">
        <AcmeLogo />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-8 py-14 w-full max-w-[1440px] mx-auto p-4">
        {/* text description section */}
        <div className="space-y-4">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-[150%]`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base w-fit"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        {/* image section */}
        <div>
          <Image
            src={desktopHero}
            alt="Hero image"
            className="hidden md:block"
          />
          <Image
            src={mobileHero}
            alt="Hero image"
            className="md:hidden mx-auto"
          />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
