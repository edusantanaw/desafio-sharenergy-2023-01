import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function usePaginate<T>(
  service: (atual: number) => Promise<T[]>,
  queryId: string
) {
  const [atualPage, setAtualPage] = useState<number>(0);

  const { data, isLoading } = useQuery(
    [queryId, atualPage],
    () => service(atualPage),
    {
      keepPreviousData: true,
      staleTime: 1000000,
    }
  );

  function next() {
    setAtualPage((actual) => actual + 1);
  }
  function prev() {
    if (atualPage > 0) setAtualPage((atual) => atual - 1);
  }

  function setPageByIndex(index: number) {
    setAtualPage(index);
  }

  return { next, prev, isLoading, data, atualPage, setPageByIndex };
}
