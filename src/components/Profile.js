import React , {  useState } from 'react'
import axios from "axios"
export default function Profile() {
    const [Profile,setProfile]= useState([]);

    const [search,setSearch]= useState("")
    const [id,setId]= useState()
    // const [search,setSearch]= useState("")
    
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
    // const handleID=(e)=>{
    //     setId(e.target.value)
    // }
    const handleSubmit=(e)=>{
        e.preventDefault()
      
      axios.get(`http://localhost:3002/userdetails?fname=${search}`).then((res)=>setProfile(res.data)).catch((err)=>console.log(err))
    }



  return (
    <div>
        <center>
            <h1>Phone directory</h1>
      <form>
      Contact name <input type="text" onChange={(e)=>handleChange(e)}></input><br /><hr />
                {/* <input type="text" onChange={(e)=>handleID(e)}></input><br /><hr /> */}
                <button onClick={(e)=>handleSubmit(e)}>search</button>
            </form>
            {
                Profile.map((item)=>(
                    <div>
                        <h2>name:{item.fname}</h2>
                        <h3>Mobile Number :{item.mobile}</h3>
                        <h3>Email :{item.Email}</h3>
                    </div>
                ))
            }
            </center>
    </div>
  )
}
