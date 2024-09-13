import { Container, Navbar, Nav } from "react-bootstrap";

const TopBar = () => {
  return (
    <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="/">
        <img src="/fm_logo.svg" width="100" height="70"></img>
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
