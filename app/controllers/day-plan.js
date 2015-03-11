import Ember from 'ember';
import { moment, ago } from 'ember-moment/computed';

export default Ember.Controller.extend({
  // date: new Date('2013-02-08T09:30:26'),
  // shortDate: moment('date', 'MM/DD/YYYY'),
  // timeSince: ago('date', true),
  actions: {
    pickDate: function() {
      // var now = moment();
     // {{moment now 'MMMM Do YYYY' value=selectedDate }}

     var showDate = this.get('selectedDate');

      // Ember.$('.userDate').html(moment());



      console.log('pickDate fired ' + showDate );

      // var prevDay = moment().subtract(1, 'days').calendar();
      // console.log("prevDay: " + prevDay);


    }
  }
});


//{{input type="date" class="menu_date"  value=chosenDate }}



// var birthday = new Date(1962, 1, 10);
//Date.now(); ms since Jan 1, 1970
//Date.parse('string representing date');
  //returns ms since Jan 1, 1970


//new Date();
/*
new Date(); new Date(value); new Date(dateString);
new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
0 - January   11 - December

Date.prototype.getDate()
  gets day 1-31 of month

Date.prototype.getDay()
  gets day of week: 0-6

Date.prototype.getFullYear()
  four digit year

Date.prototype.getMonth()
  0-11

Date.prototype.getMilliseconds()

dateObject.Date.prototype.setDate()

Date.prototype.setFullYear()

Date.prototype.setMonth()

*/
