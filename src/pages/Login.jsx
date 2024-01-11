import { useContext } from "react";
import './Login.css'
import { Mycontext } from "../context/context";
import { Link, useNavigate} from "react-router-dom"


function Login()  {

const {profile,setLogin,setCurrentuser,isSetLogin}=useContext(Mycontext)
const nav=useNavigate()
console.log(profile);
const handleSubmit=(event)=>{
  event.preventDefault();

  const Email=event.target.Email.value
   const Pwd=event.target.Pwd.value

   if (Pwd == "admin" || Email == "admin@g") {
    setLogin('admin')
    nav("/admin");
  } else {
   const value=profile.filter((x)=>{
    return x.email===Email 
   });
   console.log(value);
   
   if(value[0].password==Pwd){
    setCurrentuser(value[0].fname)
    nav('/')
isSetLogin(true)
   }
   else{
    alert("Error")
   }
  }

}

// const history = useHistory()

    return (
        <>
        
        <div className="logi">
       
        <form onSubmit={handleSubmit}>
          <h3>LOGIN</h3> <br />
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
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
          <p className="forgot-password text-right">
            Dont have any account <Link to={"/register"} >Register?</Link>
          </p>
        </form>
        <Login/>
             
        </div>
       
        </>
      )
}
export default Login
