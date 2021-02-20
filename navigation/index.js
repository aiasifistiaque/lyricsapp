import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchPage from '../pages/SearchPage';
import LyricPage from '../pages/LyricPage';

const Stack = createStackNavigator();

export default function Navigator() {
	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	);
}

const StackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name='Search' component={SearchPage} />
			<Stack.Screen name='Lyrics' component={LyricPage} />
		</Stack.Navigator>
	);
};
