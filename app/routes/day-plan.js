
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
    // this.render('veggies', {
    //   into: 'dayPlan',
    //   outlet: 'veggies'
    // });
    // this.render('protein', {
    //   into: 'dayPlan',
    //   outlet: 'protein'
    // });
    // this.render('meal', {
    //   into: 'dayPlan',
    //   outlet: 'meal'
    // });
    this._super(controller, model.dayPlan);
    this.render('veggies', {
      into: 'dayPlan',
      outlet: 'veggies',
      controller: 'veggies',
      model: model.veggies
    });

  },

  setupController: function(controller, model) {
    controller.set('model', model.dayPlan);
  }

  // setupController: function(controller) {
  //   controller.set('createdAt',
  //     new Date(2015, 1, 1));

  // }
});
