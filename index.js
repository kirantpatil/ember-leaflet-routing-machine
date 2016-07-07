/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-leaflet-routing-machine',
  included: function(app){
    app.import(app.bowerDirectory + '/leaflet-routing-machine/dist/leaflet-routing-machine.js');
    app.import(app.bowerDirectory + '/leaflet-routing-machine/dist/leaflet-routing-machine.css');
 }
};
