import React, { useState } from 'react';
import './Popup.css';
import ReactPlayer from 'react-player';

function Popup({ video, onClose }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const showPopup = () => {
    setIsPopupVisible(true);
  };

  const hidePopup = () => {
    setIsPopupVisible(false);
    onClose(); // Close the popup when the "Close" button is clicked
  };

  return (
    <div>
      <button className='popup-button' onClick={showPopup}>Show Player</button>
      {isPopupVisible && (
        <div id="popup" className="popup">
          <div className="popup-content">
            <span id="close-popup" className="close-button" onClick={hidePopup}>
              &times;
            </span>
            <h1 className='popup-title'>{video.title}</h1>
            <div className="video-container">
                <ReactPlayer
                playing={true}
                url={video.link}
                width="500px"
                height="500px"
                controls= {true}
                
                />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
