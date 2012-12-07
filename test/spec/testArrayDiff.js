define(
	"spec/testArrayDiff",
	[
		"arrayDiff/base/ArrayDiff"
	],
	function(ArrayDiff) {

		describe("arrayDiff.base.ArrayDiff", function(){

			it('can get a EditScript by getEditScript after calling compose', function(){

				var a = [1, 2, 3, 4, 5];
				var b = [1, 1, 2, 3, 3, 5];

				var diff = new ArrayDiff(a, b);
				diff.compose();
				var ec = diff.getEditScript();

				// common command
				ec.getCommonCommands().forEach(

				); 

				expect(b).to.equal(es.patch(a));
			});
		});

	}
);
