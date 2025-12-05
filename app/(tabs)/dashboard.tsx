import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function DashboardScreen() {
  // TODO: fetch real data from your /api endpoints
  const mockEquity = 25342.17;
  const mockPnL = 342.55;
  const mockTodayChange = 1.36;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Portfolio overview</Text>
      <Text style={styles.subtitle}>Synced with your SimpleAITrade account</Text>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Account Equity</Text>
        <Text style={styles.cardValue}>${mockEquity.toFixed(2)}</Text>
        <Text style={styles.cardSub}>
          Today: {mockTodayChange > 0 ? "+" : ""}
          {mockTodayChange.toFixed(2)}%
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>AI Signals (sample)</Text>
        <View style={styles.signalRow}>
          <Text style={styles.signalTicker}>VOO</Text>
          <Text style={styles.signalText}>Hold – trend steady, low risk.</Text>
        </View>
        <View style={styles.signalRow}>
          <Text style={styles.signalTicker}>AAPL</Text>
          <Text style={styles.signalText}>Watch – possible breakout forming.</Text>
        </View>
        <View style={styles.signalRow}>
          <Text style={styles.signalTicker}>TSLA</Text>
          <Text style={styles.signalText}>Caution – volatility elevated.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#e5e7eb",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: "#9ca3af",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#0f172a",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  cardLabel: {
    fontSize: 13,
    color: "#9ca3af",
  },
  cardValue: {
    fontSize: 28,
    fontWeight: "700",
    color: "#e5e7eb",
    marginTop: 4,
  },
  cardSub: {
    marginTop: 4,
    color: "#22c55e",
    fontSize: 13,
  },
  section: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#e5e7eb",
    marginBottom: 8,
  },
  signalRow: {
    backgroundColor: "#0f172a",
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  signalTicker: {
    width: 60,
    fontWeight: "700",
    color: "#e5e7eb",
  },
  signalText: {
    flex: 1,
    color: "#9ca3af",
    fontSize: 13,
  },
});
