import { Component } from "react";
class PersonaCard extends Component {
    constructor(props) {
        super(props);
      
    }
    render=()=>{
        return (
            <div className="card">
                <div>
                    <h2>{this.props.lastName} {this.props.firsName}</h2>
                    <p>{this.props.age}</p>
                    <p>{this.props.hairColor}</p>
                </div>
            </div>
        );
    }
    
}
export default PersonaCard;