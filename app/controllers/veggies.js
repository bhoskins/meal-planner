import Ember from 'ember';

export default Ember.Controller.extend({
  isFavorite: false,
  amtUnit: [ "items", "g", "oz", "tsp", "Tbsp",
  "cup", "pint", "quarts", "gallons", "lb"],
  isSelected: false,
  selectedFoods: [],
  actions: {
  pickFood: function() {


    },
    showDetails: function(){

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
    }

  }


});
