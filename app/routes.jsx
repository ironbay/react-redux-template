import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Root from 'pages/root'

export default (
	<Router history={browserHistory} >
		<Route path='/' component={Root} >
		</Route>
	</Router>
)
