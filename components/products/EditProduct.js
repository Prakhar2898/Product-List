import React,{ useState,useEffect } from "react";
import { useHistory,useParams,Link } from "react-router-dom";
import axios from "axios";

const EditProduct=()=>{
    const history = useHistory();
    const { id } = useParams();
    
    const [ProductName,setName]=useState("");
    const [Quantity,setQuantity]=useState(0);
    const [Price,setPrice]=useState(0);
    const [Manufacturer,setManufacturer]=useState("");
    const [Description,setDescription]=useState("");
    
    useEffect(()=>{
       axios.get(`http://localhost:3211/products/${id}`).then((res)=>{
        setName(res.data.ProductName);
        setQuantity(res.data.Quantity);
        setPrice(res.data.Price);
        setManufacturer(res.data.Manufacturer);
        setDescription(res.data.Description);
       })
    },[]);
  
   const data={
    ProductName:ProductName,
    Quantity:Quantity,
    Price:Price,
    Manufacturer:Manufacturer,
    Description:Description
   }

   function Update(e)
   {
    e.preventDefault();
    axios.put(`http://localhost:3211/products/${id}`,data).then(history.push("/"))
   }
return(
    <div className="container mt-4  w-50">
      <div className="w-75 mx-auto shadow p-5 bg-secondary border rounded">
        <h2 className="text-center mb-4">Edit Product</h2>
        <form >

          <div className="form-group mt-2 mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              name="ProductName"
              value={ProductName}
              onChange={(e)=> setName(e.target.value)}
            />
          </div>

          <div className="form-group mt-2 mb-2">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Quantity"
              name="Quantity"
              value={Quantity}
              onChange={(e)=>setQuantity(e.target.value)}
            />
          </div>
          <div className="form-group mt-2 mb-2">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Price"
              name="Price"
              value={Price}
              onChange={(e)=>setPrice(e.target.value)}
            />
          </div>
          <div className="form-group mt-2 mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Manufacturer Details"
              name="Manufacturer"
              value={Manufacturer}
              onChange={(e)=>setManufacturer(e.target.value)}
            />
          </div>
          <div className="form-group mt-2 mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Give Description about Product"
              name="Description"
              value={Description}
              onChange={(e)=>setDescription(e.target.value)}
            />
          </div>
          <button className="btn btn-warning btn-block mr-1" onClick={Update}>Update User</button>
          
        </form>
        <br></br>
        <Link className="btn btn-warning " to="/">  Back to Product List</Link>
      </div>
      
    </div>
)
}
export default EditProduct;