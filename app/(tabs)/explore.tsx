import React from "react";
import {
  Image,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DARK = "#3b3f48";
const LIGHT = "#e5e7eb";
const SURFACE = "#ffffff";

const CONTACTS = [
  { icon: "📞", label: "Phone Number", value: "+43 660 123 4567", link: "tel:+436601234567" },
  { icon: "🌐", label: "Website", value: "www.htl-donaustadt.at", link: "https://www.htl-donaustadt.at" },
  { icon: "✉️", label: "Email Address", value: "200005@studierende.htl-donaustadt.at", link: "mailto:200005@studierende.htl-donaustadt.at" },
  { icon: "📍", label: "Address", value: "Donaustadt, Vienna", link: "https://maps.google.com/?q=Donaustadt+Vienna" },
];

export default function BusinessCardScreen() {
  const { width } = useWindowDimensions();
  const isWide = width >= 720;

  const handleLinkPress = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: SURFACE }}>
      <ScrollView contentContainerStyle={styles.page}>
        <View style={[styles.card, { flexDirection: isWide ? "row" : "column" }]}>
          {/* LEFT */}
          <View style={[styles.leftPane, { width: isWide ? "42%" : "100%" }]}>
            <View style={styles.photoFrame}>
              <Image source={require("../../assets/images/riz.jpeg")} style={styles.photo} />
            </View>
            <View style={{ width: "100%", marginTop: 18 }}>
              <Text style={styles.nameLeft}>RIZ GARCIA</Text>
              <Text style={styles.roleLeft}>Student: HTL Donaustadt</Text>
            </View>
          </View>

          {/* RIGHT */}
          <View style={[styles.rightPane, { width: isWide ? "58%" : "100%" }]}>
            <View style={styles.ribbon}>
              <Text style={styles.ribbonText}>HTL DONAUSTADT</Text>
            </View>

            <View style={{ marginTop: 20 }}>
              {CONTACTS.map((c, i) => (
                <Pressable key={i} onPress={() => handleLinkPress(c.link)} style={styles.contactRow}>
                  <Text style={styles.contactIcon}>{c.icon}</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.contactLabel}>{c.label} :</Text>
                    <Text style={styles.contactValue}>{c.value}</Text>
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 20,
    minHeight: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: SURFACE,
  },

  card: {
    alignSelf: "stretch",
    overflow: "hidden",
    borderRadius: 18,
    backgroundColor: SURFACE,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 10 },
      },
      android: { elevation: 8 },
    }),
  },

  /* LEFT */
  leftPane: {
    backgroundColor: DARK,
    padding: 22,
    alignItems: "center",
  },
  photoFrame: {
    backgroundColor: SURFACE,
    borderRadius: 18,
    padding: 8,
  },
  photo: {
    width: 260,
    height: 260,
    borderRadius: 12,
    resizeMode: "cover",
  },
  nameLeft: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: 0.6,
  },
  roleLeft: {
    color: "#cbd5e1",
    fontSize: 16,
    marginTop: 6,
  },

  /* RIGHT */
  rightPane: {
    backgroundColor: LIGHT,
    padding: 22,
  },
  ribbon: {
    alignSelf: "flex-start",
    backgroundColor: DARK,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  ribbonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },

  /* CONTACTS */
  contactRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: SURFACE,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  contactIcon: { fontSize: 20, width: 26, textAlign: "center" },
  contactLabel: { color: "#6b7280", fontSize: 13, marginBottom: 2 },
  contactValue: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});
