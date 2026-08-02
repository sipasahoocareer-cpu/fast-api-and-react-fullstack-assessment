import axios from "@/lib/axios";
import type { User } from "./users.types";

export const searchUsers = (query: string): Promise<User[]> =>
  axios.get("/users/search", {
    params: { q: query },
  });
