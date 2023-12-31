import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Generated by create next app",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
