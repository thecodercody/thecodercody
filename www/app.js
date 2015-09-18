(function() {
  
  HomeView.prototype.template = Handlebars.compile($('#home-tpl').html());
  HeaderView.prototype.template = Handlebars.compile($('#header-tpl').html());
  ContentView.prototype.template = Handlebars.compile($('#content-tpl').html());
  FooterView.prototype.template = Handlebars.compile($('#footer-tpl').html());

  function HomeView () {

    var headerView,
        contentView,
        footerView;

    this.initialize = function() {
      this.$el = $('<div/>'); // Define a div wrapper for the view (used to attach events)
      headerView = new HeaderView();
      contentView = new ContentView();
      footerView = new FooterView();
      this.render();
    };

    this.render = function() {
      this.$el.html(this.template());
      $('#header').append(headerView.template());
      $('#content').append(contentView.template());
      $('#footer').append(footerView.template());
      return this;
    };

    this.initialize();

  }
  var homeView = new HomeView();
}());