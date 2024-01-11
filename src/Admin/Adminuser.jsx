import { useContext } from "react";
import './Adminuser.css'
import { Mycontext } from "../context/context";

function Adminuser() {
  const { profile } = useContext(Mycontext)
  console.log(profile);
  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last name</th> 
            <th>Email</th>
          
            {/* Add other table header columns as needed */}
          </tr>
        </thead>
        <tbody>
          {profile.map((user) => (
            <tr key={user.id}>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.email}</td>
              {/* Add other table cells for additional user details */}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-75">
        </div>
    </div>
  );
}

export default Adminuser;