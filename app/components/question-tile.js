import Ember from 'ember';

export default Ember.Component.extend({
  notesHide: true,
  answerCount: Ember.computed('question', function() {
    return this.get('question').get('answers').get('length');
  }),
  favoriteQuestions: Ember.inject.service(),
  actions: {
    unhideNotes() {
      this.set('notesHide', false);
    },
    hideNotes() {
      this.set('notesHide', true);
    },
    addToFaves(question) {
      this.get('favoriteQuestions').add(question);
      console.log("Q tile emit");
    }
  }
});
