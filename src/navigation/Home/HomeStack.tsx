import { AppRoutes } from '../routes';
import HomeScreen from '../../screens/HomeScreen';
import ProductDetailsScreen from '../../screens/ProductDetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export type HomeStackParamList = {
    Home: undefined
    ProductDetails: undefined
}

export type HomeStackPropsType<T extends keyof HomeStackParamList> = StackScreenProps<HomeStackParamList, T>
export type HomeStackNavType<T extends keyof HomeStackParamList> = StackNavigationProp<HomeStackParamList, T>

const HomeStack = () => {

    const Stack = createNativeStackNavigator();

    const screenOptions = { headerShown: false }

    return (
        <Stack.Navigator initialRouteName={AppRoutes.HOME} screenOptions={screenOptions}>
            <Stack.Screen name={AppRoutes.HOME} component={HomeScreen} />
            <Stack.Screen name={AppRoutes.PRODUCT_DETAILS} component={ProductDetailsScreen} />
        </Stack.Navigator>
    )
}

export default HomeStack;
