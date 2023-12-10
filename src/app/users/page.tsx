import { QUERY_KEYS } from "@/lib/tanstack-query/query-keys";
import { getAllUsers } from "@/services/users";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import dynamic from "next/dynamic";

const UsersList = dynamic(() => import("@/components/users-list/users-list"));
const UsersMainContent = dynamic(
  () => import("@/components/users-list/users-main-content")
);

const UsersPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.GET_USERS],
    queryFn: () => getAllUsers(),
  });

  return (
    <div className="flex items-center">
      <div className="flex flex-col gap-3 mt-1">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <UsersList />
        </HydrationBoundary>
      </div>
      <UsersMainContent />
    </div>
  );
};

export default UsersPage;
