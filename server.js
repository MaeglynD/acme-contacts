// import and setup server
const express = require("express");
const app = express();
const port = 6000;

// all 'contacts'
const contactData = require("./src/api/data");

// escape user input
// http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
function escapeRegExp(str) {
	return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}

// filter data, return names which include a given str
function findContacts(str) {
	const expr = RegExp(".*" + escapeRegExp(str) + ".*", "i");

	return contactData
		.filter((item) => expr.test(item.name))
		.sort((a, b) => a.name.localeCompare(b.name));
}

// return all 'contacts' within contactData
app.get("/contacts", async (req, res) => {
	const { term } = req.query;

	// feel free to test the loading animation using this function
	await new Promise(resolve => setTimeout(resolve, 200));

	// the 3 char minimum in the previous code is still required (?)
	if (!term || typeof term !== "string" || term.length < 3) {
		res.status(400).send({
			error: 'Must be a valid string, 3 or more letters long'
		});
		return;
	}

	// return results found
	const decodedTerm = decodeURIComponent(term);
	res.json(findContacts(decodedTerm));
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
