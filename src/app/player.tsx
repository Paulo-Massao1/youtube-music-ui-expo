import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const tennesseeCover = require("../../assets/images/tennessee-whiskey.jpeg");

function ActionChip({
  icon,
  label,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
}) {
  return (
    <View style={styles.actionChip}>
      <Ionicons name={icon} size={23} color="#ffffff" />
      <Text style={styles.actionChipText}>{label}</Text>
    </View>
  );
}

export default function PlayerScreen() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(true);
  const { height, width } = useWindowDimensions();
  const coverSize = Math.min(width - 48, height * 0.44, 560);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Pressable
          accessibilityLabel="Close player"
          hitSlop={12}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-down" size={31} color="#ffffff" />
        </Pressable>

        <View style={styles.modeSwitch}>
          <View style={styles.activeMode}>
            <Ionicons name="headset" size={20} color="#a9a9a9" />
          </View>
          <View style={styles.inactiveMode}>
            <Ionicons name="play-circle-outline" size={21} color="#898989" />
          </View>
        </View>

        <View style={styles.headerActions}>
          <Ionicons name="tv-outline" size={29} color="#ffffff" />
          <Ionicons name="ellipsis-vertical" size={25} color="#ffffff" />
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={tennesseeCover}
          style={[styles.albumCover, { width: coverSize, height: coverSize }]}
          resizeMode="cover"
        />

        <View style={styles.songInformation}>
          <View style={styles.songTitleRow}>
            <Text numberOfLines={1} style={styles.songTitle}>
              Tennessee Whiskey
            </Text>
            <Ionicons name="chevron-forward" size={26} color="#d0d0d0" />
          </View>
          <Text style={styles.artistName}>Chris Stapleton</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.actionsRow}
        >
          <View style={styles.ratingChip}>
            <Ionicons name="thumbs-up-outline" size={23} color="#ffffff" />
            <Text style={styles.actionChipText}>2.7M</Text>
            <View style={styles.ratingDivider} />
            <Ionicons name="thumbs-down-outline" size={23} color="#ffffff" />
          </View>
          <ActionChip icon="chatbox-ellipses-outline" label="Lyrics" />
          <ActionChip icon="chatbubble-outline" label="6.8K" />
          <ActionChip icon="list-outline" label="Save" />
        </ScrollView>

        <View style={styles.progressSection}>
          <View style={styles.progressTrack}>
            <View style={styles.progressValue} />
          </View>
          <View style={styles.progressTimes}>
            <Text style={styles.progressText}>0:02</Text>
            <Text style={styles.progressText}>4:53</Text>
          </View>
        </View>

        <View style={styles.controls}>
          <Ionicons name="shuffle" size={28} color="#ffffff" />
          <Ionicons name="play-skip-back" size={37} color="#ffffff" />
          <Pressable
            accessibilityLabel={isPlaying ? "Pause" : "Play"}
            onPress={() => setIsPlaying((playing) => !playing)}
            style={styles.mainControl}
          >
            <Ionicons
              name={isPlaying ? "pause" : "play"}
              size={48}
              color="#000000"
            />
          </Pressable>
          <Ionicons name="play-skip-forward" size={37} color="#ffffff" />
          <Ionicons name="repeat" size={29} color="#ffffff" />
        </View>

        <View style={styles.mixSection}>
          <View style={styles.dragHandle} />
          <Text style={styles.mixTitle}>Tennessee Whiskey Mix</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#252525",
  },
  header: {
    height: 72,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 22,
  },
  modeSwitch: {
    width: 118,
    height: 42,
    flexDirection: "row",
    padding: 3,
    borderRadius: 23,
    backgroundColor: "#1d1d1d",
  },
  activeMode: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#3a3a3a",
  },
  inactiveMode: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 22,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
  },
  albumCover: {
    alignSelf: "center",
    borderRadius: 13,
    backgroundColor: "#3a3a3a",
  },
  songInformation: {
    marginTop: 28,
  },
  songTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  songTitle: {
    flexShrink: 1,
    color: "#ffffff",
    fontSize: 27,
    fontWeight: "700",
  },
  artistName: {
    color: "#d0d0d0",
    fontSize: 19,
    marginTop: 4,
  },
  actionsRow: {
    gap: 10,
    paddingTop: 28,
    paddingRight: 24,
  },
  actionChip: {
    height: 47,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 17,
    borderRadius: 24,
    backgroundColor: "#3b3b3b",
  },
  actionChipText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "500",
  },
  ratingChip: {
    height: 47,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 17,
    borderRadius: 24,
    backgroundColor: "#3b3b3b",
  },
  ratingDivider: {
    width: StyleSheet.hairlineWidth,
    height: 27,
    backgroundColor: "#777777",
  },
  progressSection: {
    marginTop: 31,
  },
  progressTrack: {
    height: 4,
    overflow: "hidden",
    borderRadius: 2,
    backgroundColor: "#505050",
  },
  progressValue: {
    width: "22%",
    height: "100%",
    backgroundColor: "#f4f4f4",
  },
  progressTimes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 9,
  },
  progressText: {
    color: "#c6c6c6",
    fontSize: 14,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 2,
  },
  mainControl: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  mixSection: {
    alignItems: "center",
    marginTop: 38,
  },
  dragHandle: {
    width: 43,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#555555",
  },
  mixTitle: {
    color: "#d8d8d8",
    fontSize: 17,
    fontWeight: "600",
    marginTop: 22,
  },
});
