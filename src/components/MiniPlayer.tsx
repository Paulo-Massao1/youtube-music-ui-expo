import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  type ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type MiniPlayerProps = {
  title: string;
  artist: string;
  image: ImageSourcePropType;
  onPress: () => void;
};

export function MiniPlayer({
  title,
  artist,
  image,
  onPress,
}: MiniPlayerProps) {
  return (
    <Pressable
      accessibilityLabel={`Open ${title} player`}
      onPress={onPress}
      style={styles.container}
    >
      <Image source={image} style={styles.cover} />
      <View style={styles.details}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={1} style={styles.artist}>
          {artist}
        </Text>
      </View>
      <Ionicons name="tv-outline" size={27} color="#ffffff" />
      <Ionicons name="play" size={30} color="#ffffff" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#575757",
    backgroundColor: "#202020",
  },
  cover: {
    width: 54,
    height: 54,
    borderRadius: 3,
  },
  details: {
    flex: 1,
    gap: 2,
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  artist: {
    color: "#c6c6c6",
    fontSize: 15,
  },
});
