import Ember from 'ember';

export default Ember.Component.extend({
  notesHide: true,
  actions: {
    unhideNotes() {
      this.set('notesHide', false);
    },
    hideNotes() {
      this.set('notesHide', true);
    }
  }
});
