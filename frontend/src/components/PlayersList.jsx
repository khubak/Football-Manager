import { useSelector } from "react-redux";
import { selectedTeamPlayers } from "../redux/slices/teams";

function PlayersList() {
  const players = useSelector((state) => state.teams.selectedTeamPlayers)
  return <>{players ? players : "No players available"}</>;
}

export default PlayersList;
