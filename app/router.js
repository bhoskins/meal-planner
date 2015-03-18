import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('dayPlan', { path: '/'}, function(){

      this.route('protein');
  });
  this.route('veggies');



  this.route('carb');
  this.route('fruit');
  this.route('dairy');
  this.route('other');
  this.route('food');
});

export default Router;
