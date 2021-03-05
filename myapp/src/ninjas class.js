import React,{Component} from 'react';

class Ninjas extends Component{
    render(){
        //destructing
         //const ninjas=this.props.ninjas;
         const {ninjas}=this.props;
         const ninjalist=ninjas.map(ads =>{
             return(
                 <div className="ninja" key={ninja.id}>
                        <h1>Name={ads.name}</h1>
                    <h1>Name={ads.age}</h1>
                 </div>
                
             )
         })
        return(
            <div className="ninja-list">
               {ninjalist} 
            </div>
        )
    }
}
export default Ninjas;
//const {name,age,belt}=this.props;
//<h1>Name={name}</h1>
//<h1>Age={this.props.age}</h1>
//<h1>City={this.props.city}</h1>