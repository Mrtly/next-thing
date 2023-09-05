import Link from "next/link";
import NextLogo from "../components/logo";

import Image from "next/image";
import nextlogo from "../assets/next.svg";
import reactlogo from "../assets/react.svg";
import vercellogo from "../assets/vercel.svg";

export default function TopNav() {
  return (
    <div className="flex h-24 items-center bg-bark px-10 text-white shadow-lg">
      <div className="flex w-screen items-center justify-between">
        <div>
          <span className="font-ubuntu text-2xl font-semibold transition-all duration-100 hover:text-rose">
            <Link href="/">Next Adventures</Link>
          </span>
          <span className="ml-4 text-sm tracking-wider text-white">
            a collection of components & data viz samples with React & Next
          </span>
        </div>
        <div className="hidden items-center lg:flex">
          {[reactlogo, nextlogo, vercellogo].map((item, index) => {
            return (
              <Image
                key={index}
                src={item}
                className="ml-4 h-8 w-12"
                alt="logo"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
