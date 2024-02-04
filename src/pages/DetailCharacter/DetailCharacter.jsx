import React, { useEffect, useState } from "react"
import Detail from "../../components/Detail/Detail"
import { useParams } from "react-router-dom"
import axios from "axios"

const DetailCharacter = () => {
    const { id } = useParams()

    const [character, setCharacter] = useState({})
    const [houseImg, setHouseImg] = useState("")

    //petición de personajes
    useEffect(() => {
        const getData = async () => {
            try {
                const charactersApi = await axios.get("https://got-json-api.vercel.app/characters/" + id)
                setCharacter(charactersApi.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getData()
    }, [id])

    useEffect(() => {
        const getHouses = async () => {
          try {
            const houseName = character.house;
    
            const response = await axios.get('https://got-json-api.vercel.app/houses');
            const house = response.data.find((house) => house.name === houseName);
    
            if (house) {
              setHouseImg(house.image);
            } else {
              console.error(`No se encontró la casa para el personaje ${character.name}`);
            }
          } catch (error) {
            console.error('Error al obtener las casas', error);
          }
        };
    
        getHouses();
      }, [character]);


    return (
        <div>
            <Detail detail={character} houseImg={houseImg} />
        </div>
    )
}

export default DetailCharacter
