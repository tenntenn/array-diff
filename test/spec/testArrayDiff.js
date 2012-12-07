describe("array-diff test", function(){
	it('test1', function(){
		var a = [1, 2, 3, 4, 5];
		var b = [1, 1, 2, 3, 3, 5];

		expect(arrayDiff(a, b).patch(a), b);
	});
});
