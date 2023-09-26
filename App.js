import React ,{Suspense}from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import AddProduct from './components/products/AddProduct';
import EditProduct from './components/products/EditProduct';
import ViewProduct from './components/products/ViewProduct';
import Loading from './components/pages/Loading';
import { Prompt } from 'react-router-dom';
const About =React.lazy(()=>import('./components/pages/About'));
const Product =React.lazy(()=>import('./components/pages/Product'));
const Home=React.lazy(()=>import('./components/pages/Home'));
function App() {
  return (
   
    <div className='App'>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/"><Suspense fallback={<Loading/>}><Home/></Suspense></Route>
        
        <Route exact path="/about" ><Suspense fallback={<Loading/>}><About/></Suspense></Route>
        
        <Route exact path="/product" component={<Suspense fallback={<Loading/>}>Product</Suspense>}/>
        <Route exact path="/products/add" ><AddProduct/></Route>
        <Route exact path="/products/edit/:id" component={EditProduct}/>
        <Route exact path="/products/:id" component={ViewProduct} ></Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
   
  );
}

export default App;
