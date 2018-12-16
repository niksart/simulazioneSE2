const fetch = require('node-fetch');

const app = require('../index.js');
const PORT = process.env.PORT || 3000;
const BASE_URL = "http://localhost:" + PORT;

let server;
beforeAll(() => {
	server = app.listen(PORT, () => {'App is listening on port' + PORT});
});

afterAll(() => {
	server.close();
});

test('app module should be defined', () => {
	expect(app).toBeDefined();
});

test('GET / should return 200', () => {
	return fetch(BASE_URL)
		.then(res => {
			expect(res.status).toBe(200);
		});
});

test('GET /square?string=gatto', () => {
	return fetch(BASE_URL + '/square?string=gatto')
		.then(res => {
			expect(res.status).toBe(200);
			return res.json();
		})
		.then(json => {
			expect(json).toEqual({"result": 25});
		});
});

