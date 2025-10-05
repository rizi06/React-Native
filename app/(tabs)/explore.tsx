import React from "react";
import {
  Image,
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
  { icon: "📞", label: "Phone Number", value: "+43 660 123 4567" },
  { icon: "🌐", label: "Website", value: "www.rizgarcia.com" },
  { icon: "✉️", label: "Email Address", value: "200005@studierende.htl-donaustadt.at" },
  { icon: "📍", label: "Address", value: "Donaustadt, Vienna" },
];

function Card({ style, children }: { style?: any; children: React.ReactNode }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

function ContactRow({
  icon,
  label,
  value,
  onPress,
}: {
  icon: string;
  label: string;
  value: string;
  onPress?: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={styles.contactRow}>
      <Text style={styles.contactIcon}>{icon}</Text>
      <View style={{ flex: 1 }}>
        <Text style={styles.contactLabel}>{label} :</Text>
        <Text style={styles.contactValue}>{value}</Text>
      </View>
    </Pressable>
  );
}

export default function BusinessCardScreen() {
  const { width } = useWindowDimensions();
  const isWide = width >= 720;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: SURFACE }}>
      <ScrollView contentContainerStyle={[styles.page, isWide && { paddingVertical: 36 }]}>
        <Card style={[styles.wrapper, isWide ? styles.row : styles.column]}>
          {/* LEFT: Photo + Name panel */}
          <View style={[styles.leftPane, isWide ? { width: "42%" } : { width: "100%" }]}>
            <View style={styles.photoFrame}>
              <Image
                source={require("../../assets/images/riz.jpeg")}
                style={styles.photo}
              />
            </View>

            <View style={styles.leftTextBlock}>
              <Text style={styles.nameLeft}>RIZ GARCIA</Text>
              <Text style={styles.roleLeft}>Student: HTL Donaustadt</Text>
            </View>
          </View>

          {/* RIGHT: Info panel */}
          <View style={[styles.rightPane, isWide ? { width: "58%" } : { width: "100%" }]}>
            {/* Ribbon / Banner */}
            <View style={styles.ribbonWrap}>
              <View style={styles.ribbonShadow} />
              <View style={styles.ribbon}>
                <Text style={styles.ribbonText}>HTL DONAUSTADT</Text>
              </View>
            </View>

            <View style={{ marginTop: 24, gap: 14 }}>
              {CONTACTS.map((c, i) => (
                <ContactRow key={i} icon={c.icon} label={c.label} value={c.value} />
              ))}
            </View>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: SURFACE,
    minHeight: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  row: { flexDirection: "row" },
  column: { flexDirection: "column" },

  card: {
    backgroundColor: SURFACE,
    borderRadius: 18,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 10 },
      },
      android: { elevation: 8 },
      default: {
        shadowColor: "rgba(0,0,0,0.15)",
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 1,
      },
    }),
  },

  wrapper: {
    overflow: "hidden",
    alignSelf: "stretch",
  },

  leftPane: {
    backgroundColor: DARK,
    padding: 22,
    alignItems: "center",
  },

  photoFrame: {
    borderRadius: 22,
    padding: 8,
    backgroundColor: SURFACE,
  },
  photo: {
    width: 260,
    height: 260,
    borderRadius: 16,
    resizeMode: "cover",
  },

  leftTextBlock: {
    width: "100%",
    marginTop: 18,
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
    letterSpacing: 0.2,
  },

  rightPane: {
    backgroundColor: LIGHT,
    padding: 22,
    position: "relative",
  },

  ribbonWrap: {
    alignItems: "flex-start",
  },
  ribbonShadow: {
    position: "absolute",
    top: 14,
    left: 10,
    width: 40,
    height: 18,
    backgroundColor: "#2e3138",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    transform: [{ rotate: "-6deg" }],
  },
  ribbon: {
    backgroundColor: DARK,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 14,
    alignSelf: "flex-start",
  },
  ribbonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.6,
  },

  contactRow: {
    flexDirection: "row",
    gap: 14,
    alignItems: "flex-start",
    backgroundColor: SURFACE,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  contactIcon: { fontSize: 20, width: 26, textAlign: "center" },
  contactLabel: { color: "#6b7280", fontSize: 13, marginBottom: 2 },
  contactValue: { color: "#111827", fontSize: 16, fontWeight: "700" },
});
