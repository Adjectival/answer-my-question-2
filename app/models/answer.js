import DS from 'ember-data';

export default DS.Model.extend({
  main: DS.attr(),
  author: DS.attr(),
  // question: belongsTo
});