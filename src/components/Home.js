import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { ADD_TO_CART,REMOVE_FROM_CART } from '../redux/CartSlice';
import {useDispatch,useSelector} from "react-redux";
import { Products } from '../data/Products';
const Home = () => {

 const cartData=useSelector((state)=>state.CartReducer);
 const dispatch=useDispatch()

 console.log(cartData)

 return (

    <div className="d-flex flex-wrap justify-content-center mt-5">
      {Products.map((item,) => {
        return <div className="card mb-3 d-flex flex-wrap m-4 " style={{ width: '18rem' }}>
          <div className='justify-content-center'>
            <img width="150px" height="200px" src={item.images} class="attachment-post-thumbnail size-post-thumbnail wp-post-image" decoding="async" fetchpriority="high" />
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col d-flex">
                <h5 className="card-title">{item.title}</h5>
              </div>
              <div className="col d-flex justify-content-end">
                <h5 className="card-title text-success ">
                  ⭐ {item.rating}
                </h5>
              </div>
            </div>
            {/* <p className='card-text'>{item.description}</p> */}
            <p className='card-text'><b>Price: ${item.price}</b></p>
            <div id="card-footer" class="mt-2 d-flex flex-row flex-nowrap justify-content-center">
               {cartData.cart.some(p => p.id === item.id) ? 
              (
                  <button className='btn btn-danger'
                  onClick={() => {
                    dispatch(REMOVE_FROM_CART(item))
                  }} >
                  Remove from Cart</button>)
                : (<button className='btn btn-warning'
                  onClick={() => {
                    dispatch(ADD_TO_CART(item))
                  }}>
                  Add To Cart
                </button>)}
            


            </div>
          </div>
        </div>
      })}


    </div>
    
  )

}

export default Home