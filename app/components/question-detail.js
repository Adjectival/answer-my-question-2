import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Remove this Question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    update(question, params) {
      this.sendAction('update', question, params);
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    }
  }
});
