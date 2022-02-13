import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppList from "./views/AppList";
import AppForm from "./views/AppForm";

const { Navigator, Screen } = createBottomTabNavigator();

function AppTab() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="AppList"
          component={AppList}
          options={{
            tabBarLabel: "Compras",
          }}
        />
        <Screen
          name="AppForm"
          component={AppForm}
          options={{
            tabBarLabel: "Adicionar",
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppTab;
