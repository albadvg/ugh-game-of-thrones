import React, { useEffect, useState } from "react"
import Nav from "../../components/Nav/Nav"
import axios from "axios"

const baseUrl = "https://got-json-api.vercel.app/"

const Houses = () => {
    const [houses, setHouses] = useState([])

    useEffect(() => {
        const getHouses = async () => {
            const housesApi = await axios.get(`${baseUrl}houses`)
            setHouses(housesApi.data)
            console.log(houses)
        }
        getHouses()
    }, [houses])

    return (
        <>
            <div>
                <h1>Hola soy una pagina</h1>
            </div>
            <Nav></Nav>
        </>
    )
}

export default Houses
