import { useContext , useEffect, useRef, useState} from "react";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import './Timeline.scss';
import { GotContext } from "../../context/context";
import Nav from "../../components/Nav/Nav";

const Timeline = () => {
    //traer personajes del context
    const  {characters} = useContext(GotContext);
    const arrowRef = useRef();
    //sacar edad mínima y máxima de los personajes
    let [maxAge, setMaxAge] = useState(0);
    let [minAge, setMinAge] = useState(0);
    
    useEffect(() => {
        let maxAgeAux = 0;
        let minAgeAux = 800;
        characters.length && characters.forEach(char => char.age > maxAgeAux && char.age !== null ? maxAgeAux = char.age : maxAgeAux = maxAgeAux);
        characters.length && characters.forEach(char => char.age < minAgeAux && char.age !== null ? minAgeAux = char.age : minAgeAux = minAgeAux);
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
            <SimpleBar style={{ maxHeight: 600 }}>
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
                                characters.sort((a, b) => a.age - b.age).map((char, i) => {
                                    return(
                                    <div key={i} className="tmline-chars-char">
                                        <p className="tmline-chars-char__age">{char.age}</p>
                                        <h4 className="tmline-chars-char__name">{char.name}</h4>
                                        <img src={char.image} alt={char.name}  className="tmline-chars-char__img"/>

                                    </div>
                                )})

                                : characters.sort((a, b) => a.age + b.age).map((char, i) => {
                                    return(
                                        <div key={i} className="tmline-chars-char">
                                            <p className="tmline-chars-char__age">{char.age}</p>
                                            <h4 className="tmline-chars-char__name">{char.name}</h4>
                                            <img src={char.image} alt={char.name} className="tmline-chars-char__img"/>

                                        </div>
                                )})
                            }
                    </div>

                </div>

            </SimpleBar>
            <Nav></Nav>
        </>
    )
}

export default Timeline
