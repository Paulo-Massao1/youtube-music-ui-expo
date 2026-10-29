import { Ionicons } from "@expo/vector-icons";
import { type Href, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const navigationItems = [
  { label: "Home", icon: "home", href: "/" },
  { label: "Samples", icon: "play-skip-forward-outline", href: "/samples" },
  { label: "Search", icon: "search-outline", href: "/search" },
  { label: "Library", icon: "bookmark-outline", href: "/library" },
] as const;

type BottomNavigationProps = {
  activeItem?: (typeof navigationItems)[number]["label"];
};

export function BottomNavigation({
  activeItem = "Home",
}: BottomNavigationProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {navigationItems.map((item) => {
        const isActive = item.label === activeItem;

        return (
          <Pressable
            accessibilityLabel={`Open ${item.label}`}
            key={item.label}
            onPress={() => router.replace(item.href as Href)}
            style={styles.item}
          >
            <Ionicons
              name={item.icon}
              size={28}
              color={isActive ? "#ffffff" : "#dedede"}
            />
            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 66,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#202020",
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  label: {
    color: "#dedede",
    fontSize: 12,
  },
  activeLabel: {
    color: "#ffffff",
  },
});
