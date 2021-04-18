import React from 'react'
import { heroImages } from '../data/helpers/heroImages'
import { heroes } from '../data/heroes'

export const MarvelScreen = () => {
    
    
    
    return (
        <>
        <ul>
        
            {
                heroes.map(hero=>(
                   
                   <div>
                   
                        <div className="cards-columns">
                            <li
                            key={hero.id}
                            >
                            {hero.superhero}
                            
                            </li>

                            <img src={heroImages(`./${hero.id}.jpg`)} alt={hero.superhero} />
                        </div>


                   </div>
                  
                   
                ))
            }
        </ul>
        </>
    )
}
