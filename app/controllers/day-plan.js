import Ember from 'ember';
import { moment, ago } from 'ember-moment/computed';

export default Ember.Controller.extend({
  needs: ['veggies', 'food'],
  dayPlanSelectedFoods: [],
  selectedMealDisplay: "",
  breakfast: "",
  veggieButton: "Veggie",
  proteinButton: 'Protein',
  carbButton: 'Carb',
  fruitButton: 'Fruit',
  dairyButton: 'Dairy',
  otherButton: 'Other',
  date: new Date(),
  // shortdate: moment('date', 'MM/DD/YYYY'),
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

    loadDayPlan: function(){
      console.log('loadDayPlan fired');

      console.log(this.date);
      var dateSplit = (this.date).split("-");
      console.log('year is ' + dateSplit[0]);
      console.log('month is ' + dateSplit[1]);
      console.log('date is ' + dateSplit[2]);
      // this.store.findQuery('dayPlan', "date");




    },
//     Date.prototype.getDate()
//   gets day 1-31 of month

// Date.prototype.getDay()
//   gets day of week: 0-6

// Date.prototype.getFullYear()
//   four digit year

// Date.prototype.getMonth()
//   0-11
    previousDay: function() {
      var dayParse = Date.parse(this.date);
      var prevDayMs = dayParse - (1000*60*60*24);
      var prevDay = new Date(prevDayMs);
    },

    nextDay: function(){
      var dayParse = Date.parse(this.date);
      var nextDayParse = dayParse + (1000*60*60*24);
      var nextDay = new Date(nextDayParse);
      console.log('next Day is ' + nextDay);
    },

    createMeal: function() {
      console.log('createMeal');
      console.log("this.date is " + this.date);

      // var key = this.selectedMeal;
      var dayPlan = {};

      // dayPlan = [{name: "bagel", amt: 0.5, amtUnit: "items"},
      //     {name: "cream cheese", amt: 1, amtUnit: "oz"}
      //   ];
      // dayPlan[date] = this.date;

      dayPlan = {
        user: 'current_user',
        date: this.date,
        breakfast: [{"amt": 5, "amtUnit": "item", "name": "bagel"},
          {"amt": 5, "amtUnit": "Tbsp", "name": "cream cheese"}
      ]
    };
      this.store.save('dayPlan', dayPlan);
      // alert('Great Job! The meals for this day are saved.');
      var dayParse = Date.parse(this.date);
      var prevDayMs = dayParse - (1000*60*60*24);
      var prevDay = new Date(prevDayMs);
      // (this.date).setTime(prevDayMs);
      console.log('prevDay is ' + prevDay);
      var nextDayParse = dayParse + (1000*60*60*24);
      var nextDay = new Date(nextDayParse);
      console.log('next Day is ' + nextDay);

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
      this.transitionToRoute('protein');
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

    },
    showSelectedFoods: function(){
      console.log('showSelectedFoods');
      var mealFoods = this.get('controllers.food.mealFoods');
      this.set('dayPlanSelectedFoods', mealFoods);
      console.log('dayPlanSelectedFood' + this.dayPlanSelectedFoods);
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
