import PageHome from './pages/PageHome';
import PageZumbi from './pages/Zumbi/PageZumbi';
import CadastroZumbi from './pages/Zumbi/CRUD/cadastrar';
import BuscaZumbi from './pages/Zumbi/CRUD/buscar';
import EditaZumbi from './pages/Zumbi/CRUD/editar';

import PageArma from './pages/Arma/PageArma';
import CadastroArma from './pages/Arma/CRUD/cadastrar';
import EditarArma from './pages/Arma/CRUD/editar';
import BuscaArma from './pages/Arma/CRUD/buscar';

import PageArmadura from './pages/Armadura/PageArmadura';
import CadastroArmadura from './pages/Armadura/CRUD/cadastrar';
import BuscaArmadura from './pages/Armadura/CRUD/buscar';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    PageHome: PageHome,
    PageZumbi: PageZumbi,
    CadastroZumbi: CadastroZumbi,
    BuscaZumbi: BuscaZumbi,
    EditaZumbi: EditaZumbi,

    PageArma: PageArma,
    CadastroArma: CadastroArma,
    EditarArma: EditarArma,
    BuscaArma: BuscaArma,

    PageArmadura: PageArmadura,
    CadastroArmadura: CadastroArmadura,
    BuscaArmadura: BuscaArmadura,
  }),
);

export default Routes;
