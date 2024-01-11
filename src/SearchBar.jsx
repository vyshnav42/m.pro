import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Dropdown,Image }from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from './context/context';
 function Search() {
  const { product } = useContext(Mycontext);
  const [searchQuery, setSearchQuery] = useState('');
const ab=useNavigate()
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = product.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      
      <Dropdown >
      
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='bg-transparent border-0 overflow-hidden'>
      <Form className="d-flex ">
      
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 my-2"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Button className="my-1 my-2" variant="outline-success">Search</Button>
      </Form>

      </Dropdown.Toggle>

      <Dropdown.Menu align="end"  className='overflow-hidden'>
      {filteredProducts.map((item) => (
        <Dropdown.Item  className='w-25 ' onClick={()=>ab(`/details/${item.id}`)}>  <Image className='w-25' src={item.img}  /> {item.name}</Dropdown.Item>
      ))}
        
      </Dropdown.Menu>
    </Dropdown>

    </div>
  );
};

export default Search;
