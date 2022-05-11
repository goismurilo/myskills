import React from 'react';
import { Home } from './src/pages/Home';

import { StatusBar } from 'react-native';

export default function App() {
    return (
        <>
            <StatusBar backgroundColor="#121015" barStyle="light-content" />
            <Home />
        </>
    );
}
