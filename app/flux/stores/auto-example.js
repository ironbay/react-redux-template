import * as Actions from "constants/actions"
import createStore from "util/store"

export default createStore({}, {

	test(state,action) {
		return {
			...state,
			"message" : action.message
		}
	},
	testAsync(state, action) {
		return {
			...state,
			"message" : action.message
		}
	}

});