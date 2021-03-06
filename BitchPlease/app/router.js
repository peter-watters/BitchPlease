import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BitchPleaseENV.locationType
});

Router.map(function() {
  this.route('faq');
  this.route('music');
  this.route('blog');
  this.route('contact');
  this.route('about');
  this.route('events');
});

export default Router;
