import { useMemo } from "react";

const useCurrentTeams = (teams, currentPage, itemsPerPage) => {
  const currentTeams = useMemo(
    () =>
      teams.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
    [teams, currentPage, itemsPerPage]
  );

  return currentTeams;
};

export default useCurrentTeams;
