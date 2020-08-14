import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/trucate';

describe('User', () => {
  
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
          name: 'Felipe Cunha',
          cpf: '10617797698',
          rg: '527843680',
          password: 'segredo123'
      });

      expect(response.body).toHaveProperty('id');
  });

  it('should return validation fails - no password', async () => {
    const response = await request(app)
      .post('/users')
      .send({
          name: 'Felipe Cunha',
          cpf: '10617797698',
          rg: '527843680',
      });

      expect(response.status).toBe(400);
  });

  it('should return validation fails - cpf < 11', async () => {
    const response = await request(app)
      .post('/users')
      .send({
          name: 'Felipe Cunha',
          cpf: '1098',
          rg: '527843680',
          password: 'segredo123'
      });

      expect(response.status).toBe(400);
  });

  it('should return validation fails - rg < 9', async () => {
    const response = await request(app)
      .post('/users')
      .send({
          name: 'Felipe Cunha',
          cpf: '10617797698',
          rg: '5680',
          password: 'segredo123'
      });

      expect(response.status).toBe(400);
  });

  it('should return validation fails - no name', async () => {
    const response = await request(app)
      .post('/users')
      .send({
          cpf: '10617797698',
          rg: '527843681',
          password: 'segredo123'
      });

      expect(response.status).toBe(400);
  });

  it('should return validation fails - password <= 6', async () => {
    const response = await request(app)
      .post('/users')
      .send({
          name: 'Felipe Cunha',
          cpf: '10617797698',
          rg: '527843681',
          password: '123'
      });

      expect(response.status).toBe(400);
  });


  it('should not be able to register with duplicated cpf', async () => {
    await request(app)
      .post('/users')
      .send({
          name: 'Felipe Cunha',
          cpf: '10617797698',
          rg: '527843681',
          password: 'segredo123'
      });

      const response = await request(app)
      .post('/users')
      .send({
          name: 'Felipe Cunha',
          cpf: '10617797698',
          rg: '527843680',
          password: 'segredo123'
      });
      expect(response.status).toBe(400);
  });

  it('should not be able to register with duplicated rg', async () => {
    await request(app)
      .post('/users')
      .send({
          name: 'Felipe Cunha',
          cpf: '10617797697',
          rg: '527843681',
          password: 'segredo123'
      });

      const response = await request(app)
      .post('/users')
      .send({
          name: 'Felipe Cunha',
          cpf: '10617797698',
          rg: '527843681',
          password: 'segredo123'
      });
      expect(response.status).toBe(400);
  });
});