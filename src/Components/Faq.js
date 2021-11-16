import React, {useState, useEffect} from 'react'
import {
  Container
} from 'react-bootstrap'
import {
  FaPlus,
  FaMinus
} from 'react-icons/fa'

export default function Faq() {
  const [faqs, setFaqs] = useState([])
  useEffect(() => {
    const initialFaqs = [
      {
        question: 'WHEN IS THE SALE?',
        answer: "<p>The presale will open on Friday 17th December and last for 24hrs from 5PM EST.</p>" + 
        "<p>Whitelisted members will be able to mint a maximum of 2 NFTs per registered address at a reduced price of 0.065 Eth + gas fees per NFT.</p>" + 
        "<p>Our general sale event will take place on Saturday 18th December from 5PM EST.</p>" + 
        "<p>General public will be able to mint up to 5 NFTs per address at a price of 0.085 Eth +gas fees per NFT.</p>",
        collapse: false
      },
      {
        question: 'WHAT IS BAR GANG?',
        answer: '<p>The BAR GANG is a community of humans who believe in the future of crypto, enjoy hanging out, and realize at the bar we’re all in the same gang.</p>',
        collapse: false
      },
      {
        question: 'ARE THERE TWO COLLECTIONS OF BAR GANG?',
        answer: '<p>Yes, there are 2 sets: BAR GANG Men and BAR GANG Women.</p>' + 
        '<p>The first collection is called BAR GANG Men - this project will be launched by @brianbturner in December 2021. It features a collection of just the men avatars.</p>',
        collapse: false
      },
      {
        question: 'WILL THERE BE A WHITELIST?',
        answer: '<p>Yes! A selected number of active members will be granted a spot in our whitelist and be able to mint 2 NFTs each prior to the sale at a lower price of 0.065 ETH. Users who are supportive of the project and active in our Discord will occasionally be handpicked by our team, so make sure to be active, add to the conversation, help newcomers and be respectful to others and you might just win a spot on our whitelist. We will also be doing a raffle to select random users.</p>',
        collapse: false
      },
      {
        question: 'WHAT IS THE TOTAL NUMBER OF NFTS?',
        answer: '10,000',
        collapse: false
      },
      {
        question: 'WHEN WILL THE NFTS BE REVEALED AFTER THE SALE?',
        answer: 'The NFTs will be revealed 24 - 48hrs after the end of the sale.',
        collapse: false
      },
      {
        question: 'HOW CAN I BUY A BAR GANG COLLECTIBLE?',
        answer: '<p>1. Go to website - https://bargang.io</p>' + 
        '<p>2. Connect your wallet using the button - "Connect"</p>' + 
        '<p>3. Press the button - "Mint"</p>' + 
        '<p>4. Select the desired number of collectibles to buy and press the button - "Mint"</p>',
        collapse: false
      },
      {
        question: 'HOW MUCH DOES IT COST TO MINT?',
        answer: '.085 ETH + gas',
        collapse: false
      },
      {
        question: 'IS THERE A LIMIT TO THE NUMBER OF BAR GANG COLLECTIBLES I CAN MINT?',
        answer: '5 per transaction',
        collapse: false
      },
      {
        question: 'WHERE CAN I VIEW MY NFTS?',
        answer: 'Once minted, simply connect to your OpenSea account to view your NFTs.',
        collapse: false
      },
      {
        question: 'WILL THERE BE ANY GIVEAWAYS?',
        answer: 'Yes, we plan to periodically reward active and verified members of our community.',
        collapse: false
      },
    ]
    setFaqs(initialFaqs)
  }, [])
  return (
    <div id="faq" className="text-white pt-5 pb-5">
      <Container>
        <div className="text-center mb-5 font-xxl" style={{fontWeight: 'bold'}}>
          FREQUENTLY ASKED QUESTIONS
        </div>
        <div className="faq-group" style={{borderTop: '1px solid #bbb'}}>        
          {
            faqs.map((item, index) => (
              <div className="faq-item" key={index} style={{borderBottom: '1px solid #bbb'}}>
                <div className="faq-item-q d-flex align-items-center justify-content-between mt-2 mb-2 font-xl" style={{fontWeight: 'bold'}}>
                  <div>
                    {item.question}
                  </div>
                  <div className='cursor-pointer' onClick={() => {
                    const collapse = []
                    faqs.forEach((f, fIndex) => {
                      if (index == fIndex) {
                        f.collapse = !f.collapse
                      }
                      collapse.push(f)
                    })
                    console.log(faqs)
                    setFaqs(collapse)
                  }}>
                    {
                      item.collapse ? <FaPlus /> : <FaMinus />
                    }
                  </div>
                </div>
                {!item.collapse && (<div dangerouslySetInnerHTML={{__html: item.answer}} className="mb-2" />)}
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  )
}
