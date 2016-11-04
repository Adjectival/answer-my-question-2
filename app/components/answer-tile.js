import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if (confirm('OK to not ask this?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
