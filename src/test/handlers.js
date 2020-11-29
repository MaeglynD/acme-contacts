import { rest } from 'msw';

// requests listed will be redirected as such
const handlers = [
	rest.get('/contacts', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{ name: "Charles Champion", phone: "01234567894" },
				{ name: "Karli Karlson", phone: "012345678921" }
			])
		)
	})
];

export { handlers }