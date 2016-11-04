import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],
  add(favorite){
    if (this.get("topThreeGot")){
      alert("You already selected your top 3 questions");
    } else {
      this.get('favorites').pushObject(favorite);
    }
  },
  remove(favorite){
    this.get('favorites').removeObject(favorite);
  },
  includes(favorite){
    return this.get('favorites').includes(favorite);
  },
  topThreeGot: Ember.computed.get('favorites.length', 3)
});
