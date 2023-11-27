"use client";

import { useRouter } from "next/navigation";

type NavLinkProps = {
  name: string;
  href: string;
};

const NavLink = ({ name, href }: NavLinkProps) => {
  const router = useRouter();

  return (
    <li
      className="lg:cursor-pointer lg:hover:text-sky-800 lg:hover:transition lg:hover:duration-300"
      onClick={() => router.push(href)}
    >
      {name}
    </li>
  );
};

export default NavLink;
