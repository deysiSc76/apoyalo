import { Component } from "react";
class PersonaCard extends Component {
    render = () => {
        const{index, firstName, lastName, age, hairColor, sumar}= this.props;
        return (
           
            <div className="card">
                <div>
                    <h2>{lastName} {firstName}</h2>
                    <p>{age}</p>
                    <p>{hairColor}</p>
                    <button onClick={()=> {sumar(index)}}>birthday</button>
                    
                </div>
                
            </div>
        );
    }
    
}
export default PersonaCard;