import { NavigationContainer } from '@react-navigation/native';
import React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { SingleCityWeatherInterface } from './common/interfaces/SingleCityWeatherInterface';
import { store } from './redux/store.config';
import Dettaglio from './screens/dettaglio/dettaglio';
import Home from './screens/homepage/home';



export type AppRootParamList = {
  Home: undefined;
  Dettaglio: { item: SingleCityWeatherInterface }
};


declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList { }
  }
}

const Stack = createNativeStackNavigator<AppRootParamList>();

const App = () => {



  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
          <Stack.Screen name="Home" component={(props: any) => <Home {...props} />} ></Stack.Screen>
          <Stack.Screen name="Dettaglio" component={(props: any) => <Dettaglio {...props} />}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
};
export default App;
