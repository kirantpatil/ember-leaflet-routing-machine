import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('routing-control', 'Integration | Component | routing control', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{routing-control}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#leaflet-map zoom=zoom center=center maxZoom=25}}
      {{#routing-control waypoints=[(57.74, 11.94),(57.6792, 11.949)] routeWhileDragging=true}}
        {{marker-layer location=markerCenter icon=icon}}
      {{/routing-control}}
    {{/leaflet-map}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
