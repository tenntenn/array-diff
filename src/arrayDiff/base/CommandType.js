define(
	'arrayDiff/base/CommandType',
	[],
	function() {

		/**
		 * Command type.
		 * @public
		 * @class CommandType
		 * @namespace base
		 */
		var CommandType = {

			/**
			 * It indicates Common command.
			 * @public
			 * @static
			 * @final
			 * @property COMMON
			 * @type CommandType
			 */
			COMMON: {},

			/**
			 * It indicates Add command.
			 * @public
			 * @static
			 * @final
			 * @property ADD
			 * @type CommandType
			 */
			ADD: {},

			/**
			 * It indicates Delete command.
			 * @public
			 * @static
			 * @final
			 * @property DELETE
			 * @type CommandType
			 */
			DELETE: {} 

		};

		return CommandType;
	}
);
