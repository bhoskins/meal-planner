import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel: function(){
    var today = new Date();
    var dateString = today.getUTCFullYear() + "-" + ("0" + (today.getUTCMonth() + 1)).slice(-2) + "-" + ("0" + (today.getUTCDate())).slice(-2);
    this.transitionTo('dayPlan', dateString);
  }
});
