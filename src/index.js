import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from 'react-redux';
import store from "./redux/store";
import App from "./app";
import SearchContacts from "./searchContacts";
import ContactPage from "./contactPage";
import "./index.css";

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={SearchContacts} />
				<Route path="search/:terms" component={SearchContacts} />
				<Route path="contact/:contact" component={ContactPage} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById("root")
);
