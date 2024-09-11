import PlayersList from "../components/PlayersList";
import TeamsList from "../components/TeamsList";
import { Col, Container, Row } from "react-bootstrap";
function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <TeamsList />
        </Col>
        <Col>
          <PlayersList />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
