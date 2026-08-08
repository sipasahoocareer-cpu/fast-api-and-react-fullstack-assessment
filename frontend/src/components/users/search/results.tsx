import { useEffect, useState } from "react";

import type { User } from "@/services/api/users";
import { searchUsers } from "@/services/api/users";
import { UsersList } from "../list";
import { Loading } from "../list/loading";
import { Empty } from "../list/empty";

type Props = {
  query: string;
};

export const Results = ({ query }: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query || query.trim().length < 3) {
      setUsers([]);
      setError(null);
      setLoading(false);
      return;
    }

    let isActive = true;

    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const results = await searchUsers(query.trim());

        if (!isActive) {
          return;
        }

        setUsers(results);
      } catch (err) {
        if (!isActive) {
          return;
        }

        setError(
          err instanceof Error
            ? err.message
            : "Unable to load users. Please try again."
        );
        setUsers([]);
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    fetchUsers();

    return () => {
      isActive = false;
    };
  }, [query]);

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-sm text-red-700">
        {error}
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  return <UsersList users={users} />;
};
