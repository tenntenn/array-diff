define(
	'spec/main',
	[
		'spec/testArrayDiff'
	],
	function() {
		$(function() {
			mocha.run();
		});
	}
);
