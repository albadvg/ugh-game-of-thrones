import React, { useContext, useEffect, useState } from "react"
import Nav from "../../components/Nav/Nav"
import "./Characters.scss"
import axios from "axios"
import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"
import { Link } from "react-router-dom"
import { Context } from "../../context/context";


const baseUrl = "https://got-json-api.vercel.app/"

const Characters = () => {

    const {search} = useContext(Context);

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const getCharacters = async () => {
            const charactersApi = await axios.get(`${baseUrl}characters?name=${search}`)
            ////////////////////////////////////////////////////////////////////////////
            //////////////////////      PREGUNTAR ABEL    //////////////////////////////
            setCharacters(charactersApi.data)
            
        }
        getCharacters()
    }, [search])

    return (
        <>
            {console.log(characters)}
            <section className="character-page">
                <SimpleBar style={{ maxHeight: "65vh" }} autoHide={false}>
                    <div className="characters-container">
                        {characters.map((character, index) => {
                            return (
                                <Link to={`/characters/${character.id}`}>
                                    <div key={index} className="character-card">
                                        <img src={character.image} alt={character.name}></img>
                                        <h3 className="character--name">{character.name}</h3>
                                    </div>
                                </Link>
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
