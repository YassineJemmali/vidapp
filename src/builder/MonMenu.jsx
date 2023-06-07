import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MonMenu() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">VidApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#features">Les films</Nav.Link>
            <Nav.Link href="#pricing">Les séries</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MonMenu;
