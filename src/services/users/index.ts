import axios from "axios";
import { User } from "./types";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// GET ALL USERS
export const getAllUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (err) {
    console.error(`Error fetching all users`, err);
    return [];
  }
};

// GET SINGLE USER
export const getUserById = async (
  id: string | number
): Promise<User | null> => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (err) {
    console.error(`Error fetching user with ID ${id}:`, err);
    return null;
  }
};

// CREATE USER
export const createUser = async (user: User) => {
  try {
    const response = await axios.post(`${BASE_URL}`, user);
    return response.data;
  } catch (err) {
    console.error(`Error creating a user`, err);
    return err;
  }
};

// UPDATE USER
export const updateUser = async (user: User) => {
  try {
    const response = await axios.put(`${BASE_URL}/${user?.id}`, user);
    return response.data;
  } catch (err) {
    console.error(`Error updating a user`, err);
    return err;
  }
};

// DELETE USER
export const deleteUser = async (id: string | number) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (err) {
    return err;
  }
};
