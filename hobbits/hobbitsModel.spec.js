const request = require('supertest');
const Hobbits = require('./hobbitsModel');
const db = require('../data/dbConfig');

describe('hobbits model', () => {
    describe('insert()', () => {
        it('inserts provided hobbit', async () => {
            await Hobbits.insert({ name: "Gaffer" });
            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(100);
        });
    });
});