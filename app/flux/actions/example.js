import * as Actions from 'constants/actions'

export function test(message) {
	return {
		type : Actions.TEST,
		message : message
	}
}

export function testAsync(message) {
	return (dispatcher) => {
		setTimeout(() => {
			dispatcher({
				type : Actions.TEST_ASYNC,
				message : message
			})
		}, 2000)
	}
}