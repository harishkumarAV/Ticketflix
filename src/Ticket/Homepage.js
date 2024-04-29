import React from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Handle the "Get Started" button click event
    // Add your code here to perform any necessary actions before routing

    // Redirect the user to the login page
    navigate("/login");
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: `url(https://www.wallpaperflare.com/static/95/13/239/star-wars-collage-science-fiction-darth-vader-wallpaper.jpg)`,
        backgroundSize: 'cover',
      }}
    >
      <h1 style={{ color: '#ffff00', textAlign: 'center' }}>ENHANCE THE MOVIE GOER'S EXPERIENCE!</h1>
      <button onClick={handleGetStarted} style={{ backgroundColor: 'red', color: '#fff', fontSize: '1.2rem', padding: '10px 20px' }}>Get Started</button>


    </div>
  );
}

export default Homepage;
