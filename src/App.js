/*import React, {useEffect} from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const container=document.getElementById('container');
    fetch('https://fakestoreapi.com/products?sort=asc')
.then(response=>response.json())

.then(res=>{
  res.forEach(product=>{
   const card=document.createElement('div');
   card.classList.add('card');
   card.innerHTML=`<img src='${product.image}' alt='${product.title}'/>
   <h2>${product.title}</h2>
   <p>${product.price}</p>`;
   container.appendChild(card);
  });
});
},[])
  return (
    <>
    <h1>Fetch data from api</h1>
    <div id="container" className="container">
      
    </div>
    </>
  );
}

export default App;*/
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products?sort=asc')
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <>
//       <h1>Fetch data from API</h1>
//       <div className="container">
//         {products.map(product => (
//           <div key={product.id} className="card">
//             <img src={product.image} alt={product.title} />
//             <h2>{product.title}</h2>
//             <p>${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;


import React, {useState, useEffect} from 'react';
import './App.css';

function App(){
  const[products, setProducts]=useState([]);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products?sort=asc')
    .then(response=>response.json())
    .then(res=>setProducts(res))
    .catch(error=>console.error('Error fetching data:', error));
  },[]);

  return(
    <>
    <h1>fetch data from api</h1>
    <div className="container">
      {products.map(product=>(
        <div key={product.id} className="card">
          <img src={product.image} alt={product.title}/>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </div>
      ))}
    </div>
    </>
  );
}

export default App;