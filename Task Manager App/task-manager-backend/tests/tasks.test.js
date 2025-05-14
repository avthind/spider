let token;

beforeAll(async () => {
  const res = await request(app).post('/api/auth/login').send({
    email: 'testuser@example.com',
    password: '123456',
  });
  token = res.body.token;
});

describe('Task API', () => {
  it('should create a task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Test Task', description: 'Automated test' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('title', 'Test Task');
  });

  it('should fetch user tasks', async () => {
    const res = await request(app)
      .get('/api/tasks')
      .set('Authorization', `Bearer ${token}`);
      
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
