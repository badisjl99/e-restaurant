import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
  const [fajitasData, setFajitasData] = useState([]);
  const [pastaData, setPastaData] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:9999/admin/menu')
      .then(response => setFajitasData(response.data))
      .catch(error => console.error('Error fetching Fajitas data:', error));


    axios.get('http://localhost:9999/admin/menu')
      .then(response => setPastaData(response.data))
      .catch(error => console.error('Error fetching Pasta data:', error));
  }, []);
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
