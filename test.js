const request = require('supertest');
const app = require('./server');

describe('CRUD API', () => {
  it('should create and retrieve items', async () => {
    await request(app).post('/items').send({ name: 'Test Item' }).expect(201);
    const res = await request(app).get('/items');
    expect(res.body.length).toBeGreaterThan(0);
  });
});
