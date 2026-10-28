import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const navigationItems = [
  { label: "Home", icon: "home" },
  { label: "Samples", icon: "play-skip-forward-outline" },
  { label: "Search", icon: "search-outline" },
  { label: "Library", icon: "bookmark-outline" },
] as const;

type BottomNavigationProps = {
  activeItem?: (typeof navigationItems)[number]["label"];
};

export function BottomNavigation({
  activeItem = "Home",
}: BottomNavigationProps) {
  return (
    <View style={styles.container}>
      {navigationItems.map((item) => {
        const isActive = item.label === activeItem;

        return (
          <View style={styles.item} key={item.label}>
            <Ionicons
              name={item.icon}
              size={28}
              color={isActive ? "#ffffff" : "#dedede"}
            />
            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {item.label}
            </Text>
          </View>
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
