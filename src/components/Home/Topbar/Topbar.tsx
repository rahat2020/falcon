import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar,Button } from 'react-bootstrap';

const Topbar = () => {
    return (
        <div>
            <Navbar expand="lg" className=" shadow-sm">
                <Container>
                    <Navbar.Brand href="/" className='fw-bold'>Space <strong style={{color:'crimson'}}>Flight</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex justify-content-center align-items-center">
                            <Nav.Link href="/" className='text-secondary fw-bold'>Home</Nav.Link>
                            <Nav.Link href="/about" className='text-secondary fw-bold'>About</Nav.Link>
                            <Nav.Link href="/contact" className='text-secondary fw-bold'>Contact</Nav.Link>
                            <Nav.Link href="/login" className='text-secondary fw-bold'>Login</Nav.Link>
                            <Nav.Link href="/signup" className='text-secondary fw-bold'>
                                <Button style={{backgroundColor:'crimson', color:'#fff', border:'none', fontWeight:'bold'}}>Signup</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Topbar