import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const CustomFooter = () => {
  return (
    <View>
      <View style={styles.footerContainer}>
        <View style={styles.footerLeft}>
          <Text style={styles.footerText}>You ❤️ Beam</Text>
          <Text style={styles.footerShare}>
            Your friends are going to love us too!
          </Text>
          <Text style={styles.footerCopyright}>
            Made with ❤️ - Praveen Prajapati
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/256/11932/11932578.png',
          }}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            flex: 1,
          }}
        />
      </View>
      <View style={{height: 50}} />
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerLeft: {
    flex: 2,
    gap: 10,
    marginVertical: 32,
  },
  footerText: {
    color: '#fbbf24',
    fontSize: 18,
  },
  footerShare: {
    color: '#fff',
    fontSize: 28,
  },
  footerCopyright: {
    color: '#9AA0AF',
    fontSize: 14,
  },
});

export default CustomFooter;
