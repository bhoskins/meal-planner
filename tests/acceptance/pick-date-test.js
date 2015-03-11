import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

Ember.Test.registerAsyncHelper('pickDate',
  function(app, data, context) {
    fillIn('.dayPlan_date', data.menuDate);
    click('.date_select');

});

module('Acceptance: PickDate', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /pick-date', function(assert) {
  visit('/pick-date');

  andThen(function() {
    assert.equal(currentPath(), 'pick-date');
  });
});
