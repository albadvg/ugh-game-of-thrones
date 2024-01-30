import React, { useContext } from "react"
import { GotContext } from "../../context/context"
import Nav from "../../components/Nav/Nav"
import "./Characters.scss"

const Characters = () => {
    const { characters } = useContext(GotContext)
    console.log(characters)

    return (
        <>
            <section className="characters__container">
                {characters.map((character, index) => {
                    return (
                        <div key={index} className="character__card">
                            <img src={character.image} alt={character.name}></img>
                        </div>
                    )
                })}
            </section>
            <Nav></Nav>
        </>
    )
}

export default Characters
