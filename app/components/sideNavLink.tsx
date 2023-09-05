"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  to: string;
  displayText: string;
};

export default function SideNavLink(props: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={props.to}
      className={
        pathname == props.to
          ? "block w-max px-1 py-2 font-semibold text-bark underline lg:px-3"
          : "block w-max px-1 py-2 text-bark hover:underline lg:px-3 "
      }
    >
      {props.displayText}
    </Link>
  );
}
