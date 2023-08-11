// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { FONTS_SIZE } from './fonts';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* header */}
//       <View style={styles.header} />

//       {/* main */}
//       <View style={styles.main}>
//         <View style={styles.section1} />
//         <View style={styles.section2}>
//           <Text style={styles.content}>
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//           </Text>
//         </View>
//       </View>

//       {/* footer */}
//       <View style={styles.footer} />

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // height: hp(100), // 100% height current device
//     flex: 1, // using flex
//     gap: 4
//   },
//   header: {
//     // height: hp(15),
//     flex: 1,
//     backgroundColor: 'tomato'
//   },
//   main: {
//     // height: hp(70),
//     flex: 4,
//     gap: 4,
//     display: 'flex',
//     // flexDirection: 'row'
//   },
//   section1: {
//     // width: wp(50), // width 50%
//     flex: 1,
//     backgroundColor: 'orange'
//   },
//   section2: {
//     // width: wp(50),
//     flex: 3,
//     backgroundColor: 'skyblue'
//   },
//   footer: {
//     // height: hp(15),
//     flex: 1,
//     backgroundColor: 'lightgreen'
//   },
//   content: {
//     fontSize: FONTS_SIZE[14]
//   }
// });

import React, { useEffect } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

// Basic Button Component
const Button = ({ onPress, title }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

// Higher-Order Component for Logging Clicks
const withClickLogging = (WrappedComponent) => (props) => {
  useEffect(() => {
    const handlePress = () => {
      console.log(`Button clicked: ${props.title}`);
      props.onPress();
    };
    // Clean up on unmount (optional)
    return () => {
      console.log(`Cleaning up: ${props.title}`);
    };
  }, [props.onPress, props.title]);

  return <WrappedComponent {...props} />;
};

// Enhanced Button with Click Logging
const ButtonWithClickLogging = withClickLogging(Button);

// Container Component to Center the Button
const CenteredContainer = ({ children }) => (
  <View style={styles.centeredContainer}>
    {children}
  </View>
);

// Usage in a parent component
const App = () => {
  const handleButtonClick = () => {
    console.log('Button clicked in parent component.');
  };

  return (
    <CenteredContainer>
      <ButtonWithClickLogging
        title="Click Me"
        onPress={handleButtonClick}
      />
    </CenteredContainer>
  );
};

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;



