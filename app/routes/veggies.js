import Ember from 'ember';

export default Ember.Route.extend({
  needs: 'dayPlan',
  model: function(){
    return this.store.findAll('food');
    // return this.store.findQuery('food', 'vegetable');
  }

});
