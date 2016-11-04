import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Art thou sure?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    update(rental, params) {
      this.sendAction('update', question, params);
    },
  }
});
