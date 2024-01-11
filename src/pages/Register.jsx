import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import './Register.css'
import { Mycontext } from '../context/context'



function Register() {

  const {profile,setProfile}=useContext(Mycontext)
  const navigate=useNavigate()


  const handleSubmit=(event)=>{
   event.preventDefault()
   const Fname=event.target.Fname.value
   const Lname=event.target.Lname.value
   const Email=event.target.Email.value
   const Pwd=event.target.Pwd.value
   setProfile([...profile,{fname:Fname, lname: Lname, email: Email, password: Pwd }])
   console.log(profile);

  //  console.log('Registration data:', { Fname, Lname, Email, Pwd });
   // After successful registration, navigate to the login page
   navigate('/login');

  }

  return (
        <>  
        
        <div className='regi'> 
        <form onSubmit={handleSubmit}>
          <h3 style={{textDecoration:'underline'}}>Register</h3><br></br> 
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              id='Fname'
              name='Fname'
            />
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" id='Lname' name='Lname'/>
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              id='Email'
              name='Email'
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              id='Pwd'
              name='Pwd'
            /> 
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={() => alert('Registered successfully')}>
              Sign Up
            </button>
          </div><br />
          <p className="forgot-password text-right">
            Already registered <Link to={"/login"} >Login?</Link>
          </p>
         
        </form>
        </div>
        
        </>
      )
  
}

export default Register