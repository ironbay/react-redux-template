import * as Actions from "constants/actions"
import createStore from "util/store"

export default createStore({}, {

	test(state,action) {
		return {
			...state,
			"foo" : action.message
		}
	},
	testAsync (state, action) {
		return {
			...state,
			"foo" : action.message
		}
	}

});