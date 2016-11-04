import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if (question.get('answers').get('length') < 1) {
    return Ember.String.htmlSafe('<h4 class="helperText">Has NO Answers!</h4>');
  } else if (question.get('answers').get('length') < 2) {
    return Ember.String.htmlSafe('<h4 class="helperText">Needs more Answers!</h4>');
  }
}

export default Ember.Helper.helper(questionPopularity);
