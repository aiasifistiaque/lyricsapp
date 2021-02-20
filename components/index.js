import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../styles';

export const BlackText = ({ children, size, weight, mv, mh, m }) => {
	return (
		<Text
			style={{
				fontSize: size || 16,
				fontWeight: weight || '600',
				margin: m || 0,
				marginHorizontal: mh || 0,
				marginVertical: mv || 0,
			}}>
			{children}
		</Text>
	);
};

export const PinkText = ({ children, size, weight, mv, mh, m }) => {
	return (
		<Text
			style={{
				color: colors.pink,
				fontSize: size || 16,
				fontWeight: weight || '600',
				margin: m || 0,
				marginHorizontal: mh || 0,
				marginVertical: mv || 0,
			}}>
			{children}
		</Text>
	);
};
