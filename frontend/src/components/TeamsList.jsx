import { useFetchTeams } from "../hooks/useFetchTeams";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { selectedTeamId, selectedTeamPlayers } from "../redux/slices/teams";

const TeamsList = () => {
  const { teams, status, errors } = useFetchTeams();
  const selectedTeam = useSelector((state) => state.teams.selectedTeamId);
  const dispatch = useDispatch();
  const handleClick = (teamId, teamPlayers) => {
    dispatch(selectedTeamId(teamId));
    dispatch(selectedTeamPlayers(teamPlayers));
  };

  if (status === "loading") {
    return <div>Loading teams...</div>;
  }

  if (status === "failed") {
    return <div>Error: {errors}</div>;
  }

  if (teams.length === 0) {
    return <div>No teams found</div>;
  }

  return (
    <div>
      {status === "succeded" && (
        <ListGroup as="ul">
          {teams.map((team) => (
            <ListGroup.Item
              as="li"
              key={team.id}
              active={selectedTeam === team.id}
              onClick={() => handleClick(team.id, team.players)}
            >
              <h2>{team.name}</h2>
              <p>{team.stadium}</p>

              <p>{team.coaches ? team.coaches : "No coaches available"}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default TeamsList;
