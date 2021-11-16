import React, { useEffect, useState } from 'react'
import {
  Container,
  Row,
  Col,
  Image,
  Modal
} from 'react-bootstrap'
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Team() { 

  const [teamMembers, setTeamMembers] = useState([])
  const [modalShow, setModalShow] = useState(false)
  const [showImageUrl, setShowImageUrl] = useState('')

  useEffect(() => {
    const teamMembers = [
      {
        image: 'image/6.jpg',
        name: 'MEGAMUS',
        info: 'The Co-Founder',
      },
      {
        image: 'image/7(1).jpg',
        name: 'MEGAMUS',
        info: 'The Co-Founder',
      },
      {
        image: 'image/9.jpg',
        name: 'MEGAMUS',
        info: 'The Co-Founder',
      },
      {
        image: 'image/15.jpg',
        name: 'MEGAMUS',
        info: 'The Co-Founder',
      },
      {
        image: 'image/9(1).jpg',
        name: 'MEGAMUS',
        info: 'The Co-Founder',
      },
      {
        image: 'image/20.1.jpg',
        name: 'MEGAMUS',
        info: 'The Co-Founder',
      },
      {
        image: 'image/23.jpg',
        name: 'MEGAMUS',
        info: 'The Co-Founder',
      },
      {
        image: 'image/13.1.jpg',
        name: 'MEGAMUS',
        info: 'The Co-Founder',
      },
    ]
    setTeamMembers(teamMembers)
  }, [])
  
  return (
    <div className="our-team pt-5 pb-5">
      <Container className="mt-5">
        <div className="text-center" style={{marginBottom: -5}}>
          <span className="our-team-title">OUR TEAM</span>
        </div>
        <div className="text-center mb-4">
          <span className="our-team-title-divider" />
        </div>
        <div className="mb-5">
          <p className="text-center text-white mb-0" style={{fontSize: "x-large"}}>The Bar Gang was created by a team of dremaners;</p>
          <p className="text-center text-white mb-0" style={{fontSize: "x-large"}}>Enterpreneurs, Blockchain experts, Marketing gurus, and Artists. We are committed to delivering a cutting-edge experience and making this project a success.</p>
        </div>
        <Row className="our-team-members">
          {teamMembers.map((member, index) => {
            return (
              <Col xl={3} lg={3} md={4} sm={6} xs={6} xxs={12} key={'teamMember' + index} className="text-white pt-4 pb-4 cursor-pointer member-item">
                <div>
                  <Image src={member.image} className="w-100" />
                  <div className="d-flex align-items-end justify-content-between mt-2">
                    <div>
                      <div style={{fontSize: 'smaller', fontWeight: 'bold'}}>{member.name}</div>
                      <div style={{fontSize: 'smaller'}}>{member.info}</div>
                    </div>
                    <div className="mb-1">
                      <span className="team-member-nav-icon cursor-pointer" style={{ marginRight: 8 }}>
                        <FaLinkedinIn />
                      </span>
                      <span className="team-member-nav-icon">
                        <FaInstagram onClick={() => {
                          setShowImageUrl(member.image)
                          setModalShow(true)
                        }} />
                      </span>
                    </div>
                  </div>
                </div>
              </Col> 
            )
          })}
        </Row>
      </Container>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Image src={showImageUrl} className="w-100"></Image>
      </Modal>
    </div>
  )
}
