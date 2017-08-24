import React from 'react';
import { ActivityIndicator, View } from 'react-native';


const Spinner = ({ size }) => {
  const { spinnerContainerStyle } = styles;
  return (
    <View style={spinnerContainerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
