import React from 'react';
// import 'headerBootstrap.css'
import logo from '../../assets/image/logo.png'

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const HeaderBootstrap = () => {
    return (
        <Container style={{background:'#343a40'}} fluid className='aaa'>
            <Row>
                <Col>
                    <img src={logo} width={250} />
                </Col>
                <Col>
                    <nav >
                        <ul style={{display: 'flex'}}>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Explore</li>
                        </ul>
                    </nav>
                </Col>
                <Col xs={6}>3 of 3</Col>
                <Col>4 of 4</Col>
            </Row>
        </Container>
    )
}

export default HeaderBootstrap;