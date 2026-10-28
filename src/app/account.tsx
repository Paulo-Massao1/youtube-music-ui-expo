import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type AccountOption = {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
};

const accountOptions: AccountOption[] = [
  { id: "channel", icon: "person-outline", label: "Your channel" },
  { id: "downloads", icon: "download-outline", label: "Downloads" },
  { id: "history", icon: "time-outline", label: "History" },
  { id: "recap", icon: "play-back-outline", label: "Your Recap" },
  { id: "badges", icon: "ribbon-outline", label: "Badges" },
  { id: "memberships", icon: "cash-outline", label: "Paid memberships" },
  { id: "switch", icon: "people-outline", label: "Switch account" },
  { id: "settings", icon: "settings-outline", label: "Settings" },
  { id: "help", icon: "help-circle-outline", label: "Help & feedback" },
];

function AccountMenuItem({ item }: { item: AccountOption }) {
  return (
    <View style={styles.menuItem}>
      <View style={styles.menuIcon}>
        <Ionicons name={item.icon} size={29} color="#ffffff" />
      </View>
      <Text style={styles.menuLabel}>{item.label}</Text>
    </View>
  );
}

export default function AccountScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Pressable
          accessibilityLabel="Close account"
          hitSlop={12}
          onPress={() => router.back()}
        >
          <Ionicons name="close" size={34} color="#ffffff" />
        </Pressable>
        <Text style={styles.headerTitle}>Account</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileSection}>
          <Image
            source={{ uri: "https://picsum.photos/seed/paulo-profile/160/160" }}
            style={styles.profileImage}
          />
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>Pauloxx</Text>
            <Text style={styles.profileHandle}>@MassaoPaulo</Text>
            <Text style={styles.manageAccount}>Manage your Google Account</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.premiumHeading}>YOUTUBE PREMIUM</Text>

        <View style={styles.menu}>
          {accountOptions.map((item) => (
            <AccountMenuItem item={item} key={item.id} />
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Privacy Policy</Text>
          <Text style={styles.footerDot}>•</Text>
          <Text style={styles.footerText}>Terms of Service</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    height: 72,
    flexDirection: "row",
    alignItems: "center",
    gap: 27,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "500",
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 17,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 18,
    paddingHorizontal: 20,
    paddingTop: 27,
    paddingBottom: 30,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#252525",
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
  },
  profileHandle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 2,
  },
  manageAccount: {
    color: "#3ea6ff",
    fontSize: 17,
    fontWeight: "500",
    marginTop: 13,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#161616",
  },
  premiumHeading: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "500",
    marginTop: 22,
    marginBottom: 17,
    marginHorizontal: 20,
  },
  menu: {
    paddingHorizontal: 20,
  },
  menuItem: {
    minHeight: 55,
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    width: 55,
    alignItems: "flex-start",
  },
  menuLabel: {
    color: "#ffffff",
    fontSize: 19,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 11,
    marginTop: "auto",
    paddingTop: 40,
  },
  footerText: {
    color: "#a7a7a7",
    fontSize: 15,
    fontWeight: "500",
  },
  footerDot: {
    color: "#777777",
    fontSize: 14,
  },
});
