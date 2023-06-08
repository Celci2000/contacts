import React from 'react';


class AddContact extends React.Component {
     state={
        
        name:"",
        email:" "
    }
    
    add=(e)=>{
    e.preventDefault();
    if(this.state.name===""&&this.state.email===""){
      
        alert("no contacts to add");
        console.log("alert");


    }
    else{
        this.props.addContactHandler(this.state)
        console.log(this.state)
        this.setState({name:"",email: " "});
    }
   }

render(){


    return(
        <div class="max-w-md mx-auto">
            <div class="mb-4">
                <label for="name" class = "block text-gray-700 text-sm font-bold mb-2">Name:</label>
                <input type="text" id="name"class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" placeholder="Enter your Name"onChange={(e)=>{this.setState({name:e.target.value})}} value={this.state.name}></input>
            </div>
            <div className="mb-4">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email :</label>
                <input type="text" id="id" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" placeholder=" Email-id" onChange={(e)=>{this.setState({email:e.target.value})}} value={this.state.email} ></input>
            </div>
            <button type="submit"class="bg-indigo-500 text-white px-4 py2 rounded hover:bg-indigo-600" onClick={this.add}>Add</button>

        </div>
    )
}

}
export default AddContact;