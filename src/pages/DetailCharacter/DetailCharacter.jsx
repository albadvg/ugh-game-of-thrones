import React, { useEffect, useState } from "react"
import Detail from "../../components/Detail/Detail"
import { useParams } from "react-router-dom"
import axios from 'axios';




const DetailCharacter = () => {


    // const {id} = useParams();
    const id = 2;
    const [character, setCharacter] = useState({})
    const [houses, setHouses] = useState([]);
    const [houseImg, setHouseImg] = useState('');

    //petición de personajes
    useEffect(() => {
        const getData = async () => {
            try {
                const charactersApi = await axios.get(`https://got-json-api.vercel.app/characters/${id}`)
                setCharacter(charactersApi.data)
                
                

                

            } catch (error) {
                console.log(error.message);
            }
        }
        getData()
        
    }, [id])
    
    //
    useEffect(() => {
        const getHouses = async () => {

            const housesApi = await axios.get(`https://got-json-api.vercel.app/houses`);
            setHouses(housesApi.data);
        }
        getHouses();

        const houseName = character.house;
        if (houses.length) {
            let house;
            house = houses.find(house => house.name === houseName).image;
            setHouseImg(house);
            console.log(house)
        }
    }, [character])



    
    

    return (
        <div>
            <Detail detail={character} houseImg={houseImg}/>
        </div>
    )
}

export default DetailCharacter
