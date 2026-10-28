import { Image, StyleSheet, Text, View } from "react-native";

type SpeedDialTileProps = {
  title: string;
  image: string;
};

export function SpeedDialTile({ title, image }: SpeedDialTileProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cover} resizeMode="cover" />
      <View style={styles.shade} />
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "32.6%",
    aspectRatio: 1,
    overflow: "hidden",
    justifyContent: "flex-end",
    borderRadius: 9,
    backgroundColor: "#252525",
  },
  cover: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  shade: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    height: "36%",
    backgroundColor: "rgba(0, 0, 0, 0.48)",
  },
  title: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
    paddingHorizontal: 7,
    paddingBottom: 7,
  },
});
