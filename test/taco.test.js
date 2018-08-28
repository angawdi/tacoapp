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

// POST .tacos
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