
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { useContext } from 'react';
import { Mycontext } from '../context/context';
import Search from '../SearchBar';


function Navba() {
  const {currentuser,isLogin,isSetLogin,cart}=useContext(Mycontext)
  console.log( currentuser);
   const myNav=useNavigate()
  const Logout=()=>{
    isSetLogin(false)
    alert('logged out successfully')
  }
  const tocart=()=>{
if (isLogin===true)
myNav('/cart')

  }
  

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand as={Link} to="/">PET FOOD</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Link className='link' to={'/'} >HOME</Link>
          <Link className='link' to={'Dog'} > DOG</Link>
          <Link className='link' to={'Cat'} > CAT</Link>
          <Link className='link' to={'collection'} > COLLECTIONS</Link>
          {/* <button className='link' onClick={tocart} > Editproduct </button> */}

              <NavDropdown.Divider />
          </Nav>
         <Search/>
        </Navbar> 

         <div className='loci ml-auto'>
           
           <Link className='nav-link'>
             &nbsp;

   <Dropdown>
     <Dropdown.Toggle variant="primary" id="dropdown-basic">
     <FontAwesomeIcon icon={faUser} />
     </Dropdown.Toggle>

     <Dropdown.Menu>
      { (isLogin==false) ?  
   
       <Dropdown.Item onClick={()=>{myNav('/register')}}>signup</Dropdown.Item> :
       <>
       <Dropdown.Item>{currentuser}</Dropdown.Item>
       <Dropdown.Item onClick={Logout}>Logout</Dropdown.Item>
       </>

      }
     </Dropdown.Menu>
   </Dropdown>
          

           </Link>
           <Link className='nav-link n' to={'/cart'}>
             <FontAwesomeIcon icon={faShoppingCart} /> &nbsp;
             <span className="badge bg-danger">{cart.length}</span>
           </Link>
         </div>

        
      </Container>
    </Navbar>
  );
}

export default Navba