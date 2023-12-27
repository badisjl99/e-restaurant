import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

const AdminPage = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    img: '',
  });

  const [selectedItemId, setSelectedItemId] = useState(null);

 
  const [showAddModal, setShowAddModal] = useState(false);
  const [showModifyModal, setShowModifyModal] = useState(false);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await axios.get('http://localhost:9999/admin/menu');
      setFoodItems(response.data);
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddItem = async () => {
    try {
      await axios.post('http://localhost:9999/admin/add', formData);
      fetchMenu();
   
      setFormData({
        name: '',
        price: '',
        img: '',
      });
    
      setShowAddModal(false);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleModifyItem = (id) => {
    const selectedItem = foodItems.find((item) => item._id === id);
    setFormData({ ...selectedItem });
    setSelectedItemId(id);
   
    setShowModifyModal(true);
  };

  const handleConfirmModify = async () => {
    try {
      await axios.put(`http://localhost:9999/admin/modify/${selectedItemId}`, formData);
      fetchMenu();
     
      setShowModifyModal(false);
    } catch (error) {
      console.error('Error modifying item:', error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:9999/admin/delete/${id}`);
      fetchMenu();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="mb-4 text-center" style={{ color: '#DB2222' }}>Admin Page</h1>
      <div>
        
        <Button variant="primary" onClick={() => setShowAddModal(true)}>Add Item</Button>

       
        <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Food Name</Form.Label>
                <Form.Control type="text" placeholder="Food Name" name="name" value={formData.name} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Price" name="price" value={formData.price} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="formImg">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" placeholder="Image URL" name="img" value={formData.img} onChange={handleInputChange} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowAddModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddItem}>
              Add Item
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Button to open Bootstrap modal for modifying items */}
        <Button variant="primary" onClick={() => setShowModifyModal(true)} hidden>Modify Item</Button>

        {/* Bootstrap modal for modifying items */}
        <Modal show={showModifyModal} onHide={() => setShowModifyModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modify Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formNameModify">
                <Form.Label>Food Name</Form.Label>
                <Form.Control type="text" placeholder="Food Name" name="name" value={formData.name} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="formPriceModify">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Price" name="price" value={formData.price} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="formImgModify">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" placeholder="Image URL" name="img" value={formData.img} onChange={handleInputChange} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModifyModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleConfirmModify}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="fixed-bottom mb-4" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="row">
          {foodItems.map((item) => (
            <div key={item._id} className="col mb-6">
              <div className="card h-100" style={{ width: '18rem' }}>
                <img className="card-img-top" src={item.img} alt={item.name} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text" style={{ fontSize: '20px' }}>{item.price} <span style={{ color: 'red' }}>TND</span></p>
                  <div className="mt-auto">
                   

                    <button className="btn btn-warning" onClick={() => handleModifyItem(item._id)}>
                      Modify
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDeleteItem(item._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
