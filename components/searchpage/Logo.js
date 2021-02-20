import React from 'react';
import { Image } from 'react-native';

const Logo = () => {
	return (
		<Image
			source={require('../../assets/logo.png')}
			style={{ height: 60, width: '90%', resizeMode: 'contain' }}
		/>
	);
};

export default Logo;
