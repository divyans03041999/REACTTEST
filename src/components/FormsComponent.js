import React from "react";
class FormsComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            email:"",
            password:"",
            city:"",
            pincode:"",
            
        }
    }
    handleLogin=(e)=>{
        e.preventDefault()

       this.state.username==="admin"&&this.state.password==="admin" ? this.setState({msg:"success"}):this.setState({msg:"please try again"})


    // if(this.state.username==="admin"&&this.state.password==="admin"){
    //     this.setState({msg:"success"})
    // }
    // else{
    //     this.setState({msg:"please try again"})
    // }
    }
    handleUname=(e)=>{
        this.setState({username:e.target.value})
    }
    // handlePassword=(e)=>{
    //     this.setState({password:e.target.value})
    // }
    // handleTech=(e)=>{
    //     this.setState({tech:e.target.value})
    // }
    render(){
        return(
            <center>

            <form>
                <h1>Registration Form</h1><br /><br />
                
               Username: <input type="text" onChange={(e)=>this.handleUname(e)}></input><br /><br />
               Email :<input type="email" name="" id="" onChange={(e)=>this.setState({email:e.target.value})} /><br></br>

               Password :<input type="password" name="" id="" onChange={(e)=>this.setState({password:e.target.value})}/><br></br>
               City :<input type="text" name="" id="" onChange={(e)=>this.setState({city:e.target.value})}/><br></br>
               Pin code<input type="number" name="" id="" onChange={(e)=>this.setState({pincode:e.target.value})}/><br></br>


               {/* Password: <input type="text" onChange={(e)=>this.handlePassword(e)}></input><br /><br />
              <select onChange={(e)=>this.handleTech(e)}>
                  <option value="react">React</option>
                  <option value="node">Node</option>
              </select><br /><br /> */}
               <button onClick={(e)=>this.handleLogin(e)}>login</button><br /><br />
                <h3>username:{this.state.username}</h3><br />
                <h3>email:{this.state.email} </h3>
                <h3>password:{this.state.password} </h3>
                <h3>city:{this.state.city} </h3>
                <h3>pincode:{this.state.pincode}</h3>
            </form>
            </center>
        )
    }
}
export default FormsComponent