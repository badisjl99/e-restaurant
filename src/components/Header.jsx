import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const containerStyle = {
    position: 'relative',
  };

  const pageStyle = {
    backgroundImage: 'url(https://img.freepik.com/free-photo/banner-with-abstract-background-with-green-paper-cutout-waves_24972-1914.jpg?w=1380&t=st=1703508443~exp=1703509043~hmac=2d8c4a0f12e736089906976ee7a50cbdcf9308503ec60b1ccee45d083959c5ca)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh', // Set the height to 100% of the viewport height
  };

  const logoStyle = {
    width: '125px',
    height: '90px',
    position: 'absolute',
    top: '20px',
    left: '20px',
  };

  const foodImageStyle = {
    width: '30%', 
    borderRadius: '50%',
    border: '3px solid red',
    marginLeft: '250px',
    marginTop:'150px',
  };

  const textContainerStyle = {
    position: 'absolute', 
    top: '50%', 
    transform: 'translateY(-50%)', 
    marginLeft: '1200px',
    textAlign: 'left',
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <a href="www.google.com"> <img src="https://i.ibb.co/9N29Yrj/logo.png" alt="Logo" style={logoStyle} /></a>   
        <img src="https://i.ibb.co/b2CDvny/food.jpg" alt="Food" style={foodImageStyle} />

        <div style={textContainerStyle}>
          <h6 style={{color:'white',fontSize:'30px'}}>Chili's Tunisie</h6>
          <h1 style={{ color: '#6EE22A', fontFamily: "'Marker Felt', fantasy, cursive" ,fontSize:'70px',maxWidth:'700px'}}>
            Découvrez Les Meilleures Recettes Syriennes
          </h1>
          <br></br>
          <button className="btn btn-lg btn-danger" type="button" style={{width:'350px',height:'70px',fontSize:'25px'}}>
            Voir Notre Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
