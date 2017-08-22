// purpose of header component is to make a nice rectangle to display Text

// Import libraries to make a Component
import React from 'react';
import { Text, View } from 'react-native';

// make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text
        style={textStyle}
      >
        {props.headerText}
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
    borderRadius: 5
  },
  textStyle: {
    fontSize: 20
  },
};

export { Header };
