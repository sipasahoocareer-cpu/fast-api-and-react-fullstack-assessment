import { UsersList } from "../list";

type Props = {
  query: string;
};

export const Results = ({ query }: Props) => {
  /**
   * ======================================================
   * TODO
   * ======================================================
   *
   * Implement the search workflow.
   *
   * Requirements
   *
   * - Search users whenever the query changes.
   *
   * - Use the provided searchUsers() API.
   *
   * - Show a loading state while fetching.
   *
   * - Show an empty state when no users are returned.
   *
   * - Handle API errors gracefully.
   *
   * - Do NOT send a request when the query is empty.
   *
   * Bonus
   *
   * - Only search when the query contains at least
   *   3 characters.
   */

  console.log(query);

  return <UsersList users={[]} />;
};
