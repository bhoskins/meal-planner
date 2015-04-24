import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.resource('dayPlan', { path: '/'}, function(){
  //   this.route('plan', { path: 'plan/:dayPlan_id'});
  // });
  this.route('dayPlan', { path: '/plan/:date' });
  this.route('show', { path: '/show/:food_id'});
  this.route('veggies');
  this.route('meal');

  this.route('protein');
  this.route('carb');
  this.route('fruit');
  this.route('dairy');
  this.route('other');
  this.route('food');

  this.route('calendar', { path: 'calendar/:dayPlan_id'});
  this.route('login');
  this.route('register');

  this.route('custom', { path: '/custom/:food_id'});
});

export default Router;
