# React Phonebook Test

## Intro

This is a very simple React app that allows you to filter and view peoples contact details. All the data for the contacts is currently hardcoded on the clientside.

## Setup
- You may need to be using Node 12+
- Install with `npm install`.
- You can run the server with `npm start-server`.
- You can run the app with `npm start`.
- Run tests with `npm test`.

## Task

Update the app to make an API request to retrieve the contacts from the API instead of using ones hardcoded on the client.

You should show a loading spinner and handle request errors and show an appropriate error message.

We'll be looking at how you work and what you think is "good" looks like. The code you write doesn’t have to show-off or be full of on-liners. Feel free to be pragmatic in what you do and why.

### Dev notes

The task should take 1-2 hours. Please don't spend extra time adding polish or improving tooling. Just do what you need to cleanly and efficiently meet the requirements and verify them within the existing suite of tests.

The code style in this repo may not represent current best practices in all areas. Don't worry too much about updating pre-existing code, but feel free to rework if it helps with your solution.
‌
#### API

The api runs at http://localhost:6000/contacts and requires a "term" query parameter to be provide to filter the returned results.

#### Loading and error states

For the loading state there's an image you can use at `/loading.gif`

One error message for all error scenarios, e.g. "Oops, something went wrong!", would be fine.


#### Testing

There are component tests written in React Testing Library, these should be updated to handle changes to an asynchronous request and to test the error and loading scenarios.

All other existing tests should be passing or removed if not relevant.
