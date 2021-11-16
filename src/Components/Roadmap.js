import React from 'react'
import { Container } from 'react-bootstrap'
import RoadmapStep from './RoadmapStep'

export default function Roadmap() {
  return (
    <div id="roadmap">
      <Container>
        <h2 className="mt-5 text-orange" style={{textAlign: 'center'}}>LANUCH ROADMAP</h2>
        <span className="white-divider"></span>
        <p className="mt-3 mb-0 text-white" style={{textAlign: 'center', fontSize: 'large'}}>As we value our community and its creativity,</p>
        <p className="text-white" style={{textAlign: 'center', fontSize: 'large'}}>our roadmap will be updated according to your comments and ideas.</p>
        <RoadmapStep        
          progress={1}
          percent="10%"
          title="GRAND OPENING"
          detail="Congratulations, you are on the waitlist. Give your name to the host and wait at the bar. Join the community on Discord. Get BOTY up with us."   
        />
        <RoadmapStep        
          progress={2}
          percent="20%"
          title="SHOTS ON US"
          detail="We will giveaway 10 Bar Gang men and 10 Bar Gang women. We will also establish a fund in order to finance the community’s creations, designs, and development."   
        />
        <RoadmapStep        
          progress={3}
          percent="40%"
          title="TURN UP THE VOLUME"
          detail="Launch of merch store exclusively for <span style='font-weight: bold'>Bar Gang NFT</span> owners – show off your <span style='font-weight: bold'>Bar Gang apparel</span> to the world on hts, t-shirts, hoodies, posters, and more. Part of the profit will be donated to charity."   
        />
        <RoadmapStep        
          progress={4}
          percent="60%"
          title="THE GIVE BACK"
          detail="Charity donations to organizations supporting workers in the hospitality industry."   
        />
        <RoadmapStep        
          progress={5}
          percent="80%"
          title="MAKE IT RAIN"
          detail="Daily raffles and monthly surprises for <span style='font-weight: bold'>Bar Gang</span> owners for an entire month with a chance to win cash prizes. We will also create collectible figures and launch collaborations with bars and restaurants. You will have to stay in touch for monthly drops with future benefits."   
        />
        <RoadmapStep        
          progress={6}
          percent="100%"
          title="GRAND CLOSING"
          detail="Our gang is more like a family. By having a successful launch, we will be able to help other brands launch their own <span style='font-weight: bold'>NFT</span> collection in the crypto space."   
        />
      </Container>
    </div>
  )
}
