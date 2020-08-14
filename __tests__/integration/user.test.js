import request from 'supertest';
import app from '../../src/app';


describe('User', () => {
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
});