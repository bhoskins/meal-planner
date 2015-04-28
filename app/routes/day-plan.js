
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  needs: [ 'food'],

  model: function(params) {
    this.set('date', params.date);
    return Ember.RSVP.hash({
      dayPlan: this.store.findQuery('dayPlan', {
        'date': params.date,
        'createdBy': {
        '__type': 'Pointer',
        'className': '_User',
        'objectId': this.get('session.currentUser.id')
        }
        }),

      veggies: this.store.findQuery('food', {
      'foodCategory': 'vegetable'
      }),

      protein: this.store.findQuery('food', {
      'foodCategory': 'protein'
      }),

      carb: this.store.findQuery('food', {
      'foodCategory': 'carb'
      }),

      fruit: this.store.findQuery('food', {
      'foodCategory': 'fruit'
      }),

      dairy: this.store.findQuery('food', {
      'foodCategory': 'dairy'
      }),

      other: this.store.findQuery('food', {
      'foodCategory': 'other'
      })
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
      controller: 'protein',
      model: model.protein
    });
    this.render('carb', {
      into: 'dayPlan',
      outlet: 'carb',
      controller: 'carb',
      model: model.carb
    });
    this.render('fruit', {
      into: 'dayPlan',
      outlet: 'fruit',
      controller: 'fruit',
      model: model.fruit
    });
    this.render('dairy', {
      into: 'dayPlan',
      outlet: 'dairy',
      controller: 'dairy',
      model: model.dairy
    });
    this.render('other', {
      into: 'dayPlan',
      outlet: 'other',
      controller: 'other',
      model: model.other
    });
  },

  setupController: function(controller, model) {
    var date = this.get('date');
    var dayPlan = Ember.isEmpty(model.dayPlan) ? this.store.createRecord('dayPlan', {date: date,
      createdBy: this.get('session.currentUser')}) : model.dayPlan[0];
    controller.set('model', dayPlan);
  }


});
