import { createStackNavigator } from "react-navigation-stack";
import MyAcountScreen from "../screens/Account/MyAcount";
import LoginScreen from "../screens/Account/Login";
import RegisterScreen from "../screens/Account/Register";
/*
hemos agregado una nueva navegacion llamada Login con una screen llamada LoginScreen
y mandamos los parametros para recibirlos por medio de la navegacion en la pagina de UserGuest 
*/
const MyAcountScreenStack = createStackNavigator({
  MyAcount: {
    screen: MyAcountScreen,
    navigationOptions: () => ({
      title: "Mi Perfil"
    })
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: "Login"
    })
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: () => ({
      title: "Registro"
    })
  }
});
export default MyAcountScreenStack;
