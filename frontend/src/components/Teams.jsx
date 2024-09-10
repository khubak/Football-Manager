import { useFetchTeams } from "../hooks/useFetchTeams";

const TeamsComponent = () => {
  const { teams, status, errors } = useFetchTeams();

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
      <h1>Teams List</h1>
      {status === "succeded" && (
        <ul>
          {teams.map((team) => (
            <li key={team.id}>
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeamsComponent;
