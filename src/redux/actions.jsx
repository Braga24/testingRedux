import React from 'react'
import store from './store';

 const fetchProducts = () => {
  return async function nestFetch(){
    let res = await fetch("https://fakestoreapi.com/products");
    let resJson = await res.json();
    console.log(resJson);
    store.dispatch({
       type: 'FETCH_DATA',
        payload: resJson
      });
    
  }
}
export default fetchProducts