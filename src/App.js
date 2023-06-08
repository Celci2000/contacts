import React , {useState} from 'react'
import AddContact from './AddContact.js'
import { AiFillDelete } from 'react-icons/ai';
import ContactList from "./ContactList.js"
function App() {
const [contacts , setContacts ]= useState([{id:"1234",name:"celia", email:"csm@dot/.com"},{id:"5678",name:"loria" , email:"lorial@dot/.com"}])
  
 const addContactHandler=(con)=>{
setContacts([...contacts,con])
console.log(contacts)
}
const dltContact=(id)=>{
const updatedCons=contacts.filter((item)=> item.name!==id);
console.log(updatedCons);
setContacts(updatedCons);
return(<div>{updatedCons.map((e) => (<div  class=" mb-4 border-b-2 border-gray-500 text-black font-normal font-serif  "> 
<p class="text-capitalize " >{e.name}  </p>
<button> <AiFillDelete /></button>
<p class="text-capitalize">{e.email}</p>


</div>)
)}</div>)


}

  return (
    <div className="App">
      
        <header class="bg-gray-500 py-2"><h1 class="text-white text-center  	text-transform: capitalize font-sans font-bold">contact manager</h1></header>
      
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contact={contacts} dltCon={dltContact}/>
    
    </div>
  );
}

export default App;
