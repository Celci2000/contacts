import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function  ContactList(props){
    return (
        <div class="max-w-md mx-auto">
            <h3 class="text-black mt-3 text-transform:capitalize font-sans font-bold">Contact List </h3>
          {props.contact.map((e)=>(<div  class=" mb-4 border-b-2 border-gray-500 text-black font-normal font-serif  "> 
            <p class="text-capitalize " >{e.name}  </p>
            <button><DeleteOutlineIcon /></button>
            <p class="text-capitalize">{e.email}</p>
            
            
        </div>))}
        </div>
    )
} 
export default  ContactList;
