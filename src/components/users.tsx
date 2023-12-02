"use client";

import { useGetUsers } from "@/lib/tanstack-query/users/queries";

const Users = () => {
  const { data: users, isLoading: isLoadingUsers } = useGetUsers();

  if (isLoadingUsers) {
    return (
      <div className="page-container">
        <h1 className="text-4xl">Loading...</h1>
      </div>
    );
  }

  console.log({ users });

  return (
    <div>
      {users &&
        users?.length > 0 &&
        users?.map((user) => {
          return (
            <div key={user?.id}>
              <h3>{user.name}</h3>
            </div>
          );
        })}
    </div>
  );
};

export default Users;
