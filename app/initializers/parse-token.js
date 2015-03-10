import Ember from 'ember';

export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
    Ember.$.ajaxSetup({
    headers: {
      // parse App: MealPlanner
      "X-Parse-Application-Id": "oMI18FAQvH12OR6Z36lIlm5JztIxT8DEva9ZMk5W",
      "X-Parse-REST-API-Key": "Fi40BOW21agVHpkQNlXNUXjPpCKEvz3o90udFJ6s"
    }
  });
}

export default {
  name: 'parse-token',
  initialize: initialize
};
