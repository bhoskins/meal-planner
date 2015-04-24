import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  needs: [ 'dayPlan', 'veggies', 'food'],
  foodProperty: 'food is good!',
  isEditing: false,
  isFavorite: false,
  amtUnit: [ "items", "g", "oz", "tsp", "Tbsp",
  "cup", "pint", "quarts", "gallons", "lb"],
  isSelected: false,
  mealFoods: [],
  selectedAmt: 0,
  selectedAmtUnit: "items",

  actions: {
    edit: function(){
      this.set('isEditing', true);
    },

    save: function(){
      this.set('isEditing', false);

      var id = this.get('model.objectId');
      var data = Ember.copy(this.get('model'));
      data.pledge = Number(data.pledge);

      return ajax("https://api.parse.com/1/classes/Food/" + id, {
        type: "PUT",
        data: JSON.stringify(data)
      });
    },

    showDetails: function(){
      console.log('showDetails');
      this.transitionToRoute('show', this.get('model'));


    },

    addFood: function(){

      var name = this.get('model.foodName');

      var amt = this.get('this.selectedAmt');
      var amtUnit = this.get('this.selectedAmtUnit');
      var foodDesc = this.get('model.foodDesc');

      if ((amt) === 0  ){
        return;
      } else {

        var selectedFood = {
          name: name,
          foodDesc: foodDesc,
          amt: amt,
          amtUnit: amtUnit
        };

        this.get('controllers.dayPlan').send('addFood', selectedFood);
      }
    },

    deleteSelectedFood: function(){
      var name = this.get('model.foodName');
      var food = this.mealFoods.findBy('name', name);
      this.mealFoods.removeObject(food);
      console.log(this.mealFoods);
    }
  }
});
