import Ember from 'ember';
import { moment, ago } from 'ember-moment/computed';

export default Ember.Controller.extend({
  needs: ['veggies', 'food'],
  // dayPlanSelectedFoods: [],
  // selectedMeal: "breakfast",
  // selectedMealDisplay: "Breakfast",
  breakfast: [],
  snack1: [],
  lunch: [],
  snack2: [],
  dinner: [],
  other: [],
  veggieButton: "Veggie",
  proteinButton: 'Protein',
  carbButton: 'Carb',
  fruitButton: 'Fruit',
  dairyButton: 'Dairy',
  otherButton: 'Other',
  date: new Date(),
  allMealsShowing: false,
  isShowingVeggies: false,
  isShowingProtein: false,
  isShowingCarb: false,
  isShowingFruit: false,
  isShowingDairy: false,
  isShowingOther: false,
  isShowingBreakfast: false,
  isShowingSnack1: false,
  isShowingLunch: false,
  isShowingSnack2: false,
  isShowingDinner: false,
  isShowingOtherMeal: false,
  // shortdate: moment('date', 'MM/DD/YYYY'),
  timeSince: ago('date', true),
  format: "LL",
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
      var plan = this.get('model');
      plan.save();
    },

    showAllMeals: function() {
      if (this.allMealsShowing === false ){
      this.set('isShowingBreakfast', true);
      this.set('isShowingSnack1', true);
      this.set('isShowingLunch', true);
      this.set('isShowingSnack2', true);
      this.set('isShowingDinner', true);
      this.set('isShowingOtherMeal', true);
      this.set('this.allMealsShowing', true);
      console.log(this.allMealsShowing);
    }
    else { console.log('else');
      this.set('isShowingBreakfast', false);
      this.set('isShowingSnack1', false);
      this.set('isShowingLunch', false);
      this.set('isShowingSnack2', false);
      this.set('isShowingDinner', false);
      this.set('isShowingOtherMeal', false);
      this.set('this.allMealsShowing', false);
    }
    },

    closeAllMeals: function() {
      this.set('isShowingBreakfast', false);
      this.set('isShowingSnack1', false);
      this.set('isShowingLunch', false);
      this.set('isShowingSnack2', false);
      this.set('isShowingDinner', false);
      this.set('isShowingOtherMeal', false);
    },

    pickBreakfast: function(){
      this.set('selectedMeal', 'breakfast');
      this.set('selectedMealDisplay', 'Breakfast');
      console.log(this.selectedMeal);

      this.set('isShowingSnack1', false);
      this.set('isShowingLunch', false);
      this.set('isShowingSnack2', false);
      this.set('isShowingDinner', false);
      this.set('isShowingOtherMeal', false);

      if(this.isShowingBreakfast){
        this.set('this.isShowingBreakfast', false );
      } else {
        this.set('this.isShowingBreakfast', true );
      }
    },

    pickSnack1: function(){
      this.set('selectedMeal', 'snack1');
      this.set('selectedMealDisplay', 'Snack 1');
      console.log(this.selectedMeal);

      this.set('isShowingBreakfast', false);
      this.set('isShowingLunch', false);
      this.set('isShowingSnack2', false);
      this.set('isShowingDinner', false);
      this.set('isShowingOtherMeal', false);

      if(this.isShowingSnack1){
        this.set('this.isShowingSnack1', false );
      } else {
        this.set('this.isShowingSnack1', true );
      }
    },

    pickLunch: function(){
      this.set('selectedMeal', 'lunch');
      this.set('selectedMealDisplay', 'Lunch');
      console.log(this.selectedMeal);

      this.set('isShowingBreakfast', false);
      this.set('isShowingSnack1', false);
      this.set('isShowingSnack2', false);
      this.set('isShowingDinner', false);
      this.set('isShowingOtherMeal', false);

      if(this.isShowingLunch){
        this.set('this.isShowingLunch', false );
      } else {
        this.set('this.isShowingLunch', true );
      }
    },

    pickSnack2: function(){
      this.set('selectedMeal', 'snack2');
      this.set('selectedMealDisplay', 'Snack 2');
      console.log(this.selectedMeal);

      this.set('isShowingBreakfast', false);
      this.set('isShowingSnack1', false);
      this.set('isShowingLunch', false);
      this.set('isShowingDinner', false);
      this.set('isShowingOtherMeal', false);

      if(this.isShowingSnack2){
        this.set('this.isShowingSnack2', false );
      } else {
        this.set('this.isShowingSnack2', true );
      }
    },

    pickDinner: function(){
      this.set('selectedMeal', 'dinner');
      this.set('selectedMealDisplay', 'Dinner');
      console.log(this.selectedMeal);

      this.set('isShowingBreakfast', false);
      this.set('isShowingSnack1', false);
      this.set('isShowingLunch', false);
      this.set('isShowingSnack2', false);
      this.set('isShowingOtherMeal', false);

      if(this.isShowingDinner){
        this.set('this.isShowingDinner', false );
      } else {
        this.set('this.isShowingDinner', true );
      }
    },

    pickOther: function(){
      this.set('selectedMeal', 'other');
      this.set('selectedMealDisplay', 'Other');
      console.log(this.selectedMeal);

      this.set('isShowingBreakfast', false);
      this.set('isShowingSnack1', false);
      this.set('isShowingLunch', false);
      this.set('isShowingSnack2', false);
      this.set('isShowingDinner', false);

      if(this.isShowingOtherMeal){
        this.set('this.isShowingOtherMeal', false );
      } else {
        this.set('this.isShowingOtherMeal', true );
      }
    },

    selectVeggie: function(){
      console.log('Its a ...' + this.veggieButton);
      this.set('isShowingProtein', false);
      this.set('isShowingCarb', false);
      this.set('isShowingFruit', false);
      this.set('isShowingDairy', false);
      this.set('isShowingOther', false);

      if(this.isShowingVeggies){
        this.set('this.isShowingVeggies', false );
      } else {
        this.set('this.isShowingVeggies', true );
      }
    },

    selectProtein: function(){
      console.log('Its a ...' + this.proteinButton);
      this.set('isShowingVeggies', false);
      this.set('isShowingCarb', false);
      this.set('isShowingFruit', false);
      this.set('isShowingDairy', false);
      this.set('isShowingOther', false);
     if(this.isShowingProtein){
        this.set('this.isShowingProtein', false );
      } else {
        this.set('this.isShowingProtein', true );
      }
    },

    selectCarb: function(){
      console.log('Its a ...' + this.carbButton);
      this.set('isShowingVeggies', false);
      this.set('isShowingProtein', false);
      this.set('isShowingFruit', false);
      this.set('isShowingDairy', false);
      this.set('isShowingOther', false);
      if(this.isShowingCarb){
        this.set('this.isShowingCarb', false );
      } else {
        this.set('this.isShowingCarb', true );
      }
    },
    selectFruit: function(){
      console.log('Its a ...' + this.fruitButton);
      this.set('isShowingVeggies', false);
      this.set('isShowingProtein', false);
      this.set('isShowingCarb', false);
      this.set('isShowingDairy', false);
      this.set('isShowingOther', false);

      if(this.isShowingFruit){
        this.set('this.isShowingFruit', false );
      } else {
        this.set('this.isShowingFruit', true );
      }
    },
    selectDairy: function(){
      console.log('Its a ...' + this.dairyButton);
      this.set('isShowingVeggies', false);
      this.set('isShowingProtein', false);
      this.set('isShowingCarb', false);
      this.set('isShowingFruit', false);
      this.set('isShowingOther', false);
      if(this.isShowingDairy){
        this.set('this.isShowingDairy', false );
      } else {
        this.set('this.isShowingDairy', true );
      }
    },
    selectOther: function(){
      console.log('Its a ...' + this.otherButton);
      this.set('isShowingVeggies', false);
      this.set('isShowingProtein', false);
      this.set('isShowingCarb', false);
      this.set('isShowingFruit', false);
      this.set('isShowingDairy', false);
      if(this.isShowingOther){
        this.set('this.isShowingOther', false );
      } else {
        this.set('this.isShowingOther', true );
      }
    },

    addFood: function(food){
      var meal = this.get('this.selectedMeal');
      this.get('model.' + meal).pushObject(food);
      this.transitionToRoute('dayPlan');
    },

    showDetails: function(){

    },

    deleteFood: function(food){
      var meal = this.get('this.selectedMeal');
      this.get('model.' + meal).removeObject(food);
    },

    addCustomFood: function(){
      console.log('addCustomFood');
    }

  }
});



