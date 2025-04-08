import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function PaywallScreen() {
  const [promo, setPromo] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Get your life back</Text>

      <Text style={styles.bullet}>✔️ 100% Customizable habit trackers</Text>
      <Text style={styles.bullet}>✔️ Steal routines from 150+ World Leaders</Text>
      <Text style={styles.bullet}>✔️ AI-powered daily planners</Text>
      <Text style={styles.bullet}>✔️ Real-time Progress Visualizations</Text>

      <View style={styles.pricingRow}>
        <TouchableOpacity style={styles.monthly}><Text style={styles.priceLabel}>Monthly{"\n"}₹620.00/mo</Text></TouchableOpacity>
        <TouchableOpacity style={styles.yearly}><Text style={styles.priceLabel}>Yearly{"\n"}₹3,100.00/year</Text></TouchableOpacity>
      </View>

      <Text style={styles.promoToggle}>Hide Promo Code</Text>

      <View style={styles.promoBox}>
        <TextInput
          placeholder="Enter promo code"
          placeholderTextColor="#777"
          value={promo}
          onChangeText={setPromo}
          style={styles.promoInput}
        />
        <TouchableOpacity style={styles.applyBtn}><Text style={styles.applyText}>Apply</Text></TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.continueBtn}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Restore Purchases</Text>
      <Text style={styles.footerText}>Cancel anytime</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  heading: { fontSize: 24, color: '#fff', fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  bullet: { color: '#ccc', fontSize: 16, marginBottom: 10 },
  pricingRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  monthly: { backgroundColor: '#1e1e1e', padding: 16, borderRadius: 12, width: '48%' },
  yearly: { backgroundColor: '#8b5cf6', padding: 16, borderRadius: 12, width: '48%' },
  priceLabel: { color: '#fff', textAlign: 'center' },
  promoToggle: { color: '#8b5cf6', textAlign: 'center', marginVertical: 16 },
  promoBox: { flexDirection: 'row', marginBottom: 20 },
  promoInput: {
    flex: 1, borderWidth: 1, borderColor: '#333', backgroundColor: '#111',
    color: '#fff', borderRadius: 10, padding: 12, marginRight: 10
  },
  applyBtn: {
    backgroundColor: '#8b5cf6', paddingVertical: 12, paddingHorizontal: 16,
    borderRadius: 10
  },
  applyText: { color: '#fff', fontWeight: 'bold' },
  continueBtn: {
    backgroundColor: '#8b5cf6', padding: 16, borderRadius: 30,
    alignItems: 'center', marginBottom: 16
  },
  continueText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  footerText: { color: '#aaa', textAlign: 'center', fontSize: 14, marginBottom: 4 },
});
