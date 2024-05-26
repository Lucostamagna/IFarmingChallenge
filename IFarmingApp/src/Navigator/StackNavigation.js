import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen from "../Screen/OnBoardingScreen";
import FormScreen from "../Screen/FormScreen";
import SavedFormScreen from "../Screen/SavedFormScreen";
import MyTabs from "./BottomTabNavigation";
import FormDetails from "../Screen/FormDetails";
import CustomHeader from "../Components/CustomHeader";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{
          header: () => (
            <CustomHeader title="Home" />
          ),
        }}
      />
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

      <Stack.Screen
        name="FormDetails"
        component={FormDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
