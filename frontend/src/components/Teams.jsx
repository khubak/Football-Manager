import { useFetchTeams } from "../hooks/useFetchTeams";

const TeamsComponent = () => {
  const { teams, status, errors } = useFetchTeams();

  if (status === "loading") {
    return <div>Loading teams...</div>;
  }

  if (status === "failed") {
    return <div>Error: {errors}</div>;
  }
  console.log(teams)
  return (
    <div>
      <h1>Teams List</h1>
      {status === "succeeded" && (
        <ul>
          {teams.map((team) => (
            <li key={team[0]}>{team[1]}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeamsComponent;
