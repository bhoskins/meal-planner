import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.find('food', params.food_id);
  },

  // renderTemplate: function(){
  //   this.render();
  //   this.render('show', {
  //     into: 'dayPlan',
  //     outlet: 'showFood'
  //   });
  // }

});
