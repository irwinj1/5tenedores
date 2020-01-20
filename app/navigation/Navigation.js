import React from "react";
//importamos lo iconos
import { Icon } from "react-native-elements";
//importamos el contenedor que contendra nuestro menu de navegacion
import { createAppContainer } from "react-navigation";
//importamos la forma como se mostrara nuestra navegacion el la app
import {
  createTabNavigator,
  createBottomTabNavigator
} from "react-navigation-tabs";
//importamos los objetos creados para nuestro menu de navegacion
import RestaurantScreenStack from "./RestaurantStack";
import TopListsScreenStack from "./TopListsStack";
import SearchScreenStack from "./SearchStack";
import MyAcountScreenStack from "./MyAcountStack";
//creamos el objeto que contendra nuestro menu de navegacion en forma de botones
const NavigationStacks = createBottomTabNavigator(
  {
    //creamos nuestro primer objeto de la navegacion
    Restaurant: {
      //le decimos de que contenedor tendra la informacion
      screen: RestaurantScreenStack,
      //damos el formato al boton que se mostrara en los tabs de navegacion
      navigationOptions: () => ({
        //asignamos el nombre que mostrara abajo del la navegacion
        tabBarLabel: "Restaurantes",
        //le brindamos un formato de icono que mostrara en el menu
        tabBarIcon: ({ tintColor }) => (
          <Icon
            //tipo de icono que ocuparemos
            type="material-community"
            //nombre del icono
            name="compass-outline"
            //tamano del icono
            size={22}
            //color del icono
            color={tintColor}
          />
        )
      })
    },
    TopLists: {
      screen: TopListsScreenStack,
      navigationOptions: () => ({
        tabBarLabel: "Ranking",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="star-outline"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Search: {
      screen: SearchScreenStack,
      navigationOptions: () => ({
        tabBarLabel: "Buscar",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="magnify"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    MyAcount: {
      screen: MyAcountScreenStack,
      navigationOptions: () => ({
        tabBarLabel: "Cuenta",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="home-outline"
            size={22}
            color={tintColor}
          />
        )
      })
    }
  },
  {
    //inicializamos un tab por defecto
    initialRouteName: "MyAcount",
    //orden en que los tab se mostraran
    order: ["Restaurant", "TopLists", "Search", "MyAcount"],
    //asignamos colores si el tab esta activo o inactivo
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680"
    }
  }
);
// exportamos el contenedor que tendra todos los elementos del meno de navegacion
export default createAppContainer(NavigationStacks);
