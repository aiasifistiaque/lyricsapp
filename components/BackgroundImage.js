import React from 'react';
import { ImageBackground } from 'react-native';

export default function BackgroundImage({ children, src }) {
	return (
		<ImageBackground
			source={require(src)}
			style={{ flex: 1, resizeMode: 'contain', width: '100%' }}>
			{children}
		</ImageBackground>
	);
}
