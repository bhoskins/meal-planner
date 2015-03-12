import Ember from 'ember';
import { moment, ago } from 'ember-moment/computed';

export default Ember.Controller.extend({
  veggieButton: "Veggie",
  proteinButton: 'Protein',
  carbButton: 'Carb',
  fruitButton: 'Fruit',
  dairyButton: 'Dairy',
  otherButton: 'Other',
  date: new Date(),
  shortdate: moment('date', 'MM/DD/YYYY'),
  timeSince: ago('date', true),

  format: "LL",
  formattedDate: function() {
    var date = this.get('date'),
      format = this.get('format');
    return moment(date).format(format);
  }.property('date', 'format'),

  actions: {
    previousDay: function() {
      // var showDate = moment().subtract(1, 'days');
      // var day;
      // var dayNum = (this.date).getDay() - 1;

      //   if (dayNum === -1){
      //   dayNum = 6;
      //   day = "Saturday"
      // }elseif (dayNum === 0){
      //   day = "Sunday";
      // }elseif (dayNum === 1){
      //   day = "Monday";
      // }elseif (dayNum === 2){
      //   day="Tuesday";
      // }elseif ( dayNum === 3) {
      //   day = "Wednesday";
      // }elseif (dayNum === 4){
      //   day = "Thursday";
      // }elseif (dayNum === 5){
      //   day = "Friday";
      // }elseif (dayNum === 6){
      //   day = "Saturday";
      // }

      // var month = (this.date).getMonth() + 1;
      // var date = (this.date).getDate() - 1;
      // var year = (this.date).getFullYear();
      // var previousDate =  (month) + "/" + date + "/" + year;

      // console.log('previousDate: ' );
      // console.log(date);
      // console.log(previousDate);
      // console.log(day);
      // if (month === -1){ month = 11;}
      // this.date = new Date(year, (month - 1), date);
      // Ember.$('.showDate').html(previousDate);


    },

    nextDay: function(){
      var month = (this.date).getMonth() + 1;
      var date = (this.date).getDate() + 1;
      var year = (this.date).getFullYear();
      var nextDate = month + "/" + date + "/" + year;
      Ember.$('.showDate').html(nextDate);

      console.log('nextDay: ' );
      console.log(date);
      console.log(nextDate);
      this.date = Ember.set(year, month, date);
    },
    pickDate: function() {

     // {{moment now 'MMMM Do YYYY' value=selectedDate }}

      // Ember.$('.userDate').html(moment());
      // var prevDay = moment().subtract(1, 'days').calendar();
      // console.log("prevDay: " + prevDay);

      console.log('pickDate fired ' + this.date );

    },
    selectVeggie: function(){
      console.log('Its a ...' + this.veggieButton);
    },
    selectProtein: function(){
      console.log('Its a ...' + this.proteinButton);
    },
    selectCarb: function(){
      console.log('Its a ...' + this.carbButton);
    },
    selectFruit: function(){
      console.log('Its a ...' + this.fruitButton);
    },
    selectDairy: function(){
      console.log('Its a ...' + this.dairyButton);
    },
    selectOther: function(){
      console.log('Its a ...' + this.otherButton);
    },
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
