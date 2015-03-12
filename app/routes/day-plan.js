
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('dayPlan');
  },
  setupController: function(controller) {
    controller.set('createdAt',
      new Date(2015, 1, 1));

  }
});
