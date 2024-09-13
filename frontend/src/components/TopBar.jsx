import { Container, Navbar, Nav } from "react-bootstrap";

const TopBar = () => {
  return (
    <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="/">
        <img src="/vite.svg" width="30" height="30"></img>
        Football Manager
      </Navbar.Brand>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/create_team">Create Team</Nav.Link>
      <Nav.Link href="/manage_teams">Manage Teams</Nav.Link>
    </Container>
    </Navbar>
  );
};

export default TopBar;
