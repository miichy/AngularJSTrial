describe('ListCtrl',function(){
	it ('should hava five kobes',function(){
		var scope = {},
			ctrl = new ListCtrl(scope);

		expect(scope.players.length).toBe(5);
	}) ;
});