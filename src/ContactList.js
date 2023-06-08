import React from 'react';

import { AiFillDelete } from 'react-icons/ai';


function  ContactList(props){
    return (
        <div class="max-w-md mx-auto">
            <h3 class="text-black mt-3 text-transform:capitalize font-sans font-bold">Contact List </h3>
          {props.contact.map((e)=>(<div  class=" flex items-center justify-between mb-4 border-b-2 border-gray-500 text-black font-normal font-serif"> 
           <div class="flex flex-col"> 
           <p class="text-capitalize " >{e.name}  </p>
              <p class="text-capitalize">{e.email}</p>
          </div>
      <div class="flex justify-end"> <button class="ml-4" onClick={()=>{props.dltCon(e.name)}}><AiFillDelete /></button> </div>
        </div>
        ))
        }
        </div>
    )
} 
export default  ContactList;
