import { StyleSheet, Text, View } from "react-native";

type FilterChipProps = {
  label: string;
};

export function FilterChip({ label }: FilterChipProps) {
  return (
    <View style={styles.chip}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    height: 45,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#292c30",
  },
  label: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "500",
  },
});
