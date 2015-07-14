import React from "react"
import {Route, Redirect} from 'react-router';
import Root from "root"
import HomePage from 'home-page'

export default (
	<Route name="app" component={Root}>
		<Route path="home" component={HomePage} />
		<Redirect from='/' to='home' />
	</Route>
)
