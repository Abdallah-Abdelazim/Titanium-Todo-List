var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
	var arg = null;
	if (obj) {
		arg = obj[key] || null;
	}
	return arg;
}

function Controller() {

	require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
	this.__controllerPath = 'done';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.doneWin = Ti.UI.createWindow(
	{ backgroundColor: "white", id: "doneWin", title: "Done" });

	$.__views.doneTable = Ti.UI.createTableView(
	{ id: "doneTable" });

	$.__views.doneWin.add($.__views.doneTable);
	$.__views.done = Ti.UI.createTab(
	{ window: $.__views.doneWin, title: "Done", id: "done" });

	$.__views.done && $.addTopLevelView($.__views.done);
	exports.destroy = function () {};




	_.extend($, $.__views);












	_.extend($, exports);
}

module.exports = Controller;