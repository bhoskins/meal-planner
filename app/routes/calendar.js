import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model: function(params){
    return this.store.find('dayPlan', params.dayPlan_id);
  }
});
