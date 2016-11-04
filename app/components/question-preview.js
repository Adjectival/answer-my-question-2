import Ember from 'ember';

export default Ember.Component.extend({
  notesHideBool: true,
  actions: {
    unhideNotes() {
      this.set('notesHideBool', false);
    },
    hideNotes() {
      this.set('notesHideBool', true);
    },
    delete(question) {
      if (confirm('Art thou sure?')) {
        this.sendAction('deleteQuestion', question)
      }
    }
  }
});
