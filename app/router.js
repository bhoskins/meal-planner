import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('day-plan', { path: '/'}, function(){
    // this.route('veggies');
  });
  this.route('veggies');
});

export default Router;
