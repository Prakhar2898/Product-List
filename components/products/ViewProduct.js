import React,{useState,useEffect} from "react";
import {Link,useParams} from 'react-router-dom';
import axios from 'axios';

const ViewProduct=()=>{
const [product,setProduct]=useState({
    ProductName:'',
    Quantity: 0,
    Price: 0,
    Manufacturer:'',
    Description:''

});

const loadProduct = async () => {
    const res = await axios.get(`http://localhost:3211/products/${id}`);
    setProduct(res.data);
  };
const {id} =useParams();
useEffect(()=>{
  loadProduct();
},[])


return(
    <div className="container py-4 bg-secondary w-50 mt-4 border rounded">
        <Link className="btn btn-outline-warning" to="/">Back to Product List</Link>
        <h1 className="display-4 text-white bg-dark border rounded mt-2">PRODUCT ID: {id}</h1>
        <hr/>
        <ul className="list-group w-100 ">
           <li className="list-group-item text-center text-white  bg-dark"><strong>Product Name: </strong>{product.ProductName}</li>
           <li className="list-group-item text-center text-white  bg-dark"><strong>Product Quantity:</strong> {product.Quantity}</li>
           <li className="list-group-item text-center text-white bg-dark"><strong>Product Price:</strong> {product.Price}</li>
           <li className="list-group-item text-center text-white bg-dark"><strong>Manufacturer Detail: </strong>{product.Manufacturer}</li>
           <li className="list-group-item text-center text-white bg-dark"><strong>Product Description:</strong> {product.Description}</li>
        </ul>
    </div>
)
}
export default ViewProduct;

