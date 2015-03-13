import Ember from 'ember';

export default Ember.Controller.extend({
  isFavorite: false,
  amtUnit: [ "items", "g", "oz", "tsp", "Tbsp",
  "cup", "pint", "quarts", "gallons", "lb"],
  selectedFoods: [],
  actions: {
  pickFood: function() {
    console.log('I picked asparagus');
  }
  }
});
