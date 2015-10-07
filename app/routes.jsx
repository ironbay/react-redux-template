/* eslint-disable */
import React from 'react'
import Router, { Route } from 'react-router'
import Root from 'root'
import HomePage from 'home-page'
import createHistory from 'history/lib/createBrowserHistory'

export const history = createHistory()
export default () => (
	<Router history={history}>
		<Route name="app" component={Root}>
			<Route path="/" component={HomePage} />
		</Route>
	</Router>
)
