import React, { useMemo } from 'react'
import { useLocation } from 'react-router'
import { heroes } from '../data/heroes'
import { HeroCardItem } from '../heroList/HeroCardItem'
import { useForm } from '../hooks/useForm'
import queryString from"query-string"
import { getHeroByName } from '../selectors/getHeroByName'

export const SearchScreen = ({history}) => {
    console.log(history)
    //capturando valor de URL la guardo en q , 
    //desestructuro pa obtner la informacion  exacta 
    //del valor que ecribi en el input 
    const location=useLocation()
    const {q=""}=queryString.parse(location.search) 
    console.log(q)


    const [values,handleInputChange]= useForm({
        inputValueHero:q
    })
    
    const{inputValueHero}= values

    //enviando info que escribo desde el input hacia URL
    const handleSubmitHero =(e)=>{
        e.preventDefault() 
        history.push(`?q=${inputValueHero}`)
        console.log(inputValueHero)
    }
    
     const dataHeroByName= useMemo(() => getHeroByName(q), [q])
     
    return (
        <div className="row">

            <div className="col-7">
                <h1>Search Form </h1>
                  <form 
                  onSubmit={handleSubmitHero} 
                  >
                  
                        <input
                            type="text"                        
                            placeholder="find your favorite hero"
                            name="inputValueHero"
                            onChange={handleInputChange}
                            autoComplete="off"
                            value={inputValueHero}
                            />
                        

                        <button
                            type="submit"
                            className="btn btn-primary"  
                                                     
                        >
                        Search
                        </button>

                  </form>
            </div>

            <div className="col-5">
                <h1>Results</h1>

                { 
                    (q ==='') 
                        && 
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                }

                { 
                    (q !=='' && dataHeroByName.length === 0 ) 
                        && 
                        <div className="alert alert-danger">
                            There is no a hero with { q }
                        </div>
                }

                {
                    dataHeroByName.map(hero=>(                        
                        <HeroCardItem
                        key={hero.id} 
                        {...hero}
                        />
                    ))
                }
            </div>
        </div>
    )
}
