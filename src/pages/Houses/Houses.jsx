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
            <section className="houses-page">
                <SimpleBar style={{ maxHeight: "70vh" }} minSize={20} autoHide={false}>
                    <div className="houses-container">
                        {houses.map((house, index) => {
                            return (
                                <Link to="/DetailHouses">
                                    <div key={index} className="houses-card">
                                        <img src={house.image} alt={house.name}></img>
                                    </div>
                                    <h3 className="houses-title">{house.name}</h3>
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
export default Houses
