import {  useEffect, useRef, useState} from "react";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import './Timeline.scss';
import Nav from "../../components/Nav/Nav";
import axios from "axios"

const Timeline = () => {
    const [characters, setCharacters] = useState([])
    
    //petición de personajes
    useEffect(() => {
        const getCharacters = async () => {
            const charactersApi = await axios.get('https://got-json-api.vercel.app/characters')
            setCharacters(charactersApi.data)
        }
        getCharacters()
    }, [])

    //referencia de la flecha
    const arrowRef = useRef();

    //sacar edad mínima y máxima de los personajes
    let [maxAge, setMaxAge] = useState(0);
    let [minAge, setMinAge] = useState(0);
    
    characters.length && characters.forEach(char => char.age > maxAge && char.age !== null && (maxAge = char.age));
    characters.length && characters.forEach(char => char.age < minAge && char.age !== null && (minAge = char.age));

    useEffect(() => {
        let maxAgeAux = 0;
        let minAgeAux = 800;
        characters.length && characters.forEach(char => char.age > maxAgeAux && char.age !== null && (maxAgeAux = char.age));
        characters.length && characters.forEach(char => char.age < minAgeAux && char.age !== null && (minAgeAux = char.age));
        setMaxAge(maxAgeAux);
        setMinAge(minAgeAux);
    }, [characters]);

    //variable de estado para la edad, con estado inicial = a la edad mínima
    const [age, setAge] = useState(minAge);

    //cambiar el orden al clicar en la edad min o max
    const changeOrder = () => {
        age === minAge ? setAge(maxAge) : setAge(minAge);
        arrowRef.current.classList.toggle('flip');
    }

    return (
        <>   
            <section className="page">       
                <SimpleBar style={{ maxHeight: '65vh' }} minSize={20} autoHide={false}>
                    <div className="tmline">
                        <div className="tmline-count">
                            <div className="tmline-count-circle" onClick={changeOrder}>
                                <span className="tmline-count-circle__num">{age > 0 && age}</span>
                            </div>
                        </div>
                        <div className="tmline-chars">
                            <div className="tmline-chars-aux1"><div className="tmline-chars-aux1__arrow" ref={arrowRef}></div></div>
                            <div className="tmline-chars-aux2"></div>
                                {age === minAge ? 
                                    //si la edad en el círculo es la mímina, ordenar de menor a mayor...
                                    characters.sort((a, b) => a.age - b.age).map((char, i) => {
                                        return(
                                        <div key={i} className="tmline-chars-char">
                                            <p className="tmline-chars-char__age">{char.age}</p>
                                            <h4 className="tmline-chars-char__name">{char.name}</h4>
                                            <img src={char.image} alt={char.name}  className="tmline-chars-char__img"/>
                                        </div>
                                    )})
                                    //si es la máxima, ordenar de mayor a menor
                                    : characters.sort((a, b) => a.age + b.age).map((char, i) => {
                                        return(
                                            <div key={i} className="tmline-chars-char">
                                                <p className="tmline-chars-char__age num">{char.age}</p>
                                                <h4 className="tmline-chars-char__name">{char.name}</h4>
                                                <img src={char.image} alt={char.name} className="tmline-chars-char__img"/>

                                            </div>
                                    )})
                                }
                        </div>

                    </div>

                </SimpleBar>
            </section>
            <Nav></Nav>
        </>
    )
}

export default Timeline
