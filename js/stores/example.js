var Reflux = require("reflux")

module.exports.actions = Reflux.createActions([
	"example"
])

var data = { 
};

module.exports.store = Reflux.createStore({
	listenables : [module.exports.actions],
	onExample : function() {
		this.trigger(data)
	},
	getInitialState: function() {
		return data
	},
})