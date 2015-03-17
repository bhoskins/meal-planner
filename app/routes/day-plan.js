
import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    showModal: function(evt) {
      this.render(evt.modalName, {
        outlet: 'protein',
        into: 'dayPlan'
      });
    },
    hideModal: function(evt) {
      this.disconnectOutlet({
        outlet: 'veggies',
        parentView: 'dayPlan'
      });
    }
  },
  model: function(){
    return this.store.findAll('dayPlan');
  },

  renderTemplate: function(){
    this.render();
    this.render('veggies', {
      into: 'dayPlan',
      outlet: 'veggies'
    });
    this.render('protein', {
      into: 'dayPlan',
      outlet: 'protein'
    });
    }

  // setupController: function(controller) {
  //   controller.set('createdAt',
  //     new Date(2015, 1, 1));

  // }
});
