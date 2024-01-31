import React, { useEffect, useState } from "react"
import Detail from "../../components/Detail/Detail"
import { useParams } from "react-router-dom"
import axios from 'axios';

const DetailHouse = () => {
     // const {id} = useParams();
     const id = 2;
     const [house, setHouse] = useState({})
 
     //petición de personajes
     useEffect(() => {
         const getHouse = async () => {
             const housesApi = await axios.get(`https://got-json-api.vercel.app/houses/${id}`)
             setHouse(housesApi.data)
         }
         getHouse()
 
     }, [id])
 
     return (
         <div>
             <Detail detail={house}/>
         </div>
     )
}

export default DetailHouse
