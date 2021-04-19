import { heroes } from "../data/heroes"


export const getHeroByPublisher = ({publisher}) => {
   
    const getpublisher =["DC Comics","Marvel Comics"]
    
   
   if (!getpublisher.includes(publisher)) {
       throw new Error(`publisher${publisher}is wrong`)
   }
   
    return heroes.filter(hero=>hero.publisher===publisher)

}
