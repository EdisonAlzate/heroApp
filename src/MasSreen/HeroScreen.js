import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { heroImages } from '../data/helpers/heroImages'
import { getHeroById } from '../selectors/getHeroById'

export const HeroScreen = ({history}) => {
    
    const {heroId}=useParams()
   
    const dataGetHeroID= useMemo(() => getHeroById(heroId), [heroId])
    
    console.log({dataGetHeroID})
    
    if (!dataGetHeroID) {
        return <Redirect to="/" />;
        
    }
    

    const {
        id,
        alter_ego,
        characters,
        first_appearance,
        superhero
    }= dataGetHeroID



   
    const handleClickReturn =()=>{  
        
          if (history.length<=2) {
            history.push("/")
        }else{

            history.goBack("/")
        }
              
    }
    
       return (
       
       <div className="row ">

            <div className="col-md-4">
             <img 
                src={heroImages(`./${heroId}.jpg`)}
                alt={ superhero } 
                width="150"   
                />
            </div>

            <div className="col-8">
                <p>{superhero}</p>
                <p>{alter_ego}</p>
                <p>{characters}</p>
                <p>{first_appearance}</p>
                
                <button 
                    className="btn btn-primary"
                onClick={handleClickReturn}
                >

                Return
                </button>
            </div>
      
        </div>
         )
}
