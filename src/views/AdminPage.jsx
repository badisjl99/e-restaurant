import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodAdmin = () => {
  const [foodData, setFoodData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    img: '',
  });

  useEffect(() => {
    // Fetch the menu items when the component mounts
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await axios.get('http://localhost:9999/admin/menu');
      setFoodData(response.data);
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddItem = async () => {
    try {
      await axios.post('http://localhost:9999/admin/add', formData);
      // After adding, fetch the updated menu
      fetchMenu();
      // Clear the form data
      setFormData({ name: '', price: '', img: '' });
    } catch (error) {
      console.error('Error adding food item:', error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:9999/admin/delete/${id}`);
      // After deleting, fetch the updated menu
      fetchMenu();
    } catch (error) {
      console.error('Error deleting food item:', error);
    }
  };

  return (
    <div>
      <h1>Food Admin Panel</h1>
      <div>
        <h2>Add Food Item</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          <br />
          <label>Price:</label>
          <input type="text" name="price" value={formData.price} onChange={handleInputChange} />
          <br />
          <label>Image URL:</label>
          <input type="text" name="img" value={formData.img} onChange={handleInputChange} />
          <br />
          <button type="button" onClick={handleAddItem}>
            Add Item
          </button>
        </form>
      </div>

      <div>
        <h2>Menu Items</h2>
        <ul>
          {foodData.map((item) => (
            <li key={item._id}>
              {item.name} - ${item.price}{' '}
              <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FoodAdmin;
