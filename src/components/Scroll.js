import React from 'react';

const Scroll=(props)=>{
   /*  console.log(props.childern */
    return(
        <div style={{overflowY:'scroll', border:'1px ', height: "30em"}}>
         {props.children}
         </div>
    )
    
}

export default Scroll;