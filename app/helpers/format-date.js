import Ember from 'ember';
import { moment, ago } from 'ember-moment/computed';

export function formatDate(input) {
  return input;
}

export default Ember.Handlebars.makeBoundHelper('formatDate', function(format, date){
  return moment(date).format(format);
});
