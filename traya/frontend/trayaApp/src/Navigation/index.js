import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenMapper } from "../screensMapper";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screenMapper.map((screen, index) =>
          screen.name === "Dashboard" ? (
            <Stack.Screen
              key={index + 1}
              options={{
                headerLeft: () => <></>,
                headerShown: screen.headerShown,
              }}
              name={screen.name}
              component={screen.component}
            />
          ) : (
            <Stack.Screen
              key={index + 1}
              options={{ headerShown: screen.headerShown }}
              name={screen.name}
              component={screen.component}
            />
          )
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
