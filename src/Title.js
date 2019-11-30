import React from 'react';
export default function Title (props){
 

 
return(
    <div>
    {
        (props.small) ?
        <h5 style={props.style}>{props.children} </h5> : <h1 style={props.style}>{props.children} </h1>
    }
    </div>
)

    
}