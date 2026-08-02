import { useState } from "react";

import { Input } from "./input";
import { Results } from "./results";

export const Search = () => {
  const [query, setQuery] = useState("");

  /**
   * ======================================================
   * TODO
   * ======================================================
   *
   * Product Requirement
   *
   * The application should NOT send an API request on every
   * key stroke.
   *
   * Implement a reusable `useDebounce` hook.
   *
   * Requirements
   *
   * • Accept any value
   * • Accept delay in milliseconds
   * • Return the debounced value
   * • Cleanup pending timers
   *
   * Once implemented, pass the debounced value to
   * <Results /> instead of the raw query.
   *
   */

  return (
    <section className="space-y-6">
      <Input value={query} onChange={setQuery} />

      <Results query={query} />
    </section>
  );
};
