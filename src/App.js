import './App.css';

import * as React from 'react';

import * as MapboxGL from 'mapbox-gl';

class App extends React.Component {
  mapImp;
  mapMapbox;

  componentDidMount() {
    MapboxGL.accessToken = null;

    // MapboxGL.accessToken =
    //   "pk.<redacted>";
    this.mapImp = new MapboxGL.Map({
      container: "mapImp",
      style: "https://maps.imp.cms.gov/pages/streets/streets.json",
      center: [-74.5, 40],
      zoom: 9,
    });

    // this.mapMapbox = new MapboxGL.Map({
    //   container: "mapMapbox",
    //   style: "mapbox://styles/mapbox/streets-v11",
    //   center: [-74.5, 40],
    //   zoom: 9,
    // });
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.remove();
    }
  }

  render() {
    return (
      <div className="App">
        <div style={{ display: "flex" }}>
          <div>
            <h3>https://maps.imp.cms.gov/pages/streets/streets.json</h3>
            <div id="mapImp" style={{ width: "400px", height: "300px" }}>
              &nbsp;
            </div>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <h3>mapbox://styles/mapbox/streets-v11</h3>
            <div id="mapMapbox" style={{ width: "400px", height: "300px" }}>
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
