import logo from "../../../public/next.svg";
import Image from "next/image";

export default function Logo() {
  return <Image src={logo} className="h-12 w-12 animate-wiggle" alt="logo" />;
}
