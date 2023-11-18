import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react';
import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';
import { AppContext, useAppState } from './app/app';
import State from './components/State';

function App() {
  const [currentRoute, setCurrentRoute] = useState();

  useEffect(() =>{
    const path = window.location.pathname.toLocaleLowerCase();
    setCurrentRoute(path.slice(1,path.length));
  }, [])

  return (
    <AppContext.Provider value={useAppState()}>
      <BrowserRouter>
      <div className='container'>
      <nav className='navbar bg-body-tertiary'>
        <div className='container-fluid'>
        <ul className='nav nav-pills'>
          <li>
            <Link 
              onClick={() => setCurrentRoute("home")}
              className={
                currentRoute == 'home'?'btn btn-info ms-1':'btn btn-outline-info ms-1'
              } 
              to={"/home"}>
              Home
            </Link>
          </li>
          <li>
            <Link 
            onClick={() => setCurrentRoute("products")}
            className={
              currentRoute == 'products'?'btn btn-info ms-1':'btn btn-outline-info ms-1'
            } 
            to={"/products"}>
              Products
            </Link>
          </li>

          <li>
            <Link 
            onClick={() => setCurrentRoute("newProduct")}
            className={
              currentRoute == 'newProduct'?'btn btn-info ms-1':'btn btn-outline-info ms-1'
            } 
            to={"/newProduct"}>
              New Product
            </Link>
          </li>
        </ul>
        <ul>
          <li className='nav navbar'>
            <State></State>
          </li>
        </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/newProduct' element={<NewProduct/>}></Route>
        <Route path='/editProduct/:id' element={<EditProduct/>}></Route>
      </Routes>
      </div>
      </BrowserRouter>
    </AppContext.Provider>

  );
}

export default App;
