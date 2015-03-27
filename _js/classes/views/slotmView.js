var template = require('../../../_hbs/slotmachine.hbs');

var slotmView = Backbone.View.extend({

	template: template,
	tagName: 'main',
	className: "cd-main-content",


	initialize: function(){
		this.render();
	},

	render: function(){

		this.$el.html(this.template());
		return this;

	}

});

module.exports = slotmView;
