/* global document */
import React from 'react'
import Routes from './routes'
import { Provider } from 'react-redux'
import store from 'store'
const element = (
	<Provider store={store}>
		{Routes}
	</Provider>
)
React.render(element, document.body)
