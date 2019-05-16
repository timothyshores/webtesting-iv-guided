const request = require('supertest');
const server = require('./server');

describe('server', () => {
    it('returns status 200 with return', () => {
        return request(server)
            .get('/')
            .expect(200);
    });

    describe('it returns JSON', () => {
        it('returns JSON using async await', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json');
        });

        it('should return JSON with done', done => {
            request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toBe('application/json');
                    done();
                });
        });
    });

    describe('it returns {api: "up"}', () => {
        it('returns {api: "up"} with return', () => {
            return request(server)
                .get('/')
                .then(res => {
                    const { body } = res;
                    expect(body).toEqual({ api: "up" });
                });
        });

        it('returns {api: "up"} with async await', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({ api: "up" });
        });


        it('returns {api: "up"} with done', done => {
            request(server)
                .get('/')
                .then(res => {
                    expect(res.body).toEqual({ api: "up" });
                    done();
                });
        });
    });

});