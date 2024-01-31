import React, { useEffect, useState } from "react"
import Nav from "../../components/Nav/Nav"
import axios from "axios"
import Search from "../../components/Search/Search"

const baseUrl = "https://got-json-api.vercel.app/"

const Houses = () => {
    const [houses, setHouses] = useState([]);

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
            <Search></Search>
            </div>
            <Nav></Nav>
        </>
    )

}
export default Houses
