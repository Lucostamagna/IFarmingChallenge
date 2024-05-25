import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen from "../Screen/OnBoardingScreen";
import FormScreen from "../Screen/FormScreen";
import SavedFormScreen from "../Screen/SavedFormScreen";


const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="OnBoarding"
        component={OnBoardingScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="Form"
        component={FormScreen}
        options={{
          headerShown: false,
        }}
      />
          <Stack.Screen
        name="SavedForm"
        component={SavedFormScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="Root"
        component={MyBottomTab}
        options={{
          header: () => <CustomHeader />,
        }}
      /> */}
      
    </Stack.Navigator>
  );
}