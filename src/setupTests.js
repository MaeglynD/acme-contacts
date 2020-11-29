import { server } from './test/server';

// before each test, open the server
beforeAll(() => server.listen());
// remove any request handlers
afterEach(() => server.resetHandlers());
// after each test, close the server
afterAll(() => server.close());