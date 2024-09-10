import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTeams } from "../redux/slices/teams";

export const useFetchTeams = () => {
  const dispatch = useDispatch();

  const teams = useSelector((state) => state.teams.teams);
  const status = useSelector((state) => state.teams.status);
  const errors = useSelector((state) => state.teams.errors);

  useEffect(() => {
    dispatch(fetchAllTeams());
  }, [dispatch]);

  return { teams, status, errors };
};