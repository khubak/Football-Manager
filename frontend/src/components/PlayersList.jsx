import { useSelector } from "react-redux";
import { selectedTeamPlayers } from "../redux/slices/teams";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";

//TODO: send player id by fetchteams from backend, key=player.id

function PlayersList() {
  const players = useSelector((state) => state.teams.selectedTeamPlayers);

  if (players === null) return <>Select your team!</>;
  if (players.length === 0) return <>Add players to this team!</>;

  return (
    <>
      <ListGroup as="ul">
        {players.map((player) => (
          <ListGroup.Item as="li" key={player}>
            {player}
            <ButtonGroup>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </ButtonGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default PlayersList;
