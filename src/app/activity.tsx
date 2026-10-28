import { Ionicons } from "@expo/vector-icons";
import { type Href, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { BottomNavigation } from "@/components/BottomNavigation";
import { MiniPlayer } from "@/components/MiniPlayer";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const tennesseeCover = require("../../assets/images/tennessee-whiskey.jpeg");

type ActivityItem = {
  id: string;
  artist: string;
  message: string;
  release: string;
  time: string;
  avatar: string;
  cover: string;
};

const activities: ActivityItem[] = [
  {
    id: "1",
    artist: "Nato Kitch",
    message: "released a new album",
    release: "to earth and back",
    time: "14h ago",
    avatar: "https://picsum.photos/seed/nato-avatar/120/120",
    cover: "https://picsum.photos/seed/earth-album/160/160",
  },
  {
    id: "2",
    artist: "Nato Kitch",
    message: "released a new single",
    release: "running out of time (slowed & reverb)",
    time: "1d ago",
    avatar: "https://picsum.photos/seed/nato-avatar/120/120",
    cover: "https://picsum.photos/seed/running-single/160/160",
  },
  {
    id: "3",
    artist: "Novo Canto",
    message: "released a new single",
    release: "Santo",
    time: "8d ago",
    avatar: "https://picsum.photos/seed/novo-avatar/120/120",
    cover: "https://picsum.photos/seed/santo-single/160/160",
  },
  {
    id: "4",
    artist: "Novo Canto",
    message: "released a new album",
    release: "Ao Vivo no Celeiro",
    time: "9d ago",
    avatar: "https://picsum.photos/seed/novo-avatar/120/120",
    cover: "https://picsum.photos/seed/celeiro-album/160/160",
  },
  {
    id: "5",
    artist: "Amy Winehouse",
    message: "Presave",
    release: "Back To Black (20th Anniversary Edition)",
    time: "13d ago",
    avatar: "https://picsum.photos/seed/amy-avatar/120/120",
    cover: "https://picsum.photos/seed/back-black/160/160",
  },
  {
    id: "6",
    artist: "Bethel Music",
    message: "released a new single",
    release: "All The Glory",
    time: "2w ago",
    avatar: "https://picsum.photos/seed/bethel-avatar/120/120",
    cover: "https://picsum.photos/seed/glory-single/160/160",
  },
  {
    id: "7",
    artist: "Bruno Mars",
    message: "Remix for you",
    release: "24K Magic (R3hab Remix)",
    time: "3w ago",
    avatar: "https://picsum.photos/seed/bruno-avatar/120/120",
    cover: "https://picsum.photos/seed/magic-remix/160/160",
  },
];

function ActivityRow({ item }: { item: ActivityItem }) {
  return (
    <View style={styles.activityRow}>
      <Image source={{ uri: item.avatar }} style={styles.artistAvatar} />

      <View style={styles.activityDetails}>
        <Text style={styles.activityText}>
          <Text style={styles.boldText}>{item.artist} </Text>
          {item.message} <Text style={styles.boldText}>{item.release}</Text>
        </Text>
        <Text style={styles.activityTime}>{item.time}</Text>
      </View>

      <Image source={{ uri: item.cover }} style={styles.releaseCover} />
      <Ionicons name="ellipsis-vertical" size={22} color="#b8b8b8" />
    </View>
  );
}

export default function ActivityScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Pressable
          accessibilityLabel="Go back"
          hitSlop={12}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={31} color="#ffffff" />
        </Pressable>
        <Text style={styles.headerTitle}>Activity</Text>
        <Pressable
          accessibilityLabel="Open account"
          onPress={() => router.push("/account" as Href)}
        >
          <Image
            source={{ uri: "https://picsum.photos/seed/paulo-profile/120/120" }}
            style={styles.profileImage}
          />
        </Pressable>
      </View>

      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ActivityRow item={item} />}
        ListHeaderComponent={<Text style={styles.listHeading}>New</Text>}
        contentContainerStyle={styles.activityList}
        showsVerticalScrollIndicator={false}
      />

      <MiniPlayer
        title="Tennessee Whiskey"
        artist="Chris Stapleton"
        image={tennesseeCover}
        onPress={() => router.push("/player" as Href)}
      />

      <BottomNavigation />
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
    gap: 22,
    paddingHorizontal: 18,
  },
  headerTitle: {
    flex: 1,
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "600",
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#252525",
  },
  activityList: {
    paddingHorizontal: 18,
    paddingBottom: 18,
  },
  listHeading: {
    color: "#a8a8a8",
    fontSize: 19,
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 20,
  },
  activityRow: {
    minHeight: 102,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 14,
  },
  artistAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#222222",
  },
  activityDetails: {
    flex: 1,
    paddingTop: 1,
  },
  activityText: {
    color: "#f1f1f1",
    fontSize: 16,
    lineHeight: 21,
  },
  boldText: {
    fontWeight: "700",
  },
  activityTime: {
    color: "#a8a8a8",
    fontSize: 15,
    marginTop: 4,
  },
  releaseCover: {
    width: 64,
    height: 64,
    borderRadius: 4,
    backgroundColor: "#222222",
  },
});
