
import Ember from 'ember';

export default Ember.Route.extend({
  needs: [ 'food'],
  // actions: {
  //   showModal: function(evt) {
  //     this.render(evt.modalName, {
  //       outlet: 'protein',
  //       into: 'dayPlan'
  //     });
  //   },
  //   hideModal: function(evt) {
  //     this.disconnectOutlet({
  //       outlet: 'veggies',
  //       parentView: 'dayPlan'
  //     });
  //   }
  // },
  model: function(){
    // return this.store.findAll('dayPlan');
    return Ember.RSVP.hash({
      dayPlan: this.store.findAll('dayPlan'),
      veggies: this.store.findAll('food')
    });
  },

  renderTemplate: function(controller, model){
    this._super(controller, model.dayPlan);
    this.render('veggies', {
      into: 'dayPlan',
      outlet: 'veggies',
      controller: 'veggies',
      model: model.veggies
    });
    this.render('protein', {
      into: 'dayPlan',
      outlet: 'protein',
      controller: 'veggies',
      model: model.protein
    });

  },

  setupController: function(controller, model) {
    controller.set('model', model.dayPlan);
  }


});
