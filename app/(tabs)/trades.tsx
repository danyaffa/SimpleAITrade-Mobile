import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

type Trade = {
  id: string;
  symbol: string;
  side: "BUY" | "SELL";
  qty: number;
  price: number;
  time: string;
};

const mockTrades: Trade[] = [
  { id: "1", symbol: "VOO", side: "BUY", qty: 10, price: 415.23, time: "Today 10:32" },
  { id: "2", symbol: "AAPL", side: "SELL", qty: 5, price: 192.11, time: "Yesterday 15:10" },
];

export default function TradesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Recent trades</Text>
      <Text style={styles.subtitle}>Executed via your linked broker</Text>

      {mockTrades.map((t) => (
        <View key={t.id} style={styles.row}>
          <View style={styles.symbolBox}>
            <Text style={styles.symbol}>{t.symbol}</Text>
            <Text
              style={[
                styles.side,
                t.side === "BUY" ? styles.buy : styles.sell,
              ]}
            >
              {t.side}
            </Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsText}>
              {t.qty} @ ${t.price.toFixed(2)}
            </Text>
            <Text style={styles.time}>{t.time}</Text>
          </View>
        </View>
      ))}
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
    fontSize: 22,
    fontWeight: "700",
    color: "#e5e7eb",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: "#9ca3af",
    marginBottom: 16,
  },
  row: {
    backgroundColor: "#0f172a",
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    marginBottom: 10,
  },
  symbolBox: {
    width: 70,
  },
  symbol: {
    fontWeight: "700",
    color: "#e5e7eb",
  },
  side: {
    marginTop: 4,
    fontSize: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 999,
    alignSelf: "flex-start",
    overflow: "hidden",
  },
  buy: {
    backgroundColor: "#16a34a33",
    color: "#22c55e",
  },
  sell: {
    backgroundColor: "#f9737333",
    color: "#f97373",
  },
  details: {
    flex: 1,
  },
  detailsText: {
    color: "#e5e7eb",
    fontSize: 14,
  },
  time: {
    marginTop: 4,
    color: "#9ca3af",
    fontSize: 12,
  },
});
