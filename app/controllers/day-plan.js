import Ember from 'ember';
import { moment, ago } from 'ember-moment/computed';

export default Ember.Controller.extend({
  needs: ['veggies', 'food'],
  dayPlanSelectedFoods: [],
  selectedMealDisplay: "Breakfast",
  breakfast: "",
  veggieButton: "Veggie",
  proteinButton: 'Protein',
  carbButton: 'Carb',
  fruitButton: 'Fruit',
  dairyButton: 'Dairy',
  otherButton: 'Other',
  date: new Date(),
  isShowingVeggies: false,
  isShowingProtein: false,
  isShowingCarb: false,
  isShowingFruit: false,
  isShowingDairy: false,
  isShowingOther: false,
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

      console.log('mydate is ' + this.mydate);
      var dateSplit = (this.mydate).split("-");
      console.log('year is ' + dateSplit[0]);
      console.log('month is ' + dateSplit[1]);
      console.log('date is ' + dateSplit[2]);

      this.store.findQuery('dayPlan', {
        'date': this.mydate
      }).then(function(model){
      if(Ember.isEmpty(model.dayPlan)) {
        console.log('dayPlan empty');
        model.dayPlan = this.store.createRecord('dayPlan');
      } else {
        console.log('dayPlan exists already');
      return model;
      }
      })

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
      console.log('its a veggie');
      if(this.isShowingVeggies){
        this.set('this.isShowingVeggies', false );
      } else {
        this.set('this.isShowingVeggies', true );
      }
    },

    selectProtein: function(){
      console.log('Its a ...' + this.proteinButton);
     if(this.isShowingProtein){
        this.set('this.isShowingProtein', false );
      } else {
        this.set('this.isShowingProtein', true );
      }
    },

    selectCarb: function(){
      console.log('Its a ...' + this.carbButton);
      if(this.isShowingCarb){
        this.set('this.isShowingCarb', false );
      } else {
        this.set('this.isShowingCarb', true );
      }
    },
    selectFruit: function(){
      console.log('Its a ...' + this.fruitButton);
      if(this.isShowingFruit){
        this.set('this.isShowingFruit', false );
      } else {
        this.set('this.isShowingFruit', true );
      }
    },
    selectDairy: function(){
      console.log('Its a ...' + this.dairyButton);
      if(this.isShowingDairy){
        this.set('this.isShowingDairy', false );
      } else {
        this.set('this.isShowingDairy', true );
      }
    },
    selectOther: function(){
      console.log('Its a ...' + this.otherButton);
      if(this.isShowingOther){
        this.set('this.isShowingOther', false );
      } else {
        this.set('this.isShowingOther', true );
      }
    },

    addFood: function(food){
      this.get('dayPlanSelectedFoods').pushObject(food);
      this.transitionToRoute('dayPlan');
    },

    showDetails: function(){

    },
    showSelectedFoods: function(){
      console.log('showSelectedFoods');
      var mealFoods = this.get('controllers.food.mealFoods');
      this.set('dayPlanSelectedFoods', mealFoods);
      console.log('dayPlanSelectedFood' + this.dayPlanSelectedFoods);
    }.observes('controllers.food.mealFoods').on('change')
  },

  deleteFood: function(){
      console.log('deleteSelectedFood please');
      // var name = this.get('model.foodName');
      // var food = this.mealFoods.findBy('name', name);
      // this.mealFoods.removeObject(food);
      // console.log(this.mealFoods);
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
