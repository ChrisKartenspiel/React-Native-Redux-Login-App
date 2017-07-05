// Main App File
// @flow

// Import a library to help create a component
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import { Header } from './components/common';


class App extends Component {

    render() {
        return (
            <Provider store={createStore(reducers)}>
            <View>
                <Header headerText={'Redux Logic'} />
                <Text>The App!</Text>
            </View>
            </Provider>
        );
    }
}

export default App;
