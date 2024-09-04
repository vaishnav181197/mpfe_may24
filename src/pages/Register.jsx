import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { checkEmailApi,registerApi } from '../services/allApis'
import { useNavigate } from 'react-router-dom'

function Register() {

    const [user,setUser]=useState({
        username:"",email:"",password:""
    })
    const nav=useNavigate()


    const handleRegister=async()=>{
        console.log(user)
        const {username,email,password}=user
        if(!username || !email || !password){
            toast.warning("Enter valid Inputs!!")
        }
        else{
            const result=await checkEmailApi(email)
            console.log(result)
            if(result.data.length>0){
                toast.warning("Email ID already in Use!!!!")
            }
            else{
                const result=await registerApi(user)
                if(result.status==201){
                    toast.success("Success")
                    setUser({
                        email:"",username:"",password:""
                    })
                    nav('/log')
                }
                else{
                    toast.error("Registration Failed!!")
                    console.log(result)
                }
            }
        }
    }

  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
        <div className='w-75 border shadow bg-light p-5'>
            <h1>Register</h1>
            <input type="email" onChange={(e)=>{setUser({...user,email:e.target.value})}} className="form-control mb-3" placeholder='Enter Email ID'/>
            <input type="text" onChange={(e)=>{setUser({...user,username:e.target.value})}} className="form-control mb-3" placeholder='Enter Username'/>
            <input type="password" onChange={(e)=>{setUser({...user,password:e.target.value})}} name="" placeholder='Enter Password' id="" className="form-control mb-3" />
            <div className='d-flex justify-content-between'>
                <button className='btn btn-success' onClick={handleRegister}>Register</button>
                <Link to={'/log'}>Already a User?</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register