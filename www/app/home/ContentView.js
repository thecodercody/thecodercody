var ContentView = function() {

  this.initialize = function() {
    this.$el = $('<div/>');
    this.render();
  };

  this.render = function() {
    this.$el.html(this.template());
    return this;
  };

  this.initialize();

};