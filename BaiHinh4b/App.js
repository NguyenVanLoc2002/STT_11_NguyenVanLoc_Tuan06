
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./component/Screen1";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


