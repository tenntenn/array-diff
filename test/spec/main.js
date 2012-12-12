define(
	'spec/main',
	[
		'spec/testArrayDiff',
		'spec/testEditScript'
	],
	function() {
		$(function() {
			if (window.mochaPhantomJS) {
				// on console
				mochaPhantomJS.run();
			} else {
				// on browser
				mocha.run();
			}
		});
	}
);
