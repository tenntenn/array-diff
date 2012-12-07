define(
	'arrayDiff/base/ArrayDiff',
	[
		'arrayDiff/base/EditScript',
		'arrayDiff/base/Command',
		'arrayDiff/base/CommandType'
	],
	function(EditScript, Command, CommandType) {

		/**
		 * Diffrence of given two arrays.
		 * @public
		 * @class ArrayDiff
		 * @constructor
		 * @param {Array} array1 array
		 * @param {Array} array2 array
		 * @namespace base
		 */
		function ArrayDiff(array1, array2) {

			// assert
			if (!Array.isArray(array1)) {
				throw new Error("First parameter must be Array object.");
			} else if (!Array.isArray(array2)) {
				throw new Error("Second parameter must be Array object.");
			}


			/**
			 * EditScirpt of this diffrence.
			 * @private
			 * @property editscript
			 * @type {base.EditScript}
			 */
			var editscript = null;

			/**
			 * Get composed edit script.
			 * It must be called after calling base.EditScript.compose().
			 * @public
			 * @method getEditScript
			 * @return {base.EditScript} edit script
			 */
			this.getEditScript = function() {
				return editscript;
			};

			/**
			 * 
			 * @method compose
			 * @return base.EditScript
			 */
			this.compose= function() {

				editscript = new EditScript();

				var i = 0;
				array1.forEach(function(o, j) {
					var idx = array2.indexOf(o, i);
					if (idx >= 0) {
						editscript.push(new Command(CommandType.COMMON, j, o));
						i = idx + 1;
					} else {
						editscript.push(new Command(CommandType.DELETE, j, o));
					}
				});

				i = 0;
				array2.forEach(function(o, j) {
					var idx = array1.indexOf(o, i);
					if (idx >= 0) {
						i = idx + 1;
					} else {
						editscript.push(new Command(CommandType.Add, i, o));
					}
				});

			};
		}

		return ArrayDiff;
	}
);
