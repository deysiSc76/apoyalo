
import {Component} from 'react';
import './App.css';
import PersonaCard from './PersonaCard';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaPersonas: [
        { firstName: 'Diana',
          lastName: 'Gomez',
          age: 25,
          hairColor: 'black',},
       {  firstName: 'Marcelo', 
          lastName: 'Cabrera', 
          age:23,
          hairColor: 'black',}, 
        { firstName: 'John', 
          lastName:'Smith', 
          age:40,
          hairColor:'brown'},
        { firstName:'Maria',
          lastName:'Millard', 
          age:80, 
          hairColor:'yellow'}]
    };

  }
  render = ()=> {
    return(
      <div>
          {this.state.listaPersonas.map((persona, index)=>{
            return(<PersonaCard lastName={persona.lastName}
                                firsName={persona.firstName}
                                age={persona.age}
                                hairColor={persona.hairColor}/>)
          })}
        
      </div>

    );
  }
  
}
export default App;