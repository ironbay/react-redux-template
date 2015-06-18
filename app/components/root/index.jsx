require("root/reset.css");
require("root/root.css")
var React = require('react');
var Router = require('react-router');

var Header = require("header")


var app = React.createClass({

	render: function() {
		return (
			<section className="root">
				<Header />
				<section className="main">
					<Router.RouteHandler />
				</section>
			</section>
		)
	}
});

module.exports = app;
