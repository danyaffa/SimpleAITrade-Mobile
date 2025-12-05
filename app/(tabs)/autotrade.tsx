import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

export default function AutoTradeScreen() {
  const [enabled, setEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Auto-trade</Text>
      <Text style={styles.subtitle}>
        Mirror your SimpleAITrade strategy on the go.
      </Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Status</Text>
          <Text style={[styles.value, enabled ? styles.on : styles.off]}>
            {enabled ? "ENABLED" : "DISABLED"}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Master strategy sync</Text>
          <Switch
            value={enabled}
            onValueChange={(v) => {
              setEnabled(v);
              // TODO: call your /api/auto-trade endpoint
            }}
          />
        </View>

        <Text style={styles.note}>
          Auto-trade uses the same guardrails and limits you configured in the
          web app. Changes should be made from the main dashboard for now.
        </Text>
      </View>
    </View>
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
  card: {
    backgroundColor: "#0f172a",
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    color: "#9ca3af",
    fontSize: 14,
  },
  value: {
    fontWeight: "700",
  },
  on: {
    color: "#22c55e",
  },
  off: {
    color: "#f97373",
  },
  note: {
    marginTop: 8,
    color: "#9ca3af",
    fontSize: 12,
  },
});
