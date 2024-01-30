import { useContext } from "react";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import './Timeline.scss';
import { GotContext } from "../../context/context";

const Timeline = () => {

    const  {characters} = useContext(GotContext);
    
    return (
        <SimpleBar style={{ maxHeight: 900 }}>
            <div className="timeline">
                <div className="timeline-count">
                    <span className="timeline-count__num">17</span>
                </div>
                {characters.sort((a, b) => a.age + b.age).map((char, i) => (
                    <p key={i}>{char.name}</p>
                ))}

            </div>
        </SimpleBar>
    )
}

export default Timeline
