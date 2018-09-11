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
	{ backgroundColor: "white", title: "Todo", id: "todoWin" });

	var __alloyId5 = {};var __alloyId8 = [];var __alloyId10 = { type: 'Ti.UI.View', childTemplates: function () {var __alloyId11 = [];var __alloyId12 = { type: 'Ti.UI.Label', bindId: 'item', properties: { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: Alloy.CFG.primaryTextColor, bindId: "item" } };__alloyId11.push(__alloyId12);return __alloyId11;}(), properties: { layout: "horizontal" } };__alloyId8.push(__alloyId10);var __alloyId7 = { properties: { name: "todoItemTemplate" }, childTemplates: __alloyId8 };__alloyId5["todoItemTemplate"] = __alloyId7;$.__views.todoSection = Ti.UI.createListSection(
	{ id: "todoSection" });

	var __alloyId14 = [];__alloyId14.push($.__views.todoSection);$.__views.todoListView = Ti.UI.createListView(
	{ sections: __alloyId14, templates: __alloyId5, id: "todoListView", defaultItemTemplate: "todoItemTemplate" });

	$.__views.todoWin.add($.__views.todoListView);
	$.__views.addBtn = Ti.UI.createButton(
	{ title: "+", bottom: "16dp", right: "16dp", color: Alloy.CFG.primaryTextColor, backgroundColor: Alloy.CFG.primaryColor, width: "48dp", height: "48dp", borderRadius: "128dp", id: "addBtn" });

	$.__views.todoWin.add($.__views.addBtn);
	addTodo ? $.addListener($.__views.addBtn, 'click', addTodo) : __defers['$.__views.addBtn!click!addTodo'] = true;$.__views.todo = Ti.UI.createTab(
	{ window: $.__views.todoWin, title: "Todo", id: "todo" });

	$.__views.todo && $.addTopLevelView($.__views.todo);
	exports.destroy = function () {};




	_.extend($, $.__views);


	var todos = require('collection');

	function addTodo(e) {
		var controller = Alloy.createController("add");
		controller.addWin.open();
	}

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





	__defers['$.__views.addBtn!click!addTodo'] && $.addListener($.__views.addBtn, 'click', addTodo);



	_.extend($, exports);
}

module.exports = Controller;