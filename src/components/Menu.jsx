import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {

  const fajitasData = [
    {
        title: 'Trio Fajitas',
        price: '49.90 DT',
        image: 'https://imgs.search.brave.com/f928UhWdrnTOiGR7QURVQyTdOaloUgnbA_3nnMDNB2w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI3/MDk4ODQ4NS9waG90/by9zdXByZW1lLXBp/enphLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1wb3U2ZmVD/ZG9RejNKNmdGbXo2/ODdKWFgzSl9tWlh3/cUEyQzdIaTVZLW5r/PQ',
      },
    
      {
        title: 'Pizza',
        price: '25 DT',
        image: 'https://imgs.search.brave.com/3FH-XhRVPyYW6dl32gTPFX5ohSmkCi3btvpExzLgaYg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzUwLzcyLzg2/LzM2MF9GXzI1MDcy/ODYyMF9aanBuZXVh/ZlhzSEJPV3cxcUti/dDVIYlVESjBGOG9h/WS5qcGc'
      },
  
      {
        title: 'Lablebi',
        price: '7 DT',
        image: 'https://imgs.search.brave.com/-9qmtXr7Ybwu-U8tbjOgDcRLSoRbVbUnmUQlWcl7AgE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwMS5ueXQuY29t/L2ltYWdlcy8yMDIw/LzAyLzE5L2Rpbmlu/Zy8xNGFwcGVyZXgv/MTRhcHBlcmV4LWFy/dGljbGVMYXJnZS5q/cGc_dz0xMjgwJnE9/NzU'
      },
  
      {
          title: 'Trio Fajitas',
          price: '49.90 DT',
          image: 'https://imgs.search.brave.com/f928UhWdrnTOiGR7QURVQyTdOaloUgnbA_3nnMDNB2w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI3/MDk4ODQ4NS9waG90/by9zdXByZW1lLXBp/enphLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1wb3U2ZmVD/ZG9RejNKNmdGbXo2/ODdKWFgzSl9tWlh3/cUEyQzdIaTVZLW5r/PQ',
        },
      
        {
          title: 'Pizza',
          price: '25 DT',
          image: 'https://imgs.search.brave.com/3FH-XhRVPyYW6dl32gTPFX5ohSmkCi3btvpExzLgaYg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzUwLzcyLzg2/LzM2MF9GXzI1MDcy/ODYyMF9aanBuZXVh/ZlhzSEJPV3cxcUti/dDVIYlVESjBGOG9h/WS5qcGc'
        },
    
        {
          title: 'Lablebi',
          price: '7 DT',
          image: 'https://imgs.search.brave.com/-9qmtXr7Ybwu-U8tbjOgDcRLSoRbVbUnmUQlWcl7AgE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwMS5ueXQuY29t/L2ltYWdlcy8yMDIw/LzAyLzE5L2Rpbmlu/Zy8xNGFwcGVyZXgv/MTRhcHBlcmV4LWFy/dGljbGVMYXJnZS5q/cGc_dz0xMjgwJnE9/NzU'
        },
  ];

  const pastaData = [
    {
      title: 'Pizza',
      price: '25 DT',
      image: 'https://imgs.search.brave.com/3FH-XhRVPyYW6dl32gTPFX5ohSmkCi3btvpExzLgaYg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzUwLzcyLzg2/LzM2MF9GXzI1MDcy/ODYyMF9aanBuZXVh/ZlhzSEJPV3cxcUti/dDVIYlVESjBGOG9h/WS5qcGc'
    },
    {
        title: 'Trio Fajitas',
        price: '49.90 DT',
        image: 'https://imgs.search.brave.com/f928UhWdrnTOiGR7QURVQyTdOaloUgnbA_3nnMDNB2w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI3/MDk4ODQ4NS9waG90/by9zdXByZW1lLXBp/enphLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1wb3U2ZmVD/ZG9RejNKNmdGbXo2/ODdKWFgzSl9tWlh3/cUEyQzdIaTVZLW5r/PQ',
      },
    
      {
        title: 'Pizza',
        price: '25 DT',
        image: 'https://imgs.search.brave.com/3FH-XhRVPyYW6dl32gTPFX5ohSmkCi3btvpExzLgaYg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzUwLzcyLzg2/LzM2MF9GXzI1MDcy/ODYyMF9aanBuZXVh/ZlhzSEJPV3cxcUti/dDVIYlVESjBGOG9h/WS5qcGc'
      },
  
      {
        title: 'Lablebi',
        price: '7 DT',
        image: 'https://imgs.search.brave.com/-9qmtXr7Ybwu-U8tbjOgDcRLSoRbVbUnmUQlWcl7AgE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwMS5ueXQuY29t/L2ltYWdlcy8yMDIw/LzAyLzE5L2Rpbmlu/Zy8xNGFwcGVyZXgv/MTRhcHBlcmV4LWFy/dGljbGVMYXJnZS5q/cGc_dz0xMjgwJnE9/NzU'
      },
  
  ];

  return (
    <div>
      <br /><br />
      <h1 className="mb-4 text-center" style={{ color: '#DB2222' }}>Notre Menu</h1>

      <div className="container mt-5">
        <h1 style={{ color: '#6EE22A' }}>Nos Fajitas</h1>
        <br /><br />
        <div className="row">
          {fajitasData.map((card, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body" style={{ height: '300px', overflow: 'hidden' }}>
                  <img
                    src={card.image}
                    style={{ maxWidth: '100%', objectFit: 'cover', height: '100%' }}
                    alt='error'
                  />
                </div>
                <h4 className="card-title" style={{ color: '#DB2222', fontFamily: 'fantasy', fontSize: '30px', height: '50px', overflow: 'hidden' }}>{card.title}</h4>
                <h5 style={{ color: '#6EE22A', fontFamily: 'fantasy', fontSize: '25px', height: '30px', overflow: 'hidden' }}>{card.price}</h5>
              </div>
            </div>
          ))}
        </div>
            <br></br><br></br> <br></br><br></br>
        <h1 style={{ color: '#6EE22A' }}>Nos Pâtes</h1>
        <br></br>   
        <br /><br />
        <div className="row">
          {pastaData.map((card, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body" style={{ height: '300px', overflow: 'hidden' }}>
                  <img
                    src={card.image}
                    style={{ maxWidth: '100%', objectFit: 'cover', height: '100%' }}
                    alt='error'
                  />
                </div>
                <h4 className="card-title" style={{ color: '#DB2222', fontFamily: 'fantasy', fontSize: '30px', height: '50px', overflow: 'hidden' }}>{card.title}</h4>
                <h5 style={{ color: '#6EE22A', fontFamily: 'fantasy', fontSize: '25px', height: '30px', overflow: 'hidden' }}>{card.price}</h5>
              </div>
            </div>
          ))}
          <a href='www.google.com'>Voir Plus</a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
