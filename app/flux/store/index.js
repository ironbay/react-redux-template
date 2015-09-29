import * as reducers from 'reducers'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(
    thunk,
)(createStore)

const combined = combineReducers(reducers)
const store = createStoreWithMiddleware(combined)

if (module.hot) {
	module.hot.accept('../reducers', () => {
		const nextRootReducer = require('../reducers')
		store.replaceReducer(nextRootReducer)
	})
}

export default store
