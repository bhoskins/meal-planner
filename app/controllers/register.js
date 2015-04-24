import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

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


