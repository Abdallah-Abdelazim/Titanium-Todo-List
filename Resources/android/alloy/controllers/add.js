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
	this.__controllerPath = 'add';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.addWin = Ti.UI.createWindow(
	{ backgroundColor: "white", layout: "vertical", id: "addWin", title: "Add Item", modal: true });

	$.__views.addWin && $.addTopLevelView($.__views.addWin);
	$.__views.itemField = Ti.UI.createTextField(
	{ color: Alloy.CFG.primaryTextColor, hintTextColor: Alloy.CFG.grayColor, width: "90%", top: 55, returnKeyType: Ti.UI.RETURNKEY_DONE, borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: Alloy.CFG.primaryColor, borderRadius: "32dp", backgroundColor: "transparent", id: "itemField", hintText: "What do you need to do?" });

	$.__views.addWin.add($.__views.itemField);
	$.__views.addBtn = Ti.UI.createButton(
	{ width: "50%", top: 20, title: 'Add Item', id: "addBtn" });

	$.__views.addWin.add($.__views.addBtn);
	$.__views.cancelBtn = Ti.UI.createButton(
	{ width: "50%", top: 20, title: 'Cancel', id: "cancelBtn" });

	$.__views.addWin.add($.__views.cancelBtn);
	exports.destroy = function () {};




	_.extend($, $.__views);


	var todos = require('collection');

	$.addBtn.addEventListener('click', function () {

		var item = $.itemField.value;
		todos.add(item);

		$.addWin.close();
	});

	$.cancelBtn.addEventListener('click', function () {
		$.addWin.close();
	});









	_.extend($, exports);
}

module.exports = Controller;