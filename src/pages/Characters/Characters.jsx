import React, { useEffect, useState } from "react"
import Nav from "../../components/Nav/Nav"
import "./Characters.scss"
import axios from "axios"
import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"

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
            <section className="character-page">
                <SimpleBar style={{ maxHeight: "70vh" }}>
                    <div className="characters-container">
                        {characters.map((character, index) => {
                            return (
                                <div key={index} className="character-card">
                                    <img src={character.image} alt={character.name}></img>
                                </div>
                            )
                        })}
                    </div>
                </SimpleBar>
            </section>
            <Nav></Nav>
        </>
    )
}

export default Characters
