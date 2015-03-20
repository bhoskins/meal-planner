import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  needs: [ 'dayPlan'],
  foodProperty: 'food is good!',
  isEditing: false,
  isFavorite: false,
  amtUnit: [ "items", "g", "oz", "tsp", "Tbsp",
  "cup", "pint", "quarts", "gallons", "lb"],
  isSelected: false,
  selectedFoods: [],
  selectedAmt: null,
  selectedAmtUnit: "",
  test: 'controllers.dayPlan.dayPlanProperty',

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


    },
    checkSelected: function(){
      console.log('got selected');
    },

    addFood: function(){


      // var name = Ember.$('.food-item').text();

      var name = this.get('model.foodName');

      var amt = this.get('this.selectedAmt');
      var amtUnit = this.get('this.selectedAmtUnit');
      console.log("name: " + name);
      console.log("amt: " + amt);
      console.log("amtUnit: " + amtUnit);
      // var selectedFood = {
      //   name: name,
      //   amt: amt,
      //   amtUnit: amtUnit
      // };
      // // this.selectedFoods.push(selectedFood);
      // console.log(selectedFood);
      // this.selectedFoods = [];

      this.transitionToRoute('dayPlan.show', this.get('model'));

/*********** Display Name ****************/


    }
  }
});
