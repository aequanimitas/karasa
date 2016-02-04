import React, { Component } from 'react';
import { render } from 'react-dom';

import ol from 'openlayers';

let localserve = new ol.layer.Tile({
  source: new ol.source.OSM({
    url: 'http://localhost/osm_tiles/{z}/{x}/{y}.png'
  })
});

const map = new ol.Map({
  target: 'map',
  layers: [
    localserve
  ],
  view: new ol.View({
    center: [14.60966442647526, 121.10607147216795],
    zoom: 20
  })
});

console.log(map.events);

//', map, (e) => {
//  console.log(map.getLonLatFromViewPortPx(e.xy));
//});

class App extends Component {
  render() {
    return <div>Test!!!</div>
  }
}

let doc = document.getElementById('root');

render(
  <App />,
  doc
);
