
var todos = Alloy.createCollection('todo');

function init() {
	todos.fetch();
	
	var listItems = [];
	for (var i = 0; i < todos.length; i++) {
		var todoModel = todos.at(i);
		
		Ti.API.info('Model[' + i + '] = ' + JSON.stringify(todoModel));
		
		var item = {
			todoItemLbl: {
				text: todoModel.get('item') 
			}
		};
		
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
	
	var todoModel = Alloy.createModel('todo', {item_id: todos.at(itemIndex).get('item_id')});
	todoModel.destroy();
	
	$.todoListView.sections[0].deleteItemsAt(itemIndex, 1);
}

$.todoWin.addEventListener('focus', function() {
	init();
});
