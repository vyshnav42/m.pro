import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Mycontext } from '../context/context';

const Productdetails = () => {
  const {product,cart,setCart} = useContext(Mycontext);

  const { id } = useParams();
  const nav = useNavigate();

  const det = product.filter((x) => x.id == id);
  console.log(id);

  const addtocart = () => {
   setCart([...cart, id ])
    alert("Item added to cart, Go to cart");
    nav('/cart')
  };
  console.log(cart);

  return (
    <div className="container my-4">
      {det.map((x) => (
        <Card key={x.id} className="mb-4">
          <div className="d-flex flex-column flex-lg-row align-items-center" style={{width:'1000px'}}>
            <Card.Img className="w-50" variant="top" src={x.img} alt={x.name} />
            <Card.Body>
              <Card.Title>
                <h2>{x.name}</h2>
              </Card.Title>
              <Card.Text>
                <h3>${x.price}</h3>
                <p className="w-75">
                  Auctor eros suspendisse tellus venenatis sodales purus non pellentesque, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus.
                </p>
              </Card.Text>
              <Button onClick={addtocart} variant="primary">
                ADD TO CART
              </Button>
            </Card.Body>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Productdetails;
