import React, { useState, useContext } from 'react';
import { MyContext } from '../pages/Context';
import './Addproduct.css';

function AddProduct() {
  const { product,setProducts } = useContext(MyContext);

  const [newProduct, setNewProduct] = useState({
    title: '',
    type: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!newProduct.title || !newProduct.type || !newProduct.price || !newProduct.image) {
      alert('Please fill in all the fields');
      return;
    }

    // Generate a unique ID for the new product
    const newProductId = Date.now();

    // Create the new product object
    const newProductData = {
      id: newProductId,
      title: newProduct.title,
      type: newProduct.type,
      price: newProduct.price,
      image: newProduct.image,
    };

    // Add the new product to the products list
    setProducts([...products, newProductData]);

    // Clear the form fields
    setNewProduct({
      title: '',
      type: '',
      price: '',
      image: '',
    });

    alert('Product added successfully');
  };

  return (
    <div className="add-product-container">
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={newProduct.title} onChange={handleChange} required />
        </label>

        <label>
          Type:
          <input type="text" name="type" value={newProduct.type} onChange={handleChange} required />
        </label>

        <label>
          Price:
          <input type="number" name="price" value={newProduct.price} onChange={handleChange} required />
        </label>

        <label>
          Image URL:
          <input type="text" name="image" value={newProduct.image} onChange={handleChange} required />
        </label>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;