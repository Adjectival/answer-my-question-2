import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionFormBool: false,
  actions: {
    unhideNewQuestion() {
      this.set('newQuestionFormBool', true);
    },
    save() {
      var params = {
        main: this.get('main') ? this.get('main') : "",
        notes: this.get('notes') ? this.get('notes') : "",
        author: this.get('author') ? this.get('author') : "",
        image: this.get('image') ? this.get('image') : ""
      };
      this.set('newQuestionFormBool', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
