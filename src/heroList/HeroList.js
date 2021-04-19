import React from 'react'
import { getHeroByPublisher } from '../selectors/getHeroByPublisher'
import { HeroCardItem } from './HeroCardItem'

export const HeroList = (publisher) => {
    
    console.log(publisher)
   
    const heroData=getHeroByPublisher(publisher)
    
    return (
        <>
        {
            heroData.map(hero=>(
               
              <div>
              
                    <HeroCardItem
                        key={hero.id}
                        {...hero}
                    />
              </div>
              
               
            ))
        }
        </>
    )
}
