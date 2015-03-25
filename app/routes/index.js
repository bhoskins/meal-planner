import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    var today = new Date();
    var dateString = today.getUTCFullYear() + "-" + ("0" + (today.getUTCMonth() + 1)).slice(-2) + "-" + ("0" + (today.getUTCDate())).slice(-2);
    this.transitionTo('dayPlan', dateString);
  }
});
