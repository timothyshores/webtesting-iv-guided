const request = require('supertest');
const hobbits = require('./hobbitsModel');

describe('server', () => {
    it('sets the environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

});