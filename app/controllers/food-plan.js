import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['food', 'dayPlan'],
  isFavorite: false,
  amtUnit: [ "items", "g", "oz", "tsp", "Tbsp",
  "cup", "pint", "quarts", "gallons", "lb"],
  isSelected: false,
  // selectedFoods: [],
  actions: {
    addToMeal: function(){
      var selectedFoods = this.get('controllers.food.mealFoods');
      console.log(selectedFoods);
      this.set('controllers.dayPlan.dayPlanSelectedFoods', selectedFoods);
      this.get('controllers.dayPlan').send('showSelectedFoods');
      this.transitionToRoute('dayPlan');
    }
  }



});
