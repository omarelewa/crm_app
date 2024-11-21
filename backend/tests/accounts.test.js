const request = require('supertest');
const express = require('express');
const { sequelize } = require('../models');
const accountRoutes = require('../routers/accounts');

const app = express();
app.use(express.json());
app.use('/api/accounts', accountRoutes);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.close();
});

describe('Accounts API', () => {
  it('should create a new account', async () => {
    const response = await request(app)
      .post('/api/accounts')
      .send({
        name: 'Test Account',
        email: 'test@example.com',
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('name', 'Test Account');
    expect(response.body).toHaveProperty('email', 'test@example.com');
  });
});
