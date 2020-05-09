import React from "react"
import Card from './Card'


const Cardlist=({robots})=>{
  try{ 
    return (
        <div>
        { 
            robots.map((user ,index)=>
            {
            return( 
                <Card key={index} 
                id={robots[index].id}
                name={robots[index].name}
                email={robots[index].email}
                 />
            )
            })
        }      
        </div>
    )
  }
  catch{
      throw new Error('Nooo')
  }
}

export default Cardlist;