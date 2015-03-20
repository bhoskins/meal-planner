import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('food');
    // return this.store.findQuery('food', 'vegetable');
  },

  // renderTemplate: function(){
  //   this.render();
  //   this.render('veggies', {
  //     into: 'dayPlan',
  //     outlet: 'veggies'
  //   })
  // }

});
