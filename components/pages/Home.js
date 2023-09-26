import React,{useState,useEffect}from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import view from './eye-fill.svg';
import edit from './pencil.svg';
import del from './trash.svg';
import { Prompt } from 'react-router-dom';



const Home=()=>{
    const [products,setProducts]=useState([]);
    const [query,setQuery]=useState("");
   
    
    let inputHandler=(e)=>{
      var lowerCase=e.target.value.toLowerCase();
      setQuery(lowerCase);
    }

    const loadProducts=async()=>{
      const result=await axios.get("http://localhost:3211/products");
      setProducts(result.data.reverse())
  }
    useEffect(()=>{
      loadProducts();
      console.log(products)
    },[]);

    
    const deleteProduct = async id => {
      
      await axios.delete(`http://localhost:3211/products/${id}`);
      loadProducts();
    };
     
    const filteredData =products.filter((el)=>{
      if(query === '')
      {
        return el;
      }
      else{
        return el.ProductName.toLowerCase().includes(query);
      }
    })
    
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];
    
    return (
      
        <div className='container'>
          
             <div className='py-4'>
             <div className='text-right'>
                <h1 >Product List<form className="d-flex w-25" role="search">
        <input className="form-control me-2" type="search" placeholder="Search Product Name here" aria-label="Search" onChange={inputHandler} ></input>
  
      </form></h1>
      
      <h6><strong>Today's Day- </strong>{day}</h6></div>
  <table className="table table-striped table-hover border shadow ">
  <thead className='table-dark'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope='col'>View, Edit, Delete</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    {
        
        filteredData.map((user,index)=>(
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.ProductName}</td>
                <td>{user.Quantity}</td>
                <td>Rs {user.Price}</td>
                <td>
                    <Link className='btn btn-outline-success me-2' to={`/products/${user.id}`} ><img src={view} width="20" height="20" ></img></Link>
                    <Link className='btn btn-outline-secondary me-2' to={`/products/edit/${user.id}`}><img src={edit} width="20" height="20"></img></Link>
                    <Link className='btn btn-outline-danger me-2' onClick={()=>deleteProduct(user.id)}><img src={del} width="20" height="20"></img></Link>
                </td>
            </tr>
        ))
    }
  </tbody>
</table>
             </div>
        
        </div>
    )
}
export default Home;
