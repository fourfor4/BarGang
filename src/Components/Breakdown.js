import React from 'react'
import { Container } from 'react-bootstrap'
import BreakdownItem from './BreakdownItem'

export default function Breakdown() {
  return (
    <Container>
      <div id="breakdown" style={{position: 'relative'}}>
        <div className="breakdown-header">
          <h1 className="text-white" style={{textAlign:'center', fontSize: 'xxx-large', fontWeight: 'bold'}}>THE BREAKDOWN</h1>
          <span className="circle-1"></span>
          <span className="circle-2"></span>
        </div>
        <BreakdownItem 
          title="Innovation"
          detail="With the Bar Gang, digital art is essential. You will discover different way to use your collectible in the next phases."
        />
        <BreakdownItem 
          title="Collection"
          detail="We encourage our community to share with ideas & be a integral part of the Bar Gang’s growth."
        />
        <BreakdownItem 
          title="Unique"
          detail="Once you mint a NFT from the Bar Gang collection, you will be the only holder on this universe and beyond."
          cls="larger"
        />
        <BreakdownItem 
          title="Community"
          detail="Be part of a fun pioneering community. Effective communication & common goals will lead to community success."
        />
        <BreakdownItem 
          title="Long Term"
          detail="Don't get involved with the hype, choose consistency. The Bar Gang project is designed to evolve and grow."
        />
      </div>
    </Container>
  )
}
