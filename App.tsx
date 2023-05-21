const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login1 from "./screens/Login1";
import HomeScroll3 from "./screens/HomeScroll3";
import CaloriesDetails from "./screens/CaloriesDetails";
import RewardReward from "./screens/RewardReward";
import Login from "./screens/Login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Circular Std_regular": require("./assets/fonts/Circular_Std_regular.ttf"),
    "Circular Std_bold": require("./assets/fonts/Circular_Std_bold.ttf"),
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
    Roboto_bold: require("./assets/fonts/Roboto_bold.ttf"),
    "DM Sans_bold": require("./assets/fonts/DM_Sans_bold.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Login1"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Login1"
              component={Login1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScroll3"
              component={HomeScroll3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CaloriesDetails"
              component={CaloriesDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RewardReward"
              component={RewardReward}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
