import React, {Component} from 'react';
import Todo from './todo';
import AddTask from './addtask';
class App extends Component {
  state={
    todos:[
      {id:1,content:'buy some milk'},
      {id:2,content:'play cyberpunk'},
    ]
  }

  

  deletetask=(id) =>{
    let newtodo=this.state.todos.filter(todos =>{
      return todos.id !=id
    });
    this.setState({
      todos:newtodo
    })
  }

  addTask=(todo)=>{
      todo.id=Math.random();
      let todos =[...this.state.todos,todo]
      this.setState({
        todos:todos
      })
  }
  render(){
    return (
      <div className="App">

        <h1>Todo's App</h1>
       <Todo deletetask={this.deletetask} todo={this.state.todos}/>
       <AddTask addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
