import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findQuery('food', {
      'foodCategory': 'vegetable'
    });
  }

});
