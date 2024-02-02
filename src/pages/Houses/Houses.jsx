import React, { useContext, useEffect, useState } from "react"
import Nav from "../../components/Nav/Nav"
import axios from "axios"
import Search from "../../components/Search/Search"
import { Link } from "react-router-dom"
import SimpleBar from "simplebar-react"
import "./Houses.scss"
import { Context } from "../../context/context"

const baseUrl = "https://got-json-api.vercel.app/"

const Houses = () => {

    const {search} = useContext(Context);

    const [houses, setHouses] = useState([])

    useEffect(() => {
        const getHouses = async () => {
            let housesApi;
            if(search.length) {
                housesApi = await axios.get(`${baseUrl}houses?name=${search}`)
            } else {
                housesApi = await axios.get(`${baseUrl}houses`)
            }

            setHouses(housesApi.data)
            // console.log(houses)
        }
        getHouses()
    }, [search])


        
  

    return (
        <>
            <section className="houses-page">
                <SimpleBar style={{ maxHeight: "65vh" }}  autoHide={false}>
                    <div className="houses-container">
                        {houses.map((house, index) => {
                            return (
                                <Link to={`/houses/${house.id}`}>
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
