import Ember from 'ember';
import BaseLayer from 'ember-leaflet/components/base-layer';
import ChildMixin from 'ember-leaflet/mixins/child';

export default BaseLayer.extend(ChildMixin,{
	createLayer(){
		return this.L.Routing.control(...this.get('requiredOptions'), this.get('options'));
	},
	didInsertElement() {
		this._super(...arguments);
		this.layerSetup();
		this.get('_childLayers').invoke('layerSetup');
	},
	willDestroyLayer() {
		this.get('_childLayers').invoke('layerTeardown');
		this.get('_childLayers').clear();
	},
	layerSetup() {
		if (Ember.isNone(this.get('_layer'))) {
			this._layer = this.createLayer();
			this._addObservers();
			this._addEventListeners();
			this.didCreateLayer();
		}
		if (this.get('containerLayer')) {
			if (!Ember.isNone(this.get('containerLayer')._layer)) {
				this.get('containerLayer')._layer.addLayer(this._layer);
			}
		}
    }
});
