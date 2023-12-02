import Users from "@/components/users";
import { QUERY_KEYS } from "@/lib/tanstack-query/query-keys";
import { getAllUsers } from "@/services/users";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

const UsersPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.GET_USERS],
    queryFn: () => getAllUsers(),
  });

  return (
    <div className="py-10 flex flex-wrap items-center justify-between gap-3 gap-y-10 px-20">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Users />
      </HydrationBoundary>
    </div>
  );
};

export default UsersPage;
