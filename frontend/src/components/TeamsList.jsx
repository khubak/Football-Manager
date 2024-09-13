import { useFetchTeams } from "../hooks/useFetchTeams";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { selectedTeamId, selectedTeamPlayers } from "../redux/slices/teams";
import TeamsListPagination from "./TeamsListPagination";
import { Container } from "react-bootstrap";
import { usePages } from "../hooks/usePages";
import useTotalPages from "../hooks/useTotalPages";
import useCurrentTeams from "../hooks/useCurrentTeams";

const TeamsList = () => {
  const { teams, status, errors } = useFetchTeams();
  const { currentPage, setCurrentPage } = usePages();
  const itemsPerPage = 5;
  const dispatch = useDispatch();
  const selectedTeam = useSelector((state) => state.teams.selectedTeamId);

  const totalPages = useTotalPages(teams, itemsPerPage);
  const currentTeams = useCurrentTeams(teams, currentPage, itemsPerPage);

  const handleClick = (teamId, teamPlayers) => {
    dispatch(selectedTeamId(teamId));
    dispatch(selectedTeamPlayers(teamPlayers));
  };

  const props = { totalPages, currentPage, setCurrentPage };

  if (status === "loading") return <>Loading teams...</>;
  if (status === "failed") return <>Error: {errors}</>;
  if (teams.length === 0) return <>No teams found</>;

  return (
    <>
      {status === "succeded" && (
        <Container>
          <ListGroup as="ul">
            {currentTeams.map((team) => (
              <ListGroup.Item
                as="li"
                key={team.id}
                active={selectedTeam === team.id}
                onClick={() => handleClick(team.id, team.players)}
              >
                <h2>{team.name}</h2>
                <h1>{team.stadium}</h1>
                <p>{team.coaches ? team.coaches : "No coaches available"}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <TeamsListPagination props={props} />
        </Container>
      )}
    </>
  );
};

export default TeamsList;
