import * as Actions from 'constants/actions'

export function test(message) {
	return {
		message,
		type: Actions.TEST,
	}
}

export function testAsync(message) {
	return dispatcher => {
		setTimeout(() => {
			dispatcher({
				message,
				type: Actions.TEST_ASYNC,
			})
		}, 2000)
	}
}
