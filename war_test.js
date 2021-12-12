let expect = chai.expect;

describe('myFunction', function(){
	
	describe('#Player constructor', function(){
		it("Ensure constructor creates a new instance of the Player ", function(){
			testPlayer = new Player();
			expect(testPlayer).to.be.an('object');
		});
	});


});

