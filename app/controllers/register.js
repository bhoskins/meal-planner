import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function(){
      var self = this;
      var user = this.get('model');
      console.log(user);
      user.username = user.email;
      user.save().then(function(){
        self.get('session').authenticate('authenticator:parse-email', user);
      });
        this.transitionToRoute('dayPlan');
    }
  }
});
