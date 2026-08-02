import type { User } from "@/api/users";

type Props = {
  user: User;
};

export const Card = ({ user }: Props) => (
  <article className="rounded-lg border border-gray-200 p-4">
    <h2 className="font-semibold">{user.name}</h2>

    <p className="text-sm text-gray-600">{user.email}</p>

    <p className="text-sm text-gray-500">{user.city}</p>
  </article>
);
