import React from 'react';

const Todo=({todo,deletetask}) => {
    const Todolist=todo.length ? (
        todo.map(
            ads=>{
                return(
                    <div className="todo" key={ads.id}>
                    <h3 onClick={() =>deletetask(ads.id)}>{ads.content}</h3>
                    </div>
                    );
            }
        )
    ):(
        <h3>No Task!!!</h3>
    )
   
    return(
        <div className="todo-list">
           {Todolist} 
        </div>
    )
    
}

export default Todo;