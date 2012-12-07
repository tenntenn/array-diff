define(
	'arrayDiff/arrayDiff',
	[
		'arrayDiff/base/ArrayDiff'
	],
	function(ArrayDiff) {

		function arrayDiff(array1, array2) {
			var diff = new ArrayDiff(array1, array2);
			diff.compose();

			return diff.getEditScript();
		}

		return arrayDiff;
	}
);
