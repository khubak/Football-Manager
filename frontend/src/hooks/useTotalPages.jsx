import { useMemo } from "react";

const useTotalPages = (teams, itemsPerPage) => {
  const totalPages = useMemo(
    () => Math.ceil(teams.length / itemsPerPage),
    [teams, itemsPerPage]
  );

  return totalPages;
};

export default useTotalPages;
