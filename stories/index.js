// Why is this not in the client folder? it's client code
import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { Provider } from "react-redux";
import { Router } from "react-router";

import store from "../client/store";
import history from "../client/history";

// I haven't look at this much, but it strikes me as overengineered
// I've never used require.context
const req = require.context("../client/components", true, /\.stories\.js$/);

const loadStories = () => req.keys().forEach(file => req(file));

// This is completely unreadable. Formatting. Use an autoformatter at least
// Also bad name. Add a decorator that does what??
// Also, this is just weird to me. Why would you need to wrap multiple components in a router/store provider combo? Does the app not have a root?
addDecorator(story => (
  <Provider store={store}>
    <Router history={history}>{story()}</Router>
  </Provider>
));
configure(loadStories, module);
