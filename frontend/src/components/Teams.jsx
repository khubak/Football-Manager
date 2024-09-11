import { useState } from "react";
import { useFetchTeams } from "../hooks/useFetchTeams";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { selectedTeamId } from "../redux/slices/teams";

const TeamsComponent = () => {
  const { teams, status, errors } = useFetchTeams();
  const selectedId = useSelector((state) => state.teams.selectedTeamId);
  const dispatch = useDispatch()
  const handleClick = (teamId) => {
    dispatch(selectedTeamId(teamId))
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
      <p>{selectedId ? selectedId : "tren null"}</p>
      <h1>Teams List</h1>
      {status === "succeded" && (
        <ListGroup as="ul">
          {teams.map((team) => (
            <ListGroup.Item
              as="li"
              key={team.id}
              active={selectedId === team.id}
              onClick={() => handleClick(team.id)}
            >
              <h2>{team.name}</h2>
              <p>Stadium: {team.stadium}</p>

              <p>
                Players:{" "}
                {team.players
                  ? team.players.split(",").join(", ")
                  : "No players available"}
              </p>

              <p>
                Coaches: {team.coaches ? team.coaches : "No coaches available"}
              </p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default TeamsComponent;
