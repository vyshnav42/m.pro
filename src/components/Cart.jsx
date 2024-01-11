import { useContext, useState, useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Mycontext } from "../context/context";

const Cart = () => {

 const { product, cart, setCart } = useContext(Mycontext);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  const cartItems = cart.map((item) => parseInt(item));

  const filterProduct = product.filter((item) => cartItems.includes(item.id));

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item !== productId);
    setCart(updatedCart);
    
  };

  const incrementQuantity = (productId) => {
    const updatedCart = [...cartItems, productId];
    setCart(updatedCart);
  };

  const decrementQuantity = (productId) => {
    const index = cartItems.indexOf(productId);
    if (index !== -1) {
      cartItems.splice(index, 1);
      setCart([...cartItems]);
    }
  };
  


  return (
    <Container>
      <div className="py-4">
        <h1>CART</h1>
        <p>Cart Count: {cartCount}</p> {/* Display the cart count */}
        <Row>
          {filterProduct.map((x) => (
            <Col key={x.id} lg={4} md={6} sm={12} className="mb-4">
              <Card className="hovereffect">
                <Card.Img
                  variant="top"
                  src={x.img}
                  alt={x.name}
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{x.name}</Card.Title>
                  <Card.Text>${x.price}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(x.id)}
                    >
                      Remove
                    </Button>
                    <div className="d-flex align-items-center">
                      <Button
                        variant="secondary"
                        onClick={() => decrementQuantity(x.id)}
                      >
                        -
                      </Button>
                      <span className="mx-2">{cartItems.filter((item) => item === x.id).length}</span>
                      <Button
                        variant="primary"
                        onClick={() => incrementQuantity(x.id)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Cart;
