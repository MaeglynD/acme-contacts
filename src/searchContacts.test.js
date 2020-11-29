import { waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchContacts from './searchContacts';
import { renderWithProvider, restoreStore } from './test/redux';

// recreate the store each test
beforeEach(() =>
	restoreStore()
);

// check if component is in a state of loading or not
const waitForOverlay = async () =>
	await waitForElementToBeRemoved(
		document.querySelector('.loading-overlay')
	);

describe('searchContacts', () => {
	describe('when a search term is provided via the url param', () => {
		const params = { terms: 'arl' };

		it('prefills the search box with the search term', async () => {
			// render component with 'arl' searched
			const { getByPlaceholderText } = renderWithProvider(SearchContacts, params);
			await waitForOverlay();

			const searchBox = getByPlaceholderText('Search for contacts');
			expect(searchBox.value).toBe('arl');
		});

		it('shows matching a contact results', async () => {
			// check charles is listed when searching for 'arl'
			const { getByText } = renderWithProvider(SearchContacts, params);
			await waitForOverlay();

			const searchItem = getByText('Charles Champion');
			expect(searchItem).toBeDefined();
			expect(searchItem.tagName).toBe('A');
		});
	});

	describe('when no search has been made', () => {
		it('shows the default message', async () => {
			// do nothing, ensure default message remains 
			const { getByText } = renderWithProvider(SearchContacts);

			const defaultText = getByText('Search the ACME database (3 letter minimum)')
			expect(defaultText).toBeDefined();
		});
	});

	describe('when a new search is submitted', () => {
		describe('when a valid search term is used', () => {
			// e.g. 'arl' lists charles
			it('shows matching contacts', async () => {
				const {
					getByText,
					getByPlaceholderText
				} = renderWithProvider(SearchContacts)

				// type arl, click search, check result
				const searchBox = getByPlaceholderText('Search for contacts');
				userEvent.type(searchBox, 'arl');

				const searchButton = getByText('Search');
				userEvent.click(searchButton);

				await waitForOverlay();

				const searchItem = getByText('Charles Champion');
				expect(searchItem).toBeDefined();
				expect(searchItem.tagName).toBe('A');
			});
		});

		describe('when the search box is empty', () => {
			it('clears the search results and displays the default message', async () => {
				const { getByPlaceholderText, getByText, container } = renderWithProvider(SearchContacts)

				// type george, click search, clear input, check if results depopulated
				const searchBox = () => getByPlaceholderText('Search for contacts');
				userEvent.type(searchBox(), 'George');

				const searchButton = () => getByText('Search');
				userEvent.click(searchButton());

				await waitForOverlay();

				expect(container.querySelector('.results')).toBeDefined();

				userEvent.clear(searchBox())
				userEvent.click(searchButton());

				const defaultText = getByText('Search the ACME database (3 letter minimum)')
				expect(defaultText).toBeDefined();
			});
		});
	});
})