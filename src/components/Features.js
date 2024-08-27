import React from 'react'
import FeatureCard from './FeatureCard'
import CreditPerMonth from '../Assets/creditPerMonth.svg'
import RollOverOfUnUsedCredits from '../Assets/rolloverOfUnusedCredits.svg'
import MMRPerks from '../Assets/MMRPerks.svg'
import Flexible from '../Assets/100Flexible.svg'
import Discount from '../Assets/discountOnFoodAndBeverages.svg'
import Convenience from '../Assets/convenienceFee.svg'
import '../styles/Feature.css'
function Features() {
    const details=[{id:1, src:CreditPerMonth, title:"1 credit per month", content:"one 2D standard movie per month"},
        {id:2, src:RollOverOfUnUsedCredits, title:"Free rollover of unused credits", content:"unused credits will be combined the following month"},
        {id:3, src:MMRPerks, title:"All perks included", content:"+ benefits"},
        {id:4, src:Flexible, title:"100% Flexible", content:"cancel anytime"},
        {id:5, src:Discount, title:"20% Discount on all Food and Beverages", content:"Excluding alcohol"},
        {id:6, src:Convenience, title:"0 Convinience Fees", content:"Waived on all days on any ticket purchase"}

    ]

  return (
    <div className='features-grid'>
            {details.map(res => (
                <FeatureCard key={res.id} src={res.src} title={res.title} content={res.content} />
            ))}
        </div>
  )
}

export default Features