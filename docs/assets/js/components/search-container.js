module.exports = {
  templateUrl: "assets/templates/search-container.html",
  controller: function() {
    var ctrl = this;

    ctrl.list = [
      {
        name: 'potato'
      }, {
        name: 'carot'
      }, {
        name: 'brocoli'
      }, {
        name: 'onion'
      }, {
        name: 'oncologic'
      }
    ]
  }
};