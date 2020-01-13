import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";

export default createBottomTabNavigator({
  Home,
  Search,
  Add: {
    navigationOptions: {
      tabBarOnPress: ({navigation}) => {
          navigation.navigate("PhotoNavigation")
      }
    }
  },
  Notifications,
  Profile
});

export default createAppContainer(TabNavigation);
