import image1 from '../assets/IMG_8180.JPG';
import '../styles/About.css';


function App() {
  return (
    <>
    <div className="about-section">
    <div className="Header">
      <h1>About Us</h1>
      <hr style={{ margin: '0 auto', width: '5vw', height: '1px', borderTop: 'maroon solid 2px', backgroundColor: "maroon"}} />
  </div>

  <div className="Sub-Header"> <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
    used to demonstrate the visual form of a document or a 
      typeface without relying 
      on meaningful content.Lorem<br /> ipsum may be used as a placeholder 
      before final copy is available </p> 
  </div>    

    <div className="parent-grid">
      <div className="upper-flex-container">
      <div className="card first-card">
         <img src={image1} alt="My alt" className="imageee"></img>
      </div>


        <div className="card second-card">
        <h1>our mission</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         </p> 
        
        </div>
      </div>
      </div>
      
      <div className="bottom-flex-container">
      <div className="card third-card">
        <h1>our mission</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         </p> 
          
        </div>
        <div className="card fourth-card">
        
         {
         <img src={image1} alt="My alt" className="imageee"></img>
         }
        
        </div>
      </div>

    </div>
  </>
  );
}

export default App;
