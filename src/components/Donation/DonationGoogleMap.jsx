import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text}) => <div> <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" height="50" width="50" alt="" />{text}</div>;

class DonationGoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 1.29,
      lng: 103.85
    },
    zoom: 11
  };


  render() {
    //console.log(this.props)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact 
          bootstrapURLKeys={{ key: 'AIzaSyA7UYITtdux3_kJzsFhO8r5Mom0bfXgyXU' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
                lat={this.props.lat}
                lng={this.props.long}
                text={this.props.name}
              />
        </GoogleMapReact>
      </div>

      
    );
  }
}

export default DonationGoogleMap

