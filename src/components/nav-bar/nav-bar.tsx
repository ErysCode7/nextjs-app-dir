import { PUBLIC_ASSETS } from "@/utils/constants";
import Image from "next/image";
import NavLink from "../nav-link/nav-link";

const Navbar = () => {
  const LINKS = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Users",
      href: "/users",
    },
  ];

  return (
    <nav className="h-20 bg-slate-100 flex items-center justify-between px-5 lg:px-12 xl:px-20">
      <Image
        src={`${PUBLIC_ASSETS.images}/next.svg`}
        alt="Next.js Logo"
        priority
        width={100}
        height={100}
      />
      <ul className="flex items-center gap-3">
        {LINKS.map((link) => {
          const { name } = link;

          return <NavLink key={name} {...link} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
