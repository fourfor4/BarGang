import React from 'react';
import {Row, Col,Container,Image} from 'react-bootstrap';

export default function About() {
  return (
    <div className="about-container mb-5">
      <Container>
        <div className="about-left">
          <Row>
            <Col lg={6} md={12}>
              <Row >
                <Col lg={6} md={6} sm={6} xs={6} className="mb-4">
                  <Image src="image/6(1).jpg" className="w-100" rounded />
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className="mb-4">
                  <Image src="image/7(1).jpg" className="w-100" rounded />
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className="mb-4">
                  <Image src="image/28.jpg" className="w-100" rounded />
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className="mb-4">
                  <Image src="image/14.jpg" className="w-100" rounded />
                </Col>
              </Row>
            </Col>
            <Col lg={6} className="p-4">
              <div className="text-white">
                <p className="mb-0" style={{fontSize: 'x-large'}}>ABOUT____________________</p>
                <p className="mb-0" style={{fontSize: 'xx-large'}}>Welcome to the</p>
                <p className="mb-0 text-orange" style={{fontSize: 'xx-large', fontWeight: 'bold'}}>BAR GANG</p>    
                <p className="mt-5 mb-0" style={{fontSize: 'x-large'}}><b className="text-orange">The BAR GANG</b> is a private collection
                of 20,000 men and women <b>NFTs</b>—unique digital
                collectibles living on the Ethereum blockchain.</p> 
                <p className="mb-0" style={{fontSize: 'x-large'}}>Then men (10k) are dropping in <b>December 2021.</b></p>             
              </div>
            </Col>
          </Row>
        </div>
        <div className="text-white text-center mt-4" style={{fontSize: 'xx-large'}}>
          <p>The <b className="text-orange">BAR GANG</b> is a community of humans who believe in the future of <b>CRYPTO,</b> enjoy hanging out, and realize at the bar we're all in the same gang.</p>
          <p className="text-center">
            <span style={{width: 200, height: 2, background: 'white', display: 'block', margin: '0 auto'}}></span>
          </p>
          <p className="">The <b>BAR GANG</b> is starting with a collection of 10,000 men
          NFTs and then 10,000 women NFTs</p>
        </div>
      </Container>
    </div>
  )
}
