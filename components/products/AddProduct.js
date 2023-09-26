import React, { useState } from "react";
import {useFormik,useFormikContext} from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Prompt } from "react-router-dom";
const initialValues={
    ProductName:'',
    Quantity:'',
    Price:'',
    Manufacturer:'',
    Description:''

}


  

const validationSchema=Yup.object({
  ProductName: Yup.string().required('Product Name Required'),
  Quantity: Yup.number().required('Required Quantity'),
  Price: Yup.number().required('Required Price'),
  Manufacturer:Yup.string().required('Manufacturer Details Required'),
  Description: Yup.string().required('Description of Product Required')
})


const AddProduct=()=>{
  let history=useHistory();
  
  const [prd,setPrd]=useState({
    ProductName:'',
    Quantity:'',
    Price:'',
    Manufacturer:'',
    Description:''
  })
  const onSubmit= values=>{
    setPrd(prd.ProductName=values.ProductName,
      prd.Quantity=values.Quantity,
      prd.Price=values.Price,
      prd.Manufacturer=values.Manufacturer,
      prd.Description=values.Description)
    axios.post("http://localhost:3211/products", prd);
    history.push("/");
       
    
  }
    const formik=useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });
    return(
      <><Prompt 
      message='You have unsaved changes, are you sure you want to leave?'/>
        <div className="container mt-4">
          <div className="w-75 mx-auto shadow p-5 clr border rounded">
            <h2 className="text-center mb-4">Add A Product</h2>
            <form onSubmit={formik.handleSubmit}>
              
              <div className="form-group mt-2 mb-2">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Product Name"
                  name="ProductName"
                  id='ProductName'
                  value={formik.values.ProductName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} />
                {formik.touched.ProductName &&
                  formik.errors.ProductName ? (<div className='error'>{formik.errors.ProductName}</div>) : null}
              </div>

              <div className="form-control mt-2 mb-2">
                <input
                  type="number"
                  className="form-control form-control-lg"
                  placeholder="Enter Quantity"
                  name="Quantity"
                  id="Quantity"
                  value={formik.values.Quantity}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}>
                </input>
                {formik.touched.Quantity && formik.errors.Quantity ? (<div className='error'>{formik.errors.Quantity}</div>) : null}
              </div>

              <div className="form-control mt-2 mb-2">
                <input type="number"
                  className="form-control form-control-lg"
                  placeholder="Enter Price"
                  name="Price"
                  id="Price"
                  value={formik.values.Price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}>
                </input>
                {formik.touched.Price && formik.errors.Price ? (<div className='error'>{formik.errors.Price}</div>) : null}
              </div>

              <div className="form-group mt-2 mb-2">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Manufacturer Name"
                  name="Manufacturer"
                  id='Manufacturer'
                  value={formik.values.Manufacturer}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} />
                {formik.touched.Manufacturer &&
                  formik.errors.Manufacturer ? (<div className='error'>{formik.errors.Manufacturer}</div>) : null}
              </div>

              <div className="form-group mt-2 mb-2">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Description of Product"
                  name="Description"
                  id='Description'
                  value={formik.values.Description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} />
                {formik.touched.Description &&
                  formik.errors.Description ? (<div className='error'>{formik.errors.Description}</div>) : null}
              </div>
              <button className="btn btn-dark btn-block">Add Product</button>
            </form>
          </div>
        </div></>
    )
}
export default AddProduct;