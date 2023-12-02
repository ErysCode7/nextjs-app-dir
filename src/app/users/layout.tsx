import { QueryProdiver } from "@/lib/tanstack-query/query-provider";

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QueryProdiver>{children}</QueryProdiver>;
}
