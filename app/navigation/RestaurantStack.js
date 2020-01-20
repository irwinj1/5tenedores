import { createStackNavigator } from "react-navigation-stack";
import RestaurantScreen from "../screens/Restaurant";

const RestaurantScreenStack = createStackNavigator({
  Restaurant: {
    screen: RestaurantScreen,
    navigationOptions: () => ({
      title: "Restaurantes"
    })
  }
});
export default RestaurantScreenStack;
