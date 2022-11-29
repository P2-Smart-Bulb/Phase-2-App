import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/customLightScreen';
import GPSConfigScreen from './screens/GPSConfigScreen';
import Icon from 'react-native-vector-icons/Entypo'
export default function App() {
  const Stack = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name = "Main"
        component={HomeScreen}
        options={{
          title: 'Your Light',
          headerTitleAlign: 'center',
          tabBarIcon:({color, size}) =><Icon name = "light-bulb" size={size} color = {color}/>
        }}
        />
        <Stack.Screen name = 'gps' component={GPSConfigScreen}
         options={{
          title: 'GPS',
          headerTitleAlign: 'center',
          tabBarIcon:({color, size}) =><Icon name = "globe" size={size} color = {color}/>
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
