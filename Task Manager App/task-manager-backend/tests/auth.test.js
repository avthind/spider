const request = require('supertest');
const app = require('../server'); // or wherever your Express app is exported from

describe('Auth API', () => {
  it('should register a user', async () => {
    const res = await request(app).post('/api/auth/register').send({
      email: 'testuser@example.com',
      password: '123456',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should not register with invalid email', async () => {
    const res = await request(app).post('/api/auth/register').send({
      email: 'invalidemail',
      password: '123456',
    });
    expect(res.statusCode).toBe(400);
  });

  it('should login with valid credentials', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'testuser@example.com',
      password: '123456',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});
