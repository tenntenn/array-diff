define(
	"spec/testEditScript",
	[
		"arrayDiff/base/EditScript",
		"arrayDiff/base/Command",
		"arrayDiff/base/CommandType"
	],
	function(EditScript, Command, CommandType) {
		describe("arrayDiff.base.EditScript", function(){

			it('can get a common command by getCommonCommands which push as Common Command',
			   function(){
				   var ec = new EditScript();
				   var cmd = new Command(CommandType.COMMON, 1, 'a');
				   ec.push(cmd);

				   var cmds = ec.getCommonCommands();

				   expect(cmd).to.equal(cmds[0]);
			   }
			 );

			it('can get a add command by getAddCommands which push as Add Command',
			   function(){
				   var ec = new EditScript();
				   var cmd = new Command(CommandType.ADD, 1, 'a');
				   ec.push(cmd);

				   var cmds = ec.getAddCommands();

				   expect(cmd).to.equal(cmds[0]);
			   }
			);

			it('can get a delete command by getDeleteCommands which push as Delete Command',
			   function(){
				   var ec = new EditScript();
				   var cmd = new Command(CommandType.DELETE, 1, 'a');
				   ec.push(cmd);

				   var cmds = ec.getDeleteCommands();

				   expect(cmd).to.equal(cmds[0]);
			   }
			);

		});
	}
);
