import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator({

    //List out all the screens users can navigate to
    Index: IndexScreen

},{
    //2nd arg: Configuration specific to stack navigator, such as initial route
    initialRouteName: 'Index',
    defaultNavigationOptions: {
        title: 'Blogs'
    }
});

const App = createAppContainer(navigator);

//This is the wrapper. Context is created from the Blog Provider.
//Context is like props, but where props addresses inheritance to the next level, Context is for next levels below.
export default () => {
    return <BlogProvider>
        <App />
    </BlogProvider>
};
