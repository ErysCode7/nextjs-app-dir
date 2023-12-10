"use client";

import { useGetUserById } from "@/lib/tanstack-query/users/queries";
import { useSearchParams } from "next/navigation";

type Props = {};

const UsersMainContent = (props: Props) => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("id") || "";

  const { data: user, isLoading } = useGetUserById(userId);

  if (isLoading) {
    return (
      <div>
        <h1 className="text-7xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-7xl">{user?.name}</h1>
    </div>
  );
};

export default UsersMainContent;
