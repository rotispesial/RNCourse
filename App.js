import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator(
    {
    //List out all the screens users can navigate to
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen

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
    return <Provider>
        <App />
    </Provider>
};
