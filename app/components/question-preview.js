import Ember from 'ember';

export default Ember.Component.extend({
  notesHiding: true,
  actions: {
    unhideNotes() {
      this.set('notesHiding', false);
    },
    hideNotes() {
      this.set('notesHiding', true);
    },
    delete(question) {
      if (confirm('Art thou sure?')) {
        this.sendAction('deleteQuestion', question)
      }
    }
  }
});
