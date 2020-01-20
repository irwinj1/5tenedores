import { createStackNavigator } from "react-navigation-stack";
import TopRestaurantScreen from "../screens/TopRestaurant";

const TopListsScreenStack = createStackNavigator({
  TopRestaurant: {
    screen: TopRestaurantScreen,
    navigationOptions: () => ({
      title: "Los mejores restaurantes"
    })
  }
});
export default TopListsScreenStack;
