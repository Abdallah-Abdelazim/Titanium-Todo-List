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

	$.__views.todoWin && $.addTopLevelView($.__views.todoWin);
	var __alloyId0 = {};var __alloyId3 = [];var __alloyId4 = { type: 'Ti.UI.View', childTemplates: function () {var __alloyId5 = [];var __alloyId7 = { type: 'Ti.UI.View', childTemplates: function () {var __alloyId8 = [];var __alloyId9 = { type: 'Ti.UI.Label', bindId: 'todoItemLbl', properties: { width: "75%", height: Ti.UI.SIZE, color: Alloy.CFG.primaryTextColor, left: "8dp", right: "52dp", bindId: "todoItemLbl" } };__alloyId8.push(__alloyId9);var __alloyId10 = { type: 'Ti.UI.Button', properties: { width: "20%", right: "8dp", title: 'DONE' }, events: { click: markTodoDone } };__alloyId8.push(__alloyId10);return __alloyId8;}(), properties: { width: Titanium.UI.FILL, height: Titanium.UI.SIZE } };__alloyId5.push(__alloyId7);var __alloyId12 = { type: 'Ti.UI.View', properties: { width: Titanium.UI.FILL, height: "1dp", backgroundColor: Alloy.CFG.grayColor } };__alloyId5.push(__alloyId12);return __alloyId5;}(), properties: { layout: "vertical", width: Titanium.UI.FILL, height: Titanium.UI.SIZE } };__alloyId3.push(__alloyId4);var __alloyId2 = { properties: { name: "todoItemTemplate" }, childTemplates: __alloyId3 };__alloyId0["todoItemTemplate"] = __alloyId2;$.__views.todoSection = Ti.UI.createListSection(
	{ id: "todoSection" });

	var __alloyId14 = [];__alloyId14.push($.__views.todoSection);$.__views.todoListView = Ti.UI.createListView(
	{ sections: __alloyId14, templates: __alloyId0, id: "todoListView", defaultItemTemplate: "todoItemTemplate" });

	$.__views.todoWin.add($.__views.todoListView);
	$.__views.addBtn = Ti.UI.createButton(
	{ title: "+", font: { fontSize: "24" }, bottom: "16dp", right: "16dp", color: "white", backgroundColor: Alloy.CFG.primaryColor, width: "48dp", height: "48dp", borderRadius: "128dp", id: "addBtn" });

	$.__views.todoWin.add($.__views.addBtn);
	addTodo ? $.addListener($.__views.addBtn, 'click', addTodo) : __defers['$.__views.addBtn!click!addTodo'] = true;exports.destroy = function () {};




	_.extend($, $.__views);



	var todos = Alloy.createCollection('todo');

	function init() {
		todos.fetch();

		var listItems = [];
		for (var i = 0; i < todos.length; i++) {
			var todoModel = todos.at(i);

			Ti.API.info('Model[' + i + '] = ' + JSON.stringify(todoModel));

			var item = {
				todoItemLbl: {
					text: todoModel.get('item') } };



			listItems.push(item);
		}
		$.todoListView.sections[0].setItems(listItems);
	}

	function addTodo(e) {
		var controller = Alloy.createController("add");
		controller.addWin.open();
	}

	function markTodoDone(e) {
		var itemIndex = e.itemIndex;
		Ti.API.info('Item index = ' + itemIndex);

		var todoModel = Alloy.createModel('todo', { item_id: todos.at(itemIndex).get('item_id') });
		todoModel.destroy();

		$.todoListView.sections[0].deleteItemsAt(itemIndex, 1);
	}

	$.todoWin.addEventListener('focus', function () {
		init();
	});





	__defers['$.__views.addBtn!click!addTodo'] && $.addListener($.__views.addBtn, 'click', addTodo);



	_.extend($, exports);
}

module.exports = Controller;