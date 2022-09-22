import React from 'react'
import Nav from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Navbar() {
    const logout = () => {


    };
    return (
        <div>
            <Nav className="fixed-top" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Demo</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as : <span className="text-white"></span>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
                <button className="btn btn-danger m-2" onClick={() => logout()}>Logout</button>
            </Nav>
        </div>
    )
}

export default Navbar