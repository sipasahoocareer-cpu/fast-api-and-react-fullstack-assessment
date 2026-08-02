import { Search as SearchUsers } from "@/components/users/search";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold">User Search</h1>

      <SearchUsers />
    </main>
  );
}
