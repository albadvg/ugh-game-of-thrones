import React, { useEffect, useState } from "react"
import Nav from "../../components/Nav/Nav"
import "./Characters.scss"
import axios from "axios"

const baseUrl = "https://got-json-api.vercel.app/"

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const filter = ""

    useEffect(() => {
        const getCharacters = async () => {
            const charactersApi = await axios.get(`${baseUrl}characters`)
            setCharacters(charactersApi.data)
        }
        getCharacters()
    }, [filter])

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
