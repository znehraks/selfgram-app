import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import PhotoNavigation from "./PhotoNavigation";

const MainNavigation = createStackNavigator(
  {
    TabNavigation,
    PhotoNavigation
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);

export default createAppContainer(MainNavigation);