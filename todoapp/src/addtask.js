import React,{Component} from 'react';

class AddTask extends Component{
    state={
        content:null,
    }
    handleChange=(e) =>{
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({
            content: ''
        });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
            <label>Add New Task</label>
            <input type="text" onChange={this.handleChange} value={this.state.content}/>
            </form>
            </div>
        )
    }
}
export default AddTask;