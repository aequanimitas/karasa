import React, { Component } from 'react';
import { render } from 'react-dom';

import ol from 'openlayers';

const placeLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: './OSGEoLabs.json'
  })
})

const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    placeLayer
  ],
  view: new ol.View({
    center: [949282, 6002552],
    zoom: 4
  })
});

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
