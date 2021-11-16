import React from 'react'
import {Row, Col,Container,Image} from 'react-bootstrap';
import {
  FaArrowRight
} from 'react-icons/fa'

export default function Feature() {
  return (
    <div className="feature-class mb-5">
      <Container>
        <Row>
          <Col md={12} lg={6} className="mb-5 mt-5 p-4">
           <p className="font-xxl white-color"> FEATURES___________________ </p>
           <p className="font-xxxl white-color"><b>AN EXCLUSIVE</b></p>
           <p className="font-xxxl default-color">BAR GANG</p>
           <p className="font-xxl white-color">Each <b> BAR GANG </b> collectible is unique and programmatically generated from over 100 handcrafted traits, including skin tone, head style, facial features, clothing, and more hand-drawn by The Artist.</p>
           <div className="font-xl white-color">
              <p ><span className="dot"></span>10,000 rare male Bar Gang NFTs</p> 
              <p><span className="dot"></span>10,000 rare female Bar Gang NFTs</p> 
              <p><span className="dot"></span>Fair Distribution: all collectibles cost .08 ETH</p> 
              <p><span className="dot"></span>Control and own a unique avatar NFT (ERC-721)</p> 
              <p><span className="dot"></span>Gain additional benefits through roadmap activations</p> 
            </div>
            <p className="font-xxl white-color">
              With more than 100+ hand-drawn traits, each NFT is
              unique and comes with a membership to an exclusive
              group of successful investors and bar enthusiasts.
              Join an ambitious ever-growing community with
              multiple benefits and utilities. Remember,
              here we’re all in the same gang.
            </p>
           <span className="font-xxl white-color cursor-pointer pb-2" style={{borderBottom: '1px solid white'}}><span className="pr-4">Join Us</span><span style={{width: 20, display: 'inline-block'}} /><FaArrowRight className="text-orange"></FaArrowRight></span>
          </Col>
          <Col md ={12} lg={6} className="d-flex align-items-center">
            <Row>
              <Col lg={6} md={6} sm={6} xs={6} className="mb-4">
                <Image src="image/28.jpg" className="w-100" rounded />
              </Col>
              <Col lg={6} md={6} sm={6} xs={6} className="mb-4">
                <Image src="image/1.jpg" className="w-100" rounded />
              </Col>
              <Col lg={6} md={6} sm={6} xs={6} className="mb-4">
                <Image src="image/3.1.jpg" className="w-100" rounded />
              </Col>
              <Col lg={6} md={6} sm={6} xs={6} className="mb-4">
                <Image src="image/22.jpg" className="w-100" rounded />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
