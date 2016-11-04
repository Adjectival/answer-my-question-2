import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionBool: false,
  actions: {
    showEditQuestion() {
      this.set('editQuestionBool', true);
    },
    update(question) {
      var params = {
        main: this.get('main'),
        notes: this.get('notes'),
        author: this.get('author'),
        image: this.get('image')
      };
      this.set('editQuestionBool', false);
      this.sendAction('update', question, params);
    }
  }
});
