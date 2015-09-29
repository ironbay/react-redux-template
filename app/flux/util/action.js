export default function createActions(actions) {
	var result = {}
	for (let k in actions) {
		(key => {
			var func = actions[key]
			result[key] = (...args) => {
				const data = func(...args)
				if (typeof data === 'function') {
					return dispatch => {
						data(output => dispatch(respond(key, output)))
					}
				}
				return respond(key, data)
			}
		})(k)
	}
	return result
}

function respond(type, output) {
	const result = {
		type,
		...(output || {})
	}
	console.log(result)
	return result
}
