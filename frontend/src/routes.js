import PageHome from './pages/PageHome'

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

export default createAppContainer(
    createStackNavigator({
        PageHome,
    })
);
