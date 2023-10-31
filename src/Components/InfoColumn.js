import React from 'react';

const InfoColumn = () => {
  return (
    <div className="info-column">
      <h1>Stay connected, wherever you travel,<br/> at affordable rates</h1>
      <p>Our eSIMs are trusted by over 5,000,000 people worldwide</p>
      
      <div className="store-icons">
        <div className='twoLogos'>
           <a href='#'>
              <img className='store1' id='android' src="https://static.vecteezy.com/system/resources/previews/022/484/501/non_2x/google-play-store-icon-logo-symbol-free-png.png" alt="Google Play Store Icon" />
          </a>
          <a href='#'>
              <img className='store1' id="apple" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png" alt="Apple Store Icon" />
          </a>
          <img id='star1' src="https://t3.ftcdn.net/jpg/03/35/91/90/360_F_335919003_TH0ZtHZZ5QGT34n1NcQXzRGvz4Pthg11.jpg" alr="star"/>

        </div>
        <div className='textImages'>
          <p>From 150,000+ Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default InfoColumn;
