"use client";

import { useGetUserById } from "@/lib/tanstack-query/users/queries";

const UserDetails = ({ params }: { params: { id: string } }) => {
  const userId = params.id || "";

  const { data: user, isLoading } = useGetUserById(userId);

  if (isLoading) {
    return (
      <div>
        <h1 className="text-7xl">Loadings...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-7xl">{user?.name}</h1>
    </div>
  );
};

export default UserDetails;
