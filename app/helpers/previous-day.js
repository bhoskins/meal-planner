import Ember from 'ember';
import { moment, ago } from 'ember-moment/computed';

export function previousDay(input) {
  return input;
}

export default Ember.Handlebars.makeBoundHelper('previousDay', function() {
  return moment().subtract(1, 'days');
});
