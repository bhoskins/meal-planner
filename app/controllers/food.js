import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  isEditing: false,
  isFavorite: false,
  amtUnit: [ "items", "g", "oz", "tsp", "Tbsp",
  "cup", "pint", "quarts", "gallons", "lb"],
  isSelected: false,
  selectedFoods: [],
  selectedAmtUnit: "",

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
    // if (this.isFavorite === true){
    //   console.log('is selected');


      // var name = Ember.$('.food-item').text();
      var id = this.get('model.objectId');

      var name = this.get('model.foodName');

      var amt = this.get('this.selectedAmt');
      var amtUnit = this.get('this.selectedAmtUnit');
      // console.log("name: " + name);
      // console.log("amt: " + amt);
      // console.log("amtUnit: " + amtUnit);
      var selectedFood = {
        name: name,
        amt: amt,
        amtUnit: amtUnit
      };
      // this.selectedFoods.push(selectedFood);
      console.log(name);
      // this.selectedFoods = [];

/*********** Display Name ****************/
      this.transitionToRoute('dayPlan');



      // (this.selectedFoods).each(function(index, item){
      //   console.log(item);
      // });

    // }else{
    //   this.set('isSelected', false);
    //   return;
    // }
    }
  }
});
