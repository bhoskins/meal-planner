import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    // register: function(){
    //   var self = this;
    //   var user = this.get('model');
    //   console.log(user);
    //   user.username = user.email;
    //   user.save().then(function(){
    //     self.get('session').authenticate('authenticator:parse-email', user);
    //   });
    //     this.transitionToRoute('dayPlan');
    // }

    register: function(){
      var user = this.getProperties('firstName', 'lastName', 'username', 'password');
      user.email = user.username;

      ajax({
        url: "https://api.parse.com/1/users",
        type: "POST",
        data: JSON.stringify(user),
        contentType: 'application/json'
      }).then(function(response){
          this.session.authenticate('authenticator:parse-email', {
          sessionToken: response.sessionToken
          });
        }.bind(this));
      this.transitionToRoute('dayPlan');
    }

  }
});


