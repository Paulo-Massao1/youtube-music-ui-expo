import { Ionicons } from "@expo/vector-icons";
import { type Href, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

function BottomNavigation() {
  return (
    <View style={styles.bottomNavigation}>
      <View style={styles.navigationItem}>
        <Ionicons name="home" size={27} color="#ffffff" />
        <Text style={styles.activeNavigationLabel}>Home</Text>
      </View>
      <View style={styles.navigationItem}>
        <Ionicons name="play-skip-forward-outline" size={27} color="#dedede" />
        <Text style={styles.navigationLabel}>Samples</Text>
      </View>
      <View style={styles.navigationItem}>
        <Ionicons name="search-outline" size={28} color="#dedede" />
        <Text style={styles.navigationLabel}>Search</Text>
      </View>
      <View style={styles.navigationItem}>
        <Ionicons name="bookmark-outline" size={27} color="#dedede" />
        <Text style={styles.navigationLabel}>Library</Text>
      </View>
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
        <Image
          source={{ uri: "https://picsum.photos/seed/paulo-profile/120/120" }}
          style={styles.profileImage}
        />
      </View>

      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ActivityRow item={item} />}
        ListHeaderComponent={<Text style={styles.listHeading}>New</Text>}
        contentContainerStyle={styles.activityList}
        showsVerticalScrollIndicator={false}
      />

      <Pressable
        accessibilityLabel="Open Tennessee Whiskey player"
        onPress={() => router.push("/player" as Href)}
        style={styles.miniPlayer}
      >
        <Image
          source={{ uri: "https://picsum.photos/seed/tennessee-music/240/240" }}
          style={styles.miniPlayerCover}
        />
        <View style={styles.miniPlayerDetails}>
          <Text numberOfLines={1} style={styles.miniPlayerTitle}>
            Tennessee Whiskey
          </Text>
          <Text numberOfLines={1} style={styles.miniPlayerArtist}>
            Chris Stapleton
          </Text>
        </View>
        <Ionicons name="tv-outline" size={27} color="#ffffff" />
        <Ionicons name="play" size={30} color="#ffffff" />
      </Pressable>

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
  miniPlayer: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#575757",
    backgroundColor: "#202020",
  },
  miniPlayerCover: {
    width: 54,
    height: 54,
    borderRadius: 3,
  },
  miniPlayerDetails: {
    flex: 1,
    gap: 2,
  },
  miniPlayerTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  miniPlayerArtist: {
    color: "#c6c6c6",
    fontSize: 15,
  },
  bottomNavigation: {
    height: 66,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#202020",
  },
  navigationItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  navigationLabel: {
    color: "#dedede",
    fontSize: 12,
  },
  activeNavigationLabel: {
    color: "#ffffff",
    fontSize: 12,
  },
});
