import React, { useEffect, useState } from "react"
import Detail from "../../components/Detail/Detail"
import { useParams } from "react-router-dom"
import axios from 'axios';


const DetailCharacter = () => {

    // const {id} = useParams();
    const id = 2;
    const [character, setCharacter] = useState({})

    //petición de personajes
    useEffect(() => {
        const getCharacters = async () => {
            const charactersApi = await axios.get(`https://got-json-api.vercel.app/characters/${id}`)
            setCharacter(charactersApi.data)
        }
        getCharacters()

    }, [id])

    return (
        <div>
            <Detail detail={character}/>
        </div>
    )
}

export default DetailCharacter
