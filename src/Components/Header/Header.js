
import React from 'react';
import { Container, Nav, Navbar, Offcanvas,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    
    return (
        <>
            <Navbar bg="light" expand={false}>
                <Container >
                    <NavLink style={{textDecoration:"none"}} to='/'> 
                    <Navbar.Brand href="#">Yooda Hostel</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >
                    <Offcanvas.Header style={{backgroundColor:"#84bcbd"}} closeButton>
                       
                    </Offcanvas.Header>
                    <Offcanvas.Body style={{backgroundColor:"#18222d"}} >
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <NavLink  className="d-flex justify-content-center align-items-center" style={{textDecoration:"none"}} to='/explore'>
                            <Nav.Link  href="#action1"><Button style={{width:"200px"}} variant="btn btn-outline-info">Explore</Button></Nav.Link>
                        </NavLink>  
                        <NavLink className="d-flex justify-content-center align-items-center" style={{textDecoration:"none"}} to='/dashboard'>
                            <Nav.Link href="#action2"><Button style={{width:"200px"}} variant="btn btn-outline-info">Dashboard</Button></Nav.Link>
                        </NavLink>  
                        
                        </Nav>
                        
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
                </Navbar>
        </>
    );
};

export default Header;