import Ember from 'ember';
import { moment, ago } from 'ember-moment/computed';

export default Ember.Controller.extend({
  needs: ['veggies', 'food'],
  selectedMeal: "",
  selectedMealDisplay: "",
  breakfast: "",
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

  isFavorite: false,
  amtUnit: [ "items", "g", "oz", "tsp", "Tbsp",
  "cup", "pint", "quarts", "gallons", "lb"],
  isSelected: false,
  selectedFoods: [],

  actions: {

    fireFoodController: function(){
      // this.get('controllers.food').send('popup');
      var test = this.get('controllers.food.foodProperty');
      console.log(test);

    },
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
    createMeal: function() {
      console.log('createMeal');

      // var key = this.selectedMeal;
      // var date = "date";
      // var dayPlan = {};
      // dayPlan[key] = [{name: "bagel", amt: 0.5, amtUnit: "items"},
      //     {name: "cream cheese", amt: 1, amtUnit: "oz"}
      //   ];
      // dayPlan[date] = this.date;

      var dayPlan = {
        date: this.date,
        breakfast: [{"amt": 5, "amtUnit": "item", "name": "bagel"},
          {"amt": 5, "amtUnit": "Tbsp", "name": "cream cheese"}
      ]
    };
      this.store.save('dayPlan', dayPlan);




    },
    pickBreakfast: function(){
      this.set('selectedMeal', 'breakfast');
      this.set('selectedMealDisplay', 'Breakfast');
      console.log(this.selectedMeal);
    },

    pickSnack1: function(){
      this.set('selectedMeal', 'snack1');
      this.set('selectedMealDisplay', 'Snack 1');
      console.log(this.selectedMeal);
    },

    pickLunch: function(){
      this.set('selectedMeal', 'lunch');
      this.set('selectedMealDisplay', 'Lunch');
      console.log(this.selectedMeal);
    },

    pickSnack2: function(){
      this.set('selectedMeal', 'snack2');
      this.set('selectedMealDisplay', 'Snack 2');
      console.log(this.selectedMeal);
    },

    pickDinner: function(){
      this.set('selectedMeal', 'dinner');
      this.set('selectedMealDisplay', 'Dinner');
      console.log(this.selectedMeal);
    },

    pickOther: function(){
      this.set('selectedMeal', 'other');
      this.set('selectedMealDisplay', 'Other');
      console.log(this.selectedMeal);
    },

    selectVeggie: function(){
      console.log('Its a ...' + this.veggieButton);
      this.transitionToRoute('veggies');

    },
    selectProtein: function(){
      console.log('Its a ...' + this.proteinButton);
      this.transitionToRoute('dayPlan.protein');
    },
    selectCarb: function(){
      console.log('Its a ...' + this.carbButton);
      this.transitionToRoute('carb');
    },
    selectFruit: function(){
      console.log('Its a ...' + this.fruitButton);
      this.transitionToRoute('fruit');
    },
    selectDairy: function(){
      console.log('Its a ...' + this.dairyButton);
      this.transitionToRoute('dairy');
    },
    selectOther: function(){
      console.log('Its a ...' + this.otherButton);
      this.transitionToRoute('other');
    },
    addFoods: function(){
      if (this.isFavorite === true){
      console.log('Asparagus is a favorite');
      var name = Ember.$('.food-item').text();
      var amt = Ember.$('input.amt-input').val();
      var amtUnit = Ember.$('select.amt-unit').val();
      console.log("name: " + name);
      console.log("amt: " + amt);
      console.log("amtUnit: " + amtUnit);
      var selectedFood = {
        name: name,
        amt: amt,
        amtUnit: amtUnit
      };
      this.selectedFoods.push(selectedFood);
      // (this.selectedFoods).each(function(index, item){
      //   console.log(item);
      // });

    }else{
      this.set('isSelected', false);
      return;
    }
    },
      pickFood: function() {


    },
    showDetails: function(){

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
