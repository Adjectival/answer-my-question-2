import Ember from 'ember';

export default Ember.Component.extend({
  notesHide: true,
  answerCount: Ember.computed('question', function() {
    return this.get('question').get('answers').get('length');
  }),
  actions: {
    unhideNotes() {
      this.set('notesHide', false);
    },
    hideNotes() {
      this.set('notesHide', true);
    }
  }
});
