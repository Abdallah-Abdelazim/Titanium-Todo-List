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
	this.__controllerPath = 'index';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	var __alloyId1 = [];$.__views.__alloyId2 = Alloy.createController('todo', { id: "__alloyId2" });
	__alloyId1.push($.__views.__alloyId2.getViewEx({ recurse: true }));$.__views.__alloyId4 = Alloy.createController('done', { id: "__alloyId4" });
	__alloyId1.push($.__views.__alloyId4.getViewEx({ recurse: true }));$.__views.index = Ti.UI.createTabGroup(
	{ tabs: __alloyId1, id: "index" });

	$.__views.index && $.addTopLevelView($.__views.index);
	exports.destroy = function () {};




	_.extend($, $.__views);


	$.index.open();









	_.extend($, exports);
}

module.exports = Controller;