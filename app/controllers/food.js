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
      pickFood: function() {


    },
    showDetails: function(){
      console.log('showDetails');
      this.transitionToRoute('show', this.get('model'));


    },
    checkSelected: function(){
      console.log('got selected');
    },

    addFood: function(){

      var name = this.get('model.foodName');

      var amt = this.get('this.selectedAmt');
      var amtUnit = this.get('this.selectedAmtUnit');

      if ((amt) === 0  ){
        // || (this.mealFoods).length > 0
        return;
      } else {
        // console.log("name: " + name);
        // console.log("amt: " + amt);
        // console.log("amtUnit: " + amtUnit);

        var selectedFood = {
          name: name,
          amt: amt,
          amtUnit: amtUnit
        };
        this.mealFoods.push(selectedFood);

        this.set('controllers.dayPlan.dayPlanSelectedFoods', this.mealFoods);
        this.get('controllers.dayPlan').send('showSelectedFoods');
        console.log('food controller this.mealFoods' + this.mealFoods);
        // this.transitionToRoute('dayPlan');
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
