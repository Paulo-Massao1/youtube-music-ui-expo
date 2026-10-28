import { Ionicons } from "@expo/vector-icons";
import { type Href, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const filters = ["Podcasts", "Energize", "Relax", "Workout", "Feel good"];

function FilterChip(props: { label: string }) {
  return (
    <View style={styles.filterChip}>
      <Text style={styles.filterText}>{props.label}</Text>
    </View>
  );
}

function AlbumCard(props: { title: string; image: string }) {
  return (
    <View style={styles.albumCard}>
      <Image
        source={{ uri: props.image }}
        style={styles.albumCover}
        resizeMode="cover"
      />
      <View style={styles.albumShade} />
      <Text numberOfLines={1} style={styles.albumTitle}>
        {props.title}
      </Text>
    </View>
  );
}

function SongRow(props: {
  title: string;
  artist: string;
  plays: string;
  image: string;
}) {
  return (
    <View style={styles.songRow}>
      <Image source={{ uri: props.image }} style={styles.songCover} />
      <View style={styles.songDetails}>
        <Text numberOfLines={1} style={styles.songTitle}>
          {props.title}
        </Text>
        <Text numberOfLines={1} style={styles.songMetadata}>
          {props.artist} · {props.plays}
        </Text>
      </View>
      <Ionicons name="ellipsis-vertical" size={24} color="#ffffff" />
    </View>
  );
}

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="light" />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.brand}>
            <View style={styles.musicLogo}>
              <Ionicons name="play" size={20} color="#ffffff" />
            </View>
            <Text style={styles.brandText}>Music</Text>
          </View>

          <View style={styles.headerActions}>
            <Pressable
              accessibilityLabel="Open activity"
              onPress={() => router.push("/activity" as Href)}
              style={styles.notification}
            >
              <Ionicons name="notifications-outline" size={29} color="#ffffff" />
              <View style={styles.notificationBadge}>
                <Text style={styles.notificationBadgeText}>7</Text>
              </View>
            </Pressable>
            <Image
              source={{ uri: "https://picsum.photos/seed/paulo-profile/120/120" }}
              style={styles.profileImage}
            />
          </View>
        </View>

        <FlatList
          data={filters}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <FilterChip label={item} />}
        />

        <View style={styles.speedDialHeading}>
          <Image
            source={{ uri: "https://picsum.photos/seed/paulo-avatar/100/100" }}
            style={styles.speedDialAvatar}
          />
          <View>
            <Text style={styles.userName}>PAULO MASSAO</Text>
            <Text style={styles.sectionTitle}>Speed dial</Text>
          </View>
        </View>

        <View style={styles.albumGrid}>
          <AlbumCard
            title="let me love you - ..."
            image="https://picsum.photos/seed/palms-music/500/500"
          />
          <AlbumCard
            title="Eu Me Rendo"
            image="https://picsum.photos/seed/praise-music/500/500"
          />
          <AlbumCard
            title="STORM II"
            image="https://picsum.photos/seed/storm-music/500/500"
          />
          <AlbumCard
            title="Rewind"
            image="https://picsum.photos/seed/rewind-music/500/500"
          />
          <AlbumCard
            title="About You"
            image="https://picsum.photos/seed/about-you-music/500/500"
          />
          <AlbumCard
            title="Psalm 96 (Intro)"
            image="https://picsum.photos/seed/psalm-music/500/500"
          />
          <AlbumCard
            title="Where'd All the Time Go?"
            image="https://picsum.photos/seed/time-music/500/500"
          />
          <AlbumCard
            title="Rein Me In"
            image="https://picsum.photos/seed/rein-music/500/500"
          />
          <View style={[styles.albumCard, styles.abstractCard]}>
            <View style={[styles.abstractCircle, styles.circleOne]} />
            <View style={[styles.abstractCircle, styles.circleTwo]} />
            <View style={[styles.abstractCircle, styles.circleThree]} />
          </View>
        </View>

        <View style={styles.pageDots}>
          <View style={[styles.pageDot, styles.activeDot]} />
          <View style={styles.pageDot} />
          <View style={styles.pageDot} />
        </View>

        <View style={styles.quickPicksHeading}>
          <Text style={styles.quickPicksTitle}>Quick picks</Text>
          <View style={styles.playAllButton}>
            <Text style={styles.playAllText}>Play all</Text>
          </View>
        </View>

        <View style={styles.quickPicksList}>
          <SongRow
            title="Tennessee Whiskey"
            artist="Chris Stapleton"
            plays="1.3B plays"
            image="https://picsum.photos/seed/tennessee-music/240/240"
          />
          <SongRow
            title="Beautiful Things"
            artist="Benson Boone"
            plays="892M plays"
            image="https://picsum.photos/seed/beautiful-music/240/240"
          />
          <SongRow
            title="The Door"
            artist="Teddy Swims"
            plays="438M plays"
            image="https://picsum.photos/seed/door-music/240/240"
          />
        </View>

        <View style={styles.alertButton}>
          <Button
            title="Alert"
            color="#ff0033"
            onPress={() => Alert.alert("Alert Button pressed")}
          />
        </View>
      </ScrollView>

      <View style={styles.miniPlayer}>
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
      </View>

      <View style={styles.bottomNavigation}>
        <View style={styles.navigationItem}>
          <Ionicons name="home" size={28} color="#ffffff" />
          <Text style={styles.activeNavigationLabel}>Home</Text>
        </View>
        <View style={styles.navigationItem}>
          <Ionicons name="play-skip-forward-outline" size={28} color="#dedede" />
          <Text style={styles.navigationLabel}>Samples</Text>
        </View>
        <View style={styles.navigationItem}>
          <Ionicons name="search-outline" size={28} color="#dedede" />
          <Text style={styles.navigationLabel}>Search</Text>
        </View>
        <View style={styles.navigationItem}>
          <Ionicons name="bookmark-outline" size={28} color="#dedede" />
          <Text style={styles.navigationLabel}>Library</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000000",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 26,
  },
  brand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  musicLogo: {
    width: 39,
    height: 39,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff0033",
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  brandText: {
    color: "#ffffff",
    fontSize: 29,
    fontWeight: "700",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  notification: {
    position: "relative",
  },
  notificationBadge: {
    position: "absolute",
    right: -7,
    top: -7,
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff1b16",
  },
  notificationBadgeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "700",
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#252525",
  },
  filterRow: {
    gap: 10,
    paddingRight: 16,
  },
  filterChip: {
    height: 45,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#292c30",
  },
  filterText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "500",
  },
  speedDialHeading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    marginTop: 31,
    marginBottom: 22,
  },
  speedDialAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#252525",
  },
  userName: {
    color: "#a7a7a7",
    fontSize: 14,
  },
  sectionTitle: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "700",
  },
  albumGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 5,
  },
  albumCard: {
    width: "32.6%",
    aspectRatio: 1,
    overflow: "hidden",
    justifyContent: "flex-end",
    borderRadius: 9,
    backgroundColor: "#252525",
  },
  albumCover: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  albumShade: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    height: "36%",
    backgroundColor: "rgba(0, 0, 0, 0.48)",
  },
  albumTitle: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
    paddingHorizontal: 7,
    paddingBottom: 7,
  },
  abstractCard: {
    position: "relative",
    backgroundColor: "#100813",
  },
  abstractCircle: {
    position: "absolute",
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#b9b9ed",
  },
  circleOne: {
    top: 17,
    left: 26,
  },
  circleTwo: {
    top: 50,
    right: 20,
  },
  circleThree: {
    right: 36,
    bottom: 11,
  },
  pageDots: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 7,
    marginTop: 12,
  },
  pageDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#545454",
  },
  activeDot: {
    backgroundColor: "#ffffff",
  },
  quickPicksHeading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 49,
    marginBottom: 16,
  },
  quickPicksTitle: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "700",
  },
  playAllButton: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: "#5e5e5e",
    borderRadius: 18,
  },
  playAllText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },
  quickPicksList: {
    gap: 10,
  },
  alertButton: {
    marginTop: 28,
    marginBottom: 10,
  },
  songRow: {
    minHeight: 82,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    padding: 9,
    paddingRight: 12,
    borderRadius: 9,
    backgroundColor: "#181818",
  },
  songCover: {
    width: 64,
    height: 64,
    borderRadius: 4,
    backgroundColor: "#292929",
  },
  songDetails: {
    flex: 1,
    gap: 3,
  },
  songTitle: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "600",
  },
  songMetadata: {
    color: "#a6a6a6",
    fontSize: 15,
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
