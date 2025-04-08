import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';

const Wrapper = ({style, children}) => {
  return (
    <View style={[styles.container, style]}>
      <SafeAreaView />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#1a1b20', padding: 20},
});

export default Wrapper;
