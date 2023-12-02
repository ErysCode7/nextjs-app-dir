import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "@/services/users";
import { User } from "@/services/users/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../query-keys";

// ============================================================
// USERS QUERIES
// ============================================================

export const useGetUsers = () => {
  return useQuery<User[]>({
    queryKey: [QUERY_KEYS.GET_USERS],
    queryFn: () => getAllUsers(),
  });
};

export const useGetUserById = (userId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_USER_BY_ID, userId],
    queryFn: () => getUserById(userId),
    enabled: !!userId,
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: User) => createUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_USERS],
      });
    },
    onError: () => {},
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: User) => updateUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_USERS],
      });
    },
    onError: () => {},
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string | number) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_USERS] });
    },
    onError: () => {},
  });
};
