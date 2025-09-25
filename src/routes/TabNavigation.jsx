import { createBottomTabNavigator } from '@react-native/bottom-tabs'


import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import CadastroEscola from '../screens/CadastroEscolas';
import ListagemEscola from '../screens/ListagemEscolas';

const Tab = createBottomTabNavigator();


export default function TabRoutes()
{
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Login"
        component={Login}
      />
      <Tab.Screen
        name="Cadastro"
        component={Cadastro}
      />
      <Tab.Screen
        name="Cadastro Escola"
        component={CadastroEscola}
      />
      <Tab.Screen
        name="ListagemEscola"
        component={ListagemEscola}
      />
    </Tab.Navigator>


  );
  
}


// CONTINUAR O VIDEO SOBRE TAB ROUTES 7.30 minutos