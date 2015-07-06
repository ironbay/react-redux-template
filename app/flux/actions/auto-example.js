/*
This uses helper functions from util/action to automatically generate names for dispatched events based on the function names.  This prevents you from having to maintain a list of constants somewhere.
*/


import createActions from "util/action"

export default createActions({
	test(message) {
		return {
			message : message
		}
	},
	testAsync(message) {
		return (dispatcher) => {
			setTimeout(() => {
				dispatcher({
					message : message
				})
			}, 2000)
		}
	},
});