const expect = require('chai').expect;
const request = require('supertest');
const app = require('../index');

describe('GET /', function() {
	it('should return a 200 response', function(done){
		request(app).get('/')
		.expect(200, done);
	})
});