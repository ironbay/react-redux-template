import * as Actions from "constants/actions"
import createStore from "util/store"

export default function (state={}, action) {
	switch (action.type) {
		case Actions.TEST:
		case Actions.TEST_ASYNC:
			return {
				...state,
				"message" : action.message
			}
	}
	return state
}