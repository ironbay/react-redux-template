import Example from "actions/example"
import React from "react"
import Router, { Route, Redirect } from 'react-router'
import App from 'app'

import { createRedux } from 'redux';
import Provider from "redux/react"
import * as stores from "stores"
const redux = createRedux(stores);

var routes = (
	<Route name="app" path="/" handler={App}>
	</Route>
)

React.initializeTouchEvents(true)
Router.run(routes, Router.HistoryLocation, (Handler) => {
	React.render(<Handler/>, document.body)   
})
