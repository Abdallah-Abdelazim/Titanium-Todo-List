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
	this.__controllerPath = 'todo';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.todoWin = Ti.UI.createWindow(
	{ backgroundColor: "white", id: "todoWin", title: "Todo" });

	$.__views.todoTable = Ti.UI.createTableView(
	{ id: "todoTable" });

	$.__views.todoWin.add($.__views.todoTable);
	$.__views.addBtn = Ti.UI.createButton(
	{ title: "+", bottom: "8dp", right: "8dp", color: "white", backgroundColor: "black", width: "48dp", height: "48dp", borderRadius: "128dp", id: "addBtn" });

	$.__views.todoWin.add($.__views.addBtn);
	$.__views.todo = Ti.UI.createTab(
	{ window: $.__views.todoWin, title: "Todo", id: "todo" });

	$.__views.todo && $.addTopLevelView($.__views.todo);
	exports.destroy = function () {};




	_.extend($, $.__views);


	var todos = require('collection');

	$.addBtn.addEventListener('click', function () {
		var controller = Alloy.createController("add");
		controller.addWin.open();
	});

	$.todoWin.addEventListener('focus', function () {
		todos.fetch();
	});

	$.todoTable.updateContent = function (_rows) {
		var rows = [],
		i = 0,
		len = _rows.length;

		for (; i < len; i++) {
			rows.push(Ti.UI.createTableViewRow(_rows[i]));
		}
		this.setData(rows);
	};

	$.todoTable.addEventListener('click', function (e) {
		Ti.API.info('Title: ' + e.rowData.title);
	});

	Ti.App.addEventListener('app:update_list', function (_collection) {
		Ti.API.info("UPDATE LIST: " + JSON.stringify(_collection.todos));
		$.todoTable.updateContent(_collection.todos);
	});









	_.extend($, exports);
}

module.exports = Controller;