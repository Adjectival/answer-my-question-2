import Ember from 'ember';

export default Ember.Component.extend({
  showEditQuestion: false,
  actions: {
    showEditQuestion() {
      this.set('showEditQuestion', true);
    },
    update(question) {
      var params = {
        main: this.get('main'),
        notes: this.get('notes'),
        author: this.get('author'),
        image: this.get('image')
      };
      this.set('showEditQuestion', false);
      this.sendAction('update', question, params);
    }
  }
});
