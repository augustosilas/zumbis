import PageHome from './pages/PageHome';
import PageZumbi from './pages/Zumbi/PageZumbi';
import CadastroZumbi from './pages/Zumbi/CRUD/cadastrar';
import BuscaZumbi from './pages/Zumbi/CRUD/buscar';
import EditaZumbi from './pages/Zumbi/CRUD/editar';

import PageArma from './pages/Arma/PageArma';
import CadastroArma from './pages/Arma/CRUD/cadastrar';
import EditarArma from './pages/Arma/CRUD/editar';

import PageArmadura from './pages/Armadura/PageArmadura';
import CadastroArmadura from './pages/Armadura/CRUD/cadastrar';
import EditaArmadura from './pages/Armadura/CRUD/editar';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    PageHome: PageHome,

    PageHomeArma: PageArma,
    CadastroArma: CadastroArma,
    EditarArma: EditarArma,

    PageHomeArmadura: PageArmadura,
    CadastroArmadura: CadastroArmadura,
    EditaArmadura: EditaArmadura,

    PageHomeZumbi: PageZumbi,
    CadastroZumbi: CadastroZumbi,
    EditaZumbi: EditaZumbi,
  }),
);

export default Routes;
