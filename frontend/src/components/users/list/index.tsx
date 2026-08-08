import type { User } from "@/services/api/users";

import { Card } from "./card";
import { Empty } from "./empty";

type Props = {
  users: User[];
};

export const UsersList = ({ users }: Props) => {
  if (!users.length) {
    return <Empty />;
  }

  return (
    <div className="space-y-3">
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
