import React, { useState ,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchProducts from './redux/actions.jsx';

export default function App() {

  const [valu, setValu] = useState('');
  
  useEffect(()=>{
    fetchProducts()();
  },[]);

  const data = useSelector((state) => state.list);
  
  let arr = useSelector((state)=>state.list[state.list.length-1].id);
  
  let productArr = useSelector((state)=> state.apiData);
  
  const dispatch = useDispatch();
  
 console.log(productArr);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD',
      payload: {
        id:arr+1,
        name: valu
      }
    });
    setValu("");
  }
  return (
    <main>
      <h1>Hello Redux</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={valu} onChange={(e) => setValu(e.target.value)} />
      </form>

      {

        data.map((i,index) => (
            <h2 key={index}>{i.name}</h2>
        ))

      }
      <div style={{display:'flex',flexWrap:'wrap'}}>
         {
            productArr.map((i)=>(
              <div key={i.id}>
                <img src={i.image} style={{width:60,height:'auto'}} />
                <p>{i.price}</p>
                <p>{i.category}</p>
                <p>{i.title}</p>
              </div>
            ))
          }
      </div>
         
    </main>
  )
}
