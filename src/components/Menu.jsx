import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Menu() {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9999/admin/menu')
      .then(response => {
        setFoodData(response.data);
      })
      .catch(error => console.error('Error fetching food data:', error));
  }, []);

  return (
    <div className="container">
        <h1 className="mb-4 text-center" style={{ color: '#DB2222' }}>Notre Menu</h1>
      <div className="row">
      <h1 style={{ color: '#6EE22A' }}>Nos Frijitas</h1>
        {foodData.map((foodItem, index) => (
          <div key={index} className="col-md-4 mb-4">
            
            <div className="card h-100">
              <img src={foodItem.img} className="card-img-top" alt={foodItem.name}  style={{ maxWidth: '100%', objectFit: 'cover', width:'410px',height:'350px' }} />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#DB2222', fontFamily: 'fantasy', fontSize: '30px', height: '50px', overflow: 'hidden' }}>{foodItem.name}</h5>
                <p className="card-text" style={{ color: '#6EE22A', fontFamily: 'fantasy', fontSize: '25px', height: '30px', overflow: 'hidden' }}>{foodItem.price.toFixed(2)} TND</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
