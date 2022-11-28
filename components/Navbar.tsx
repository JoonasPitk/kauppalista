import Link from 'next/link';
import Image from 'next/image'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

export function CustomNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link href="/">
                    <Navbar.Brand>
                        <Image src="/kauppalista.png"
                            width={32}
                            height={32}
                            alt=""
                        />
                        Kauppalista
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} href="/">
                                Etusivu
                        </Nav.Link>
                        <Nav.Link as={Link} href="/listat">
                                Listat
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
