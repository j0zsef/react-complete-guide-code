import Concept from "./Concept";
import "./Concepts.css";

function Concepts(props){
    return (
            <ul id="concepts">
                {props.concepts.map((concept) => <Concept key={concept.id} image={concept.image} title={concept.title} description={concept.description} />)}
            </ul>
        )
}

export default Concepts;