import '../App.css';
import './LocationSection.css';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react'


class LoactionSection extends Component {

  static defaultProps = {
    center: {
      lat: 17.0007,
      lng: 73.7772
    },
    zoom: 14
  };
  render() {
    return (
      <div className='location-container'>
          <h1>Location</h1>
            <div className='map'>
                <GoogleMapReact
                     bootstrapURLKeys={{ key: "AIzaSyDUnHLz8Esrh1pWB8W04uJC95LoEmINBcI" }}
                     defaultZoom={14}
                     defaultCenter={{ lat: 17.0007, lng: 73.7772 }}
                >

                  <Icon   
                     position= {{ lat: 17.0007, lng: 73.7772 }}
                     name='map marker alternate'
                     color='red' size='big'
                     className='location-icon'
                  />
              </GoogleMapReact>
      </div>
      </div>
    );
  }
}
  
  export default LoactionSection;