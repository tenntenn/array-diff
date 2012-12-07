define(
	'arrayDiff/base/EditScript',
	[
		'arrayDiff/base/CommandType'
	],
	function(CommandType) {

		/**
		 * EditScript of an array difference.
		 * @class EditScript
		 * @constructor
		 * @namespace base
		 */
		function EditScript() {

			/**
			 * Common commands.
			 * @private
			 * @property commons
			 * @type base.Command
			 */
			var commons = [];

			/**
			 * Get common commands.
			 * @public
			 * @method getCommonCommands
			 * @return {Array<base.Command>}
			 */
			this.getCommonCommands = function() {
				return [].concat(commons);
			};

			/**
			 * Add commands.
			 * @private
			 * @property adds
			 * @type base.Command
			 */
			var adds = [];

			/**
			 * Get add commands.
			 * @public
			 * @method getAddCommands
			 * @return {Array<base.Command>}
			 */
			this.getAddCommands = function() {
				return [].concat(adds);
			};

			/**
			 * Delete commands.
			 * @private
			 * @property deletes
			 * @type base.Command
			 */
			var deletes = [];

			/**
			 * Get delete commands.
			 * @public
			 * @method getDeleteCommands
			 * @return {Array<base.Command>}
			 */
			this.getDeleteCommands = function() {
				return [].concat(deletes);
			};


			/**
			 * @public
			 * @method push
			 * @param {base.Command} command it will be added
			 */
			this.push = function(command) {
				if (command.type === CommandType.COMMON) {
					commons.push(command);
				} else if (command.type === CommandType.ADD) {
					adds.push(command);
				} else if (command.type === CommandType.DELETE) {
					deletes.push(command);
				}
			};

			/**
			 * Apply patch a given array.
			 * @public
			 * @method patch
			 * @param {Array} array it will be apply patch
			 */
			this.patch = function(array) {
				var patched = [].concat(array);

				var comparator = function(a, b) {
					return a.index - b.index;
				};

				deletes.sort(comparator);
				adds.sort(comparator);

				deletes.forEach(function(del, i) {
					patched.splice(del.index - i, 1);
					adds.forEach(function(add) {
						if (add.index > del.index) {
							add.index -= 1;
						}
					});
				});

				adds.forEach(function(add, i) {
					patched.splice(add.index + i, 0, add.value);
				});

				return patched;
			};
		}
	}
);
