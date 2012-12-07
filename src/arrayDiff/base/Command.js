define(
	'arrayDiff/base/Command',
	[
		'arrayDiff/base/CommandType'
	],
	function(CommandType) {

		/**
		 * @class Command
		 * @constructor
		 * @param {base.CommandType} type type of this command
		 * @param {Number} index index of target of this command
		 * @param {Array}
		 */
		function Command(type, index, value) {
			this.type = type;
			this.index = index;
			this.value = value;
		}

		return Command;
	}
);
