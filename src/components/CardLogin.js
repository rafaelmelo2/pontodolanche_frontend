import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


function CardLogin () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
    <>
        <Button variant="primary" onClick={handleShow} className="me-2">
        </Button>
        <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Login</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Button type="submit" className="btn-login">Entrar</Button>
        </Offcanvas.Body>
        </Offcanvas>
    </>
    );
}

export default CardLogin