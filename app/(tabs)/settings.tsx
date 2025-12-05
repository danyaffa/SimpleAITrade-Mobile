import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function SettingsScreen() {
  const router = useRouter();

  function handleLogout() {
    // TODO: clear mobile tokens + call /api/auth/clear-session equivalent
    router.replace("/");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Manage your mobile preferences</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Broker connection</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>View / manage linked broker</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Theme: Dark</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity
          style={[styles.row, styles.dangerRow]}
          onPress={handleLogout}
        >
          <Text style={styles.dangerText}>Sign out</Text>
        </TouchableOpacity>
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
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#e5e7eb",
    marginBottom: 8,
  },
  row: {
    backgroundColor: "#0f172a",
    borderRadius: 12,
    padding: 12,
  },
  rowText: {
    color: "#e5e7eb",
  },
  dangerRow: {
    backgroundColor: "#450a0a",
  },
  dangerText: {
    color: "#fecaca",
    fontWeight: "600",
    textAlign: "center",
  },
});
