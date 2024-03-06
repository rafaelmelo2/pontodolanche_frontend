import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './NavBar.css'
import { useState, useEffect } from 'react';


function NavBar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('token');
      if(token){
        setIsLoggedIn(true);
      }
    }, []);
    
    return (
    <Navbar expand="lg" className="nav">
        <Container fluid >
        <Navbar.Brand href="/">logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto mytext--2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
            <Nav.Link className="text-nav" href="/">Home</Nav.Link>
            <Nav.Link className="text-nav" href="#cardapio"> Cardápio </Nav.Link>
            <Nav.Link className="text-nav" href="#contatos"> Contatos </Nav.Link>
            <Nav.Link className="text-nav" href="#sobre"> Sobre nós </Nav.Link>
            </Nav>
            <Form className="d-flex">
                {isLoggedIn ? (
                <NavDropdown title="Link" id="navbarScrollingDropdown" className="text-nav">
                    <NavDropdown.Item href="#fazerPedido">Fazer pedido</NavDropdown.Item>
                    <NavDropdown.Item href="#pedidos">Pedidos</NavDropdown.Item>
                    <NavDropdown.Item href="#vendas">Vendas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5"> Sair </NavDropdown.Item>
                </NavDropdown>
                ) : (
                <NavDropdown title="Link" id="navbarScrollingDropdown" className="text-nav">
                    <NavDropdown.Item href="#entrar">Entrar</NavDropdown.Item>
                    <NavDropdown.Item href="#cadastro">Cadastro</NavDropdown.Item>
                </NavDropdown>
                )}
            </Form>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar;