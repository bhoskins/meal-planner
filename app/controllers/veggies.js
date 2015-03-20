import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['food', 'dayPlan'],
  isFavorite: false,
  amtUnit: [ "items", "g", "oz", "tsp", "Tbsp",
  "cup", "pint", "quarts", "gallons", "lb"],
  isSelected: false,
  // selectedFoods: [],
  actions: {
    popup: function(){
      alert('veggies controller fired');
    },
    pickFood: function() {


    },
    showDetails: function(){
      console.log('showDetails');

    },
    checkSelected: function(){
      console.log('got selected');
    },

    addToMeal: function(){
      var selectedFoods = this.get('controllers.food.mealFoods');
      console.log(selectedFoods);
      this.set('controllers.dayPlan.dayPlanSelectedFoods', selectedFoods);
      this.get('controllers.dayPlan').send('showSelectedFoods');




      this.transitionToRoute('dayPlan');
    }

  }



});
