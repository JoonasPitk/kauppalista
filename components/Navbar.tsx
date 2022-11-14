import Link from 'next/link';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

export function CustomNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link href="/">
                    <Navbar.Brand>
                        Kauppalista
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} href="/">
                                Etusivu
                        </Nav.Link>
                        <Nav.Link as={Link} href="/joku/sivu">
                                Joku sivu
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
