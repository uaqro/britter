import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { Component } from "react";
import { MyContext } from "../contexts/context";
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
// import { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";
import MY_SERVICE from "../services";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiY2hlY3oiLCJhIjoiY2s1NXJpcDIwMDA4azNlbnoxNnpvem93bSJ9.IJ3kUuPzWxiW3lJJUfzASA";


const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
C20.1,15.8,20.2,15.8,20.2,15.7z`;

class MapComponent extends Component {

  state = {
    viewport: {
      width: '100%',
      longitude: -99.14556,
      latitude: 19.41944,
      bearing: 0,
			pitch: 0,
      zoom: 12
    },
    // searchResultLayer: null,
    popupInfo: null,
    address:'',
    position: [-99.14556, 19.41944]
  };
  

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position=> {
      const {longitude, latitude} = position.coords;
      this.setState({
        viewport: {
          width: '100%',
          longitude: longitude,
          latitude: latitude,
          bearing: 0,
          pitch: 0,
          zoom: 14
        },
        position: [longitude, latitude]
      })
      console.log(this.state.position[0], this.state.position[1])
      this.props.setRecommendations(MY_SERVICE.location({location:[this.state.position[0],this.state.position[0]], query:this.props.activity}))
      // this.props.setAsk(false)
    })
  }
  

  mapRef = React.createRef();

    _renderPopup() {
      const { popupInfo } = this.state;
      return (
          popupInfo && (
              <Popup
                  tipSize={10}
                  anchor='bottom'
                  longitude={this.state.position[0]}
                  latitude={this.state.position[1]}
                  closeOnClick={false}
                  onClose={() => this.setState({ popupInfo: null })}
              >
                  <div style={{ padding: '5px' }}>
                    <p style={{ fontSize: '15px' }}>{this.context.state.formSignup.name}</p>
                    <p style={{ fontSize: '15px' }}>{this.context.state.formSignup.category}</p>
                    <p style={{ fontSize: '15px'}}>{this.state.address}</p>
                      {/* <img src={this.context.state.formSignup.imgUrl} alt="foto o logo de tu comercio" /> */}
                      {/* <a href={this.context.state.formSignup.webpage}> */}
                      {/* </a> */}
                  </div>
              </Popup>
          )
      );
  }

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };

  // if you are happy with Geocoder default settings, 
  // you can just use handleViewportChange directly
  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 500 };
    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  render() {
    const { viewport } = this.state;
    //this two objects are for setting the styles for the marker
    const { size = 30 } = this.props;
    const pinStyle = {
      cursor: 'pointer',
      fill: '#d00',
      stroke: 'none'
    };
    
    return (
      <MyContext.Consumer>
      {context=>(
        
        <div style={{ height: "100vh" }}>
          <ReactMapGL
            ref={this.mapRef}
            {...viewport}
            mapStyle='mapbox://styles/mapbox/streets-v11'
            width="100%"
            height="100%"
            onViewportChange={this.handleViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
          >
            {/* <Geocoder
              mapRef={this.mapRef}
              onResult={this.handleOnResult}
              mapboxApiAccessToken={MAPBOX_TOKEN}
              onViewportChange={this.handleGeocoderViewportChange}
            /> */}
            <Marker
              latitude={this.state.position[1]}
              longitude={this.state.position[0]}
            >
              <svg 
                style={{ ...pinStyle, transform: `translate(${-size / 2}px,${-size}px)` }}
                height={size}
                onClick={() => {this.setState({ popupInfo: context.state.formSignup })}}
                viewBox="0 0 24 24"
              >
                <path d={ICON} />
              </svg>
            </Marker>
            {
              this.state.popupInfo&&this._renderPopup()
            }
            {/* <DeckGL {...viewport} layers={[searchResultLayer]} /> */}
          </ReactMapGL>
        </div>
        )
      }
      </MyContext.Consumer>
    );
  }
}

MapComponent.contextType=MyContext;

export default MapComponent;
