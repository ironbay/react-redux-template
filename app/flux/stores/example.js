import * as Actions from "constants/actions"
import createStore from "util/store"

export default createStore({}, {
	[Actions.TEST]: state => {
		return {
			...state,
			"foo" : "bar"
		}
	},
});