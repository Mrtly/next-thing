"use client"

import Link from 'next/link'
import { usePathname } from "next/navigation";

type NavLinkProps = {
  to: string,
  displayText: string
}

export default function SideNavLink(props: NavLinkProps) {
const pathname = usePathname();
  
  return (
    <Link href={props.to} 
      className={pathname == props.to ? "text-bark px-1 lg:px-3 py-2 border-b border-matcha block w-max font-semibold underline" : 
      "text-bark px-1 lg:px-3 py-2 border-b border-matcha block w-max hover:underline "}>
      {props.displayText}
    </Link>
  );
}
