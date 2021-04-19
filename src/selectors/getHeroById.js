import { heroes } from "../data/heroes"

export const getHeroById = (Id) => {
  
  return heroes.find(hero=>hero.id===Id)

    
 

    
}
