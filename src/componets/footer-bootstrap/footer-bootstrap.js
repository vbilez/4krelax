import React from 'react';
// import 'footer-bootstrap.css'


import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const FooterBootstrap = () => {
    return (
        <Container  style={{background:'black',color:'#fff'}} className='footerStyle'>
  <Row>
    <Col>HOME</Col>
    <Col>HOW IT WORKS</Col>
    <Col>PRIVACY POLICY</Col>
    <Col>TERM OF USE</Col>
    <Col>CUSTOM LICENSE</Col>
    <Col>FOR BUSSINES</Col>
    <Col>SUPPORT</Col>
    <Col>FAQ</Col>

  </Row>
  <Row>
    <Col>© 2019 <a href='https://4krelax.com/'>4K Nature Relax TV.</a> All Rights Reserved</Col>
    
  </Row>
</Container>
    )
}

export default FooterBootstrap