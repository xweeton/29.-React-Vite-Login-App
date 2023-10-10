import { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function NavBar() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  function logout() {
    authContext.setToken(null);
    navigate("/");
  }

  return (
    <Navbar expand="md" className="bg-light">
      <Navbar.Brand href="/">Zeph&apos;s Login App</Navbar.Brand>
      <Navbar.Toggle aria-controls="login-app" />
      <Navbar.Collapse id="login-app">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Button className="ms-5" variant="danger" onClick={logout}>
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
