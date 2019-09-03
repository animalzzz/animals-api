require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');

describe('app routes', () => {
  beforeAll(() => {
    connect();
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates an animal', () => {
    return request(app)
      .post('/api/v1/animals')
      .send({ name: 'fred', type: 'Lama', diet: 'herbavor', weight: '60lbs', age: 5 })
      .then(res => {
        expect(res.body).toEqual({ 
          _id: expect.any(String),
          name: 'fred', 
          type: 'Lama', 
          diet: 'herbavor', 
          weight: '60lbs', 
          age: 5 
        });
      });
  });

  it('returns a list of animals', () => {
    return request(app)
      .get('/api/v1/animals')
      .then(res => {
        expect(res.body).toHaveLength(1);
        expect(res.body[0]).toEqual({
          _id: expect.any(String),
          name: 'fred', 
          type: 'Lama', 
          diet: 'herbavor', 
          weight: '60lbs', 
          age: 5 
        });
      });
  });
});
