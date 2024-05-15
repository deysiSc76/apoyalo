
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
          hairColor: 'black'},
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
  sumar = (index) => {
    const listaPersonasActualizadas=this.state.listaPersonas.map((personaP, i) => {
      if(i===index){
        return{
          ...personaP,
          age:personaP.age+1
        };
      }
      return personaP;
        
    });
    this.setState({
      listaPersonas:listaPersonasActualizadas
    });
  }
  render = ()=> {
    return(
      <div>
          {this.state.listaPersonas.map((persona, index)=>{
            return(<PersonaCard key={index} index={index} lastName={persona.lastName}
                                firsName={persona.firstName}
                                age={persona.age}
                                hairColor={persona.hairColor}
                                sumar={this.sumar} />)

                                
          })
          } 
      </div>

    );
  }
  
}
export default App;