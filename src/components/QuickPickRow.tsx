import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  type ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

type QuickPickRowProps = {
  title: string;
  artist: string;
  plays: string;
  image: string | ImageSourcePropType;
};

export function QuickPickRow({
  title,
  artist,
  plays,
  image,
}: QuickPickRowProps) {
  const imageSource = typeof image === "string" ? { uri: image } : image;

  return (
    <View style={styles.row}>
      <Image source={imageSource} style={styles.cover} />
      <View style={styles.details}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={1} style={styles.metadata}>
          {artist} · {plays}
        </Text>
      </View>
      <Ionicons name="ellipsis-vertical" size={24} color="#ffffff" />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 82,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    padding: 9,
    paddingRight: 12,
    borderRadius: 9,
    backgroundColor: "#181818",
  },
  cover: {
    width: 64,
    height: 64,
    borderRadius: 4,
    backgroundColor: "#292929",
  },
  details: {
    flex: 1,
    gap: 3,
  },
  title: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "600",
  },
  metadata: {
    color: "#a6a6a6",
    fontSize: 15,
  },
});
