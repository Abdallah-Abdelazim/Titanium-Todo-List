exports.definition = {

	config: {
		"columns": {
			"item_id": "integer primary key autoincrement",
			"item":"text"
		},
		"adapter": {
			"type":"sql",
			"collection_name":"todo",
			"idAttribute": "item_id",
			"db_file": "/titanium_todo.sqlite"
		}
	},

	extendModel: function(Model) {
		_.extend(Model.prototype, {

			// extended functions go here
			validate: function (attrs) {
				for (var key in attrs) {
					var value = attrs[key];
					if (key === "item") {
						if (value.length <= 0) {
							return 'Error: No item!';
						}
					}
				}
			}

		}); // end extend

		return Model;
	},


	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {

			// extended functions go here

		}); // end extend

		return Collection;
	}

};

