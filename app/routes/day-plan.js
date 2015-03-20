
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
    return this.store.findAll('dayPlan');
  },

  renderTemplate: function(){
    this.render();
    // this.render('veggies', {
    //   into: 'dayPlan',
    //   outlet: 'veggies'
    // });
    // this.render('protein', {
    //   into: 'dayPlan',
    //   outlet: 'protein'
    // });
    this.render('meal', {
      into: 'dayPlan',
      outlet: 'meal'
    });
    this.render('veggies', {
      into: 'dayPlan',
      outlet: 'veggies'
    });

    }

  // setupController: function(controller) {
  //   controller.set('createdAt',
  //     new Date(2015, 1, 1));

  // }
});
