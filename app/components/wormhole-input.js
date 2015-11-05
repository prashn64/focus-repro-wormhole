import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['left', 'box'],

  wormholeEnabled: false,
  _wormholeDisabled: Ember.computed.not('wormholeEnabled'),

  value: '',

  actions: {
    keyUp() {
      if (this.get('value')) {
        this.set('wormholeEnabled', true);
      } else {
        this.set('wormholeEnabled', false);
      }
    }
  }
});
