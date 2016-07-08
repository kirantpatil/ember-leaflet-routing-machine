import Ember from 'ember';
import BaseLayer from 'ember-leaflet/components/base-layer';
import ChildMixin from 'ember-leaflet/mixins/child';

export default BaseLayer.extend(ChildMixin,{
	createLayer(){
		return this.L.Routing.control(...get(this,'requiredOptions'), get(this,'options'));
	},
	didInsertElement() {
		this._super(...arguments);
		this.layerSetup();
		get(this,'_childLayers').invoke('layerSetup');
	},
	willDestroyLayer() {
		get(this,'_childLayers').invoke('layerTeardown');
		get(this,'_childLayers').clear();
	},
	layerSetup() {
		if (Ember.isNone(get(this,'_layer'))) {
			this._layer = this.createLayer();
			this._addObservers();
			this._addEventListeners();
			this.didCreateLayer();
		}
		if (get(this,'containerLayer')) {
			if (!Ember.isNone(get(this,'containerLayer')._layer)) {
				get(this,'containerLayer')._layer.addLayer(this._layer);
			}
		}
    }
});
