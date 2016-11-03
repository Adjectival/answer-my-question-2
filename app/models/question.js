import DS from 'ember-data';

export default DS.Model.extend({
  main: DS.attr(),
  notes: DS.attr(),
  author: DS.attr(),
  image: DS.attr()
});
