import * as Actions from "constants/actions"
import createStore from "util/store"

export default createStore({}, {

	[Actions.TEST](state,action) {
		return {
			...state,
			"foo" : action.message
		}
	},
	[Actions.TEST_ASYNC](state, action) {
		return {
			...state,
			"foo" : action.message
		}
	}

});