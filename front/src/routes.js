import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PageHome from './pages/Home';

import PageZumbi from './pages/Zumbi/PageZumbi';
import CadastroZumbi from './pages/Zumbi/CRUD/cadastrar';
import EditarZumbi from './pages/Zumbi/CRUD/editar';

import PageArma from './pages/Arma';
import CadastroArma from './pages/Arma/CRUD/cadastrar';
import EditarArma from './pages/Arma/CRUD/editar';

import PageArmadura from './pages/Armadura/PageArmadura';
import CadastroArmadura from './pages/Armadura/CRUD/cadastrar';
import EditaArmadura from './pages/Armadura/CRUD/editar';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen initialParams name="PageHome" component={PageHome} />
        <AppStack.Screen name="PageHomeArma" component={PageArma} />
        <AppStack.Screen name="CadastroArma" component={CadastroArma} />
        <AppStack.Screen name="EditarArma" component={EditarArma} />
        <AppStack.Screen name="PageHomeArmadura" component={PageArmadura} />
        <AppStack.Screen name="CadastroArmadura" component={CadastroArmadura} />
        <AppStack.Screen name="EditaArmadura" component={EditaArmadura} />
        <AppStack.Screen name="PageHomeZumbi" component={PageZumbi} />
        <AppStack.Screen name="CadastroZumbi" component={CadastroZumbi} />
        <AppStack.Screen name="EditaZumbi" component={EditarZumbi} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

// const Routes = createAppContainer(
//   createStackNavigator({
//     PageHome: PageHome,

//     PageHomeArma: PageArma,
//     CadastroArma: CadastroArma,
//     EditarArma: EditarArma,

//     PageHomeArmadura: PageArmadura,
//     CadastroArmadura: CadastroArmadura,
//     EditaArmadura: EditaArmadura,

//     PageHomeZumbi: PageZumbi,
//     CadastroZumbi: CadastroZumbi,
//     EditaZumbi: EditarZumbi,
//   }),
// );

// export default Routes;
