const expect = require('chai').expect;
const request = require('supertest');
const app = require('../index');
const db = require('../models');

// prep test database before running tests
before(function(done) {
	db.sequelize.sync({force: true})
	.then(function() {
		done();
	})
})

// GET /tacos
describe('GET /tacos', function() {
	it('should return a 200 response', function(done) {
		request(app).get('/tacos')
		.expect(200, done);
	})
})

// POST /tacos
describe('POST /tacos', function() {
	it('should create a taco and redirect to /tacos after posting a valid taco',
		function(done){
			request(app).post('/tacos')
			.type('form')
			.send({
				name: 'fish taco',
				amount: 5
			})
			.expect('Location', '/tacos')
			.expect(302, done);
		})
})

// DELETE /tacos/:id
describe('DELETE /tacos/:id', function() {
	it('should delete taco from database and return a 200 response', function(done) {
		request(app).delete('/tacos/1')
		.end(function(err, response) {
			expect(response.statusCode).to.equal(200);
			expect(response.body).to.have.property('msg');
			expect(response.body.msg).to.equal('success');
			done();
		});
	});

	it('should not be able to delete a non-existent taco', function(done) {
    request(app).delete('/tacos/1')
    .end(function(err, response) {
      expect(response.statusCode).to.not.equal(200);
      expect(response.body).to.have.property('msg');
      expect(response.body.msg).to.equal('error');
      done();
    });
  });


});




