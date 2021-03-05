
import React, {Component} from 'react';
import Ninjas from './ninjas';
import AddNinja from './addNinjas'
class App extends Component {
  state={
    ninjas:[
      {name:'ryu',age: 19,belt:'black',id:1},
      {name:'code',age: 21,belt:'red',id:2},
      {name:'ninja',age: 22,belt:'white',id:3},
      {name:'youtube',age: 23,belt:'yellow',id:4},
    ]
  }
  addNinja = (ninja) => {
      ninja.id=Math.random();
      //this.state.ninjas.push(ninja)
      let ninjas =[...this.state.ninjas,ninja];
      this.setState({
          ninjas:ninjas
      })
  }
  deleteNinja = (id) =>{
    let ninjass =this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas :ninjass
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>hi</h1>
          <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
          <AddNinja addNinja={this.addNinja}/>
                  </header>
      </div>
    );
  }
}

export default App;
//<Ninjas name="rishabh" age="20" city="ajmer"/>
