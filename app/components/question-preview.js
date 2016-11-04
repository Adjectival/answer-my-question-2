import Ember from 'ember';

export default Ember.Component.extend({
  notesHideBool: true,
  actions: {
    unhideNotes() {
      this.set('notesHideBool', false);
    },
    hideNotes() {
      this.set('notesHideBool', true);
    }
  }
});
