import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const GotContext = createContext()

const baseUrl = "http://localhost:3000/"

export const GotContextProvider = ({ children }) => {
    // const [characters, setCharacters] = useState([])
    const [houses, setHouses] = useState([])

    const filter = ""

    // useEffect(() => {
    //     const getCharacters = async () => {
    //         const charactersApi = await axios.get(`${baseUrl}characters`);
    //         setCharacters(charactersApi.data)
    //     }
    //     getCharacters()
    // }, [filter])

    useEffect(() => {
        const getHouses = async () => {
            const housesApi = await axios.get(`${baseUrl}houses`)
            setHouses(housesApi.data)
        }
        getHouses()
    }, [])

    // return <GotContext.Provider value={{ characters, houses }}>{children}</GotContext.Provider>
}
