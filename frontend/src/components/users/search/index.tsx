import { useState } from "react";

import { Input } from "./input";
import { Results } from "./results";
import { useDebounce } from "@/hooks/use-debounce";

export const Search = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  return (
    <section className="space-y-6">
      <Input value={query} onChange={setQuery} />

      <Results query={debouncedQuery} />
    </section>
  );
};