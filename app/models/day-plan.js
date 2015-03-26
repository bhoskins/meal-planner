
import Model from 'ember-magic-man/model';

export default Model.extend({
  toJSON: function(){
    var data = this._super();

    var userId = this.get('createdBy.id');
    if(userId) {
      data.set('createdBy', {
        __type: 'Pointer',
        className: '_User',
        objectId: userId
      });
    }

    return data;
  },

  setDefaults: function(){
    this.set('breakfast', this.get('breakfast') || []);
    this.set('snack1', this.get('snack1') || []);
    this.set('lunch', this.get('lunch') || []);
    this.set('snack2', this.get('snack2') || []);
    this.set('dinner', this.get('dinner') || []);
    this.set('other', this.get('other') || []);
  }.on('init'),

});
