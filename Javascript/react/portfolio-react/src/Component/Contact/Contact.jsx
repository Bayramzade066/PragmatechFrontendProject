import React from 'react';
import './Contact.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


function Contact() {
  const containerStyle = {
    width: '100%',
    height: '57rem'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

  return (
    <div className="contact">
      <div className="__map">
      <LoadScript
      googleMapsApiKey="YOUR_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
      </div>
      <div className="__contact">
        <div className="__left">
            <h1>Contact Info:</h1>
            <p>Praesent interdum congue mauris, et fringilla lacus pel vitae. Quisque nisl mauris, aliquam eu ultrices vel, conse vitae sapien at imperdiet risus. Quisque cursus risus id. fermentum, in auctor quam consectetur.</p>
            <p> <span>Address:</span> 10111 Santa Monica Boulevard, LA </p>
            <p> <span>Phone:</span> +44 987 065 908</p>
            <p> <span>Email:</span> info@Example.com </p>
            <p> <span>Fax:</span>   +44 987 065 909</p>
        </div>
        <div className="__right">
          <div className="__twoinputs">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>
          <input type="text" placeholder="Your Title" />
          <input type="textarea" placeholder="Your Comment" className="textarea" />
          <button type="button">SEND MESSAGE</button>
        </div>
      </div>
    </div>
  )
}

export default Contact