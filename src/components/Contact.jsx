import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactForm() {
  const backgroundImageUrl = 'https://cdn.pixabay.com/photo/2017/10/22/20/43/table-2879215_1280.jpg';

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '70vw',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '50px',
    marginLeft: '350px',
  };

  const inputStyle = {
    maxWidth: '550px',
  };

  return (
    <div style={containerStyle}>
      <div className="container">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="fullName" className="form-label mt-4"></label>
            <input
              type="text"
              className="form-control max-width-250"
              id="fullName"
              placeholder="Nom et Prenom"
              style={inputStyle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label mt-4"></label>
            <input
              type="email"
              className="form-control max-width-250"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Adresse Email"
              style={inputStyle}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label mt-4"></label>
            <textarea
              className="form-control max-width-250"
              id="message"
              rows="10"
              placeholder="Votre Message Ici"
              style={inputStyle}
            ></textarea>
          </div>
          <br></br>
          <button className="btn btn-lg btn-danger" type="button" style={{ width: '350px', height: '50px', fontSize: '25px' }}>
            Voir Notre Menu
          </button>
        </form>
        
      </div>
    
    </div>
  );
}

export default ContactForm;
