import React, { useContext } from 'react'
import { ContextApp } from '../data/ContextApp'
import { HeroList } from '../heroList/HeroList'

export const DcScreen = () => {
    
    const useContextAppHeroes = useContext(ContextApp)

console.log(useContextAppHeroes)
    return (
        <>
        <HeroList publisher="DC Comics"/>
        
        </>
    )
}
