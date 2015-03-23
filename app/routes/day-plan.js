import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
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
      veggies: this.store.findQuery('food', {
      'foodCategory': 'vegetable'
      })
    });
  },

  /*
  make a dynamic day plan route
  Note: you should return a single model from findQuery, probably
  model: function(params) {
    return Ember.RSVP.hash({
      dayPlan: this.store.findQuery('dayPlan', {date: params.date}),
      veggies: .. same as above
    }).then(function(model){
      if(Ember.isEmpty(model.dayPlan)) {
        model.dayPlan = this.store.createRecord('dayPlan');
      }
      return model;
    });
  }
  */

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
