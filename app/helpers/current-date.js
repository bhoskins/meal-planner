 // app/helpers/format-time.js
import Ember from "ember";
import { moment} from 'ember-moment/computed';

export default Ember.Handlebars.makeBoundHelper('currentDate', function(){
  return moment().format('LL');
});
