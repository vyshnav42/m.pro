import React, { useContext } from 'react';
import './Adminproduct.css';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../context/context';
import Sidebar from './Adsidebar';


function Adminproducts() {
  const { product, setProducts } = useContext(Mycontext);
  console.log(product);
  const navigate = useNavigate();

  const handleDeleteProduct = (productId) => {
    const deleteProducts = product.filter((product) => product.id !== productId);
    setProducts(deleteProducts);
    console.log(`Deleting product with ID: ${productId}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }} className="admin-products-container">
      <Sidebar/>
      <div className="admin-products-table-container">
        <h2>Admin Products</h2>
        <table className="admin-products-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>ID</th>
              <th>Type</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {product.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.img} alt={product.title} className="admin-product-image" />
                </td>
                <td>{product.name}</td>
                <td>{product.id}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  <button className="delete-button bg-danger" onClick={() => handleDeleteProduct(product.id)}>Delete</button> 
                  <button className="Edit-button" onClick={() => navigate(`/admin/editproduct/${product.id}`)}>EDIT</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminproducts;
