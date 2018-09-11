
$.addBtn.addEventListener('click', function() {
	// add todo item
	var itemText = $.itemField.value;
	var todoModel = Alloy.createModel('todo', {item: itemText});
	todoModel.save();

	$.addWin.close();
});

$.cancelBtn.addEventListener('click', function() {
	$.addWin.close();
});
