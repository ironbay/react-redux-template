
var React = require("react/addons");
var Router = require("react-router")
var Route = Router.Route;
var Redirect = Router.Redirect;

var Root = require("root/base.jsx");

var routes = (
	<Route name="app" path="/" handler={Root}>
	</Route>
)


React.initializeTouchEvents(true)
Router.run(routes, Router.HistoryLocation, function(Handler) {
	React.render(<Handler/>, document.body)   
})
