define(
	"spec/testArrayDiff",
	[
		"arrayDiff/main"
	],
	function(arrayDiff) {
		console.log(arrayDiff);
		describe("array-diff test", function(){
			it('test1', function(){
				var a = [1, 2, 3, 4, 5];
				var b = [1, 1, 2, 3, 3, 5];

				var es = arrayDiff(a, b);

				expect(b).to.equal(es.patch(a));
			});
		});
	}
);
