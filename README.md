# Reducers
A function that returns a piece (value) of the application's state.- POJO
An app can have many different pieces of state, the state can have many reducers

# Container
React component that has a direct connection to the state managed by redux
In the middle, we have the bridge between react and redux - a container.
Container is just a component that has direct access to the state produced by redux.
They have their own directory.

How to nake the decision?
Usually the most parent component that will actually care about the component data. - booklist and book detail

import React, { Component } from 'react'; <-- import statement with curly braces indicate that we only want a certain property, where
the entire word means we inport the entire object

When ever the application state changes then our container will rerender and the object will be assigned to this.props

# Actions
Actions help us change the state.
An action creator is a function that returns an object (action). Which is then sent to all our reducers.
Reducers can choose (depending on the action) to return a different piece of state. This can then return a new state.
Which then gets piped into the application state. Which rerenders all the containers. (looking for specific state or props).

We also need to connect the action to the container/component