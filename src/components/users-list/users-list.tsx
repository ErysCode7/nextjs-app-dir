"use client";

import { useGetUsers } from "@/lib/tanstack-query/users/queries";
import UserListItem from "./user-list-item";

const Users = () => {
  const { data: users, isLoading: isLoadingUsers } = useGetUsers();

  if (isLoadingUsers) {
    return (
      <div className="page-container">
        <h1 className="text-4xl">Loadings...</h1>
      </div>
    );
  }

  return (
    users &&
    users?.length > 0 &&
    users?.map((user) => {
      const { name, id } = user;
      return <UserListItem key={id} name={name} id={id} />;
    })
  );
};

export default Users;
