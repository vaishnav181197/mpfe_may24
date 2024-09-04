import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { loginApi } from '../services/allApis'
import { toast } from 'react-toastify'

function Login() {
    const [user,setUser]=useState({
        email:"",password:""
    })
    const nav=useNavigate()


    const handleLogin=async()=>{
        console.log(user)
        const {email,password}=user
        if(!email || !password){
            toast.warning("Enter Valid Inputs!")
        }
        else{
            const result=await loginApi(email,password)
            if(result.status==200){
                if(result.data.length>0){
                    console.log(result.data[0])
                    sessionStorage.setItem('userData',JSON.stringify(result.data[0]))
                    toast.success("Login Successfull!!")
                    nav('/home')
                    setUser({
                        email:"",password:""
                    })
                }
                else{
                    toast.warning("Invalid Email/Password!!")
                }
            }
            else{
                toast.error("Something Went Wrong!!")
            }
        }
    }

  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
        <div className='w-75 border shadow bg-light p-5'>
            <h1>Login</h1>
            <input type="email" onChange={(e)=>{setUser({...user,email:e.target.value})}} className="form-control mb-3" placeholder='Enter Email ID'/>
            <input type="password" onChange={(e)=>{setUser({...user,password:e.target.value})}} name="" placeholder='Enter Password' id="" className="form-control mb-3" />
            <div className='d-flex justify-content-between'>
                <button className='btn btn-success' onClick={handleLogin}>Login</button>
                <Link to={'/reg'}>New User?</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login