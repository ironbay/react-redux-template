require("root.css")
var React = require('react');
var Router = require('react-router');


var app = React.createClass({

	render: function() {
		return (
			<section className="root">
				<section className="main">
					<Router.RouteHandler />
				</section>
			</section>
		)
	}
});

module.exports = app;