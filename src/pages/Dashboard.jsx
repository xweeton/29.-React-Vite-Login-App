import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";

export default function Dashboard() {
  const navigate = useNavigate();

  function goProfile() {
    navigate("/profile");
  }

  return (
    <Container className="text-center">
      <NavBar />
      <h1 className="my-5">Dashboard</h1>
      <Card>
        <Card.Body>
          <Card.Title>Sigma School Analytics</Card.Title>
          <Card.Text>People who graduate who get jobs: 80%</Card.Text>
        </Card.Body>
      </Card>
      <Button className="mt-3" variant="warning" onClick={goProfile}>
        Go to Profile
      </Button>
    </Container>
  );
}
