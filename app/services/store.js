import Ember from 'ember';
import IdentityMap from '../models/identity-map';

var identityMap = IdentityMap.create();

export default Ember.Object.extend({
  find: function(name, id){

    var cached = identityMap.get(name, id);
    if(cached) { return Ember.RSVP.resolve(cached); }

    var adapter = this.container.lookup('adapter:' + name);
    return adapter.find(name, id).then(function(record) {
      identityMap.set(name, id, record);
      return record;
    });
  },

  findAll: function(name){
    var adapter = this.container.lookup('adapter:' + name);
    return adapter.findAll(name).then(function(records) {
      identityMap.clear(name);
      records.forEach(function(r) {
        identityMap.set(name, r.id, r);
      });

      return identityMap.get(name);
    });
  },

  findQuery: function(name, query){
    var adapter = this.container.lookup('adapter:' + name);
    return adapter.findQuery(name, query);
  },

  destroy: function(name, record) {
    var adapter = this.container.lookup('adapter:' + name);
    return adapter.destroy(name, record).then(function() {
      identityMap.remove(name, record);
    });
  },

  save: function(name, record) {
    var adapter = this.container.lookup('adapter:' + name);
    return adapter.save(name, record).then(function() {
      identityMap.set(name, record.id, record);
      return record;
    });
  }
});
