import React, { useContext } from "react"
import { GotContext } from "../../context/context"

const Houses = () => {
    const { houses } = useContext(GotContext)
    console.log(houses)
    return (
        <div>
            <h1>Hola soy una pagina</h1>
        </div>
    )
}

export default Houses
