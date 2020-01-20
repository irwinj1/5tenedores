//importamos de react-navigation-stack el createStackNavigator
import { createStackNavigator } from "react-navigation-stack";
//importamos de la vista de la ruta creada en app/screens/nombredelarchivo
import SearchScreen from "../screens/Search";
//mandamos el componete creado con el createStackNavigator
const SearchScreenStack = createStackNavigator({
  //creamos el objeto a enviar
  Search: {
    //invocamos el componente
    screen: SearchScreen,
    //con navigationOptions creamos un titulo al componente que enviamos a la navegacion
    navigationOptions: () => ({
      //asignamos el titulo
      title: "Buscar restaurante"
    })
  }
});
//exportamos el objeto que creamos para poder recibirlo en el componente de navegacion
export default SearchScreenStack;
