import React from 'react';
import './ninjas.css'

//const Ninjas =(props) =>{
    //const {ninjas}=props;
    //or we can do destructring here directly
    const Ninjas =({ninjas, deleteNinja}) =>{
   
        //destructing
         //const ninjas=this.props.ninjas;
         
         const ninjalist=ninjas.map(ads =>{
             return ads.age > 0 ?(
                 <div className="ninja" key={ads.id}>
                        <h1>Name={ads.name}</h1>
                    <h1>Name={ads.age}</h1>
                    <h1>Belt ={ads.belt}</h1>
                    <button onClick={() =>deleteNinja(ads.id)}>Delete Ninja</button>
                 </div>
                
             ):null;
         })
        return(
            <div className="ninja-list">
               {ninjalist} 
            </div>
        )
    }
export default Ninjas;
//const {name,age,belt}=this.props;
//<h1>Name={name}</h1>
//<h1>Age={this.props.age}</h1>
//<h1>City={this.props.city}</h1>