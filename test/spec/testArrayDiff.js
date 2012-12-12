define(
	"spec/testArrayDiff",
	[
		"arrayDiff/base/ArrayDiff",
		"arrayDiff/base/EditScript",
		"arrayDiff/base/Command",
		"arrayDiff/base/CommandType"
	],
	function(ArrayDiff, EditScript, Command, CommandType) {

		describe("arrayDiff.base.ArrayDiff", function(){

			it('can get a EditScript by getEditScript after calling compose', function(){

				var a = [1, 2, 3, 4, 5];
				var b = [1, 1, 2, 3, 3, 5];

				var diff = new ArrayDiff(a, b);
				diff.compose();
				var ec = diff.getEditScript();

				// create expected common commands
				var expectedCommonCmd = [];
				expectedCommonCmd.push(new Command(CommandType.COMMON, 0, 1));
				expectedCommonCmd.push(new Command(CommandType.COMMON, 1, 2));
				expectedCommonCmd.push(new Command(CommandType.COMMON, 2, 3));
				expectedCommonCmd.push(new Command(CommandType.COMMON, 4, 5));
				// get actual common commands
				var actualCommonCmd = ec.getCommonCommands();	
				// check
				expect(expectedCommonCmd.length).to.equal(actualCommonCmd.length);
				for (var i=0; i<actualCommonCmd.length; i++) {
					expect(expectedCommonCmd[i].type).to.equal(actualCommonCmd[i].type);
					expect(expectedCommonCmd[i].index).to.equal(actualCommonCmd[i].index);
					expect(expectedCommonCmd[i].value).to.equal(actualCommonCmd[i].value);
				}

				// create expected add commands
				var expectedAddCmd = [];
				expectedAddCmd.push(new Command(CommandType.ADD, 1, 1));
				expectedAddCmd.push(new Command(CommandType.ADD, 3, 3));
				// get actual add commands
				var actualAddCmd = ec.getAddCommands();	
				// check
				expect(expectedAddCmd.length).to.equal(actualAddCmd.length);
				for (var i=0; i<actualAddCmd.length; i++) {
					expect(expectedAddCmd[i].type).to.equal(actualAddCmd[i].type);
					expect(expectedAddCmd[i].index).to.equal(actualAddCmd[i].index);
					expect(expectedAddCmd[i].value).to.equal(actualAddCmd[i].value);
				}

				// create expected delete commands
				var expectedDeleteCmd = [];
				expectedDeleteCmd.push(new Command(CommandType.DELETE, 3, 4));
				// get actual delete commands
				var actualDeleteCmd = ec.getDeleteCommands();	
				// check
				expect(expectedDeleteCmd.length).to.equal(actualDeleteCmd.length);
				for (var i=0; i<actualDeleteCmd.length; i++) {
					expect(expectedDeleteCmd[i].type).to.equal(actualDeleteCmd[i].type);
					expect(expectedDeleteCmd[i].index).to.equal(actualDeleteCmd[i].index);
					expect(expectedDeleteCmd[i].value).to.equal(actualDeleteCmd[i].value);
				}
			});

			it('can get same array which is given as second parameter of constructor by patch method of editscript', function(){

				var a = [1, 2, 3, 4, 5];
				var b = [1, 1, 2, 3, 3, 5];

				var diff = new ArrayDiff(a, b);
				diff.compose();
				var ec = diff.getEditScript();
				
				var expected = ec.patch(a);

				expect(expected.length).to.equal(b.length);
				for (var i=0; i<b.length; i++) {
					expect(expected[i]).to.equal(b[i]);
				}
			});
		});

	}
);
