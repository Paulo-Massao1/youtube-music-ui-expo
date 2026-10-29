import { Ionicons } from "@expo/vector-icons";
import { type Href, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { MiniPlayer } from "@/components/MiniPlayer";
import {
  Image,
  type ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const tennesseeCover = require("../../../assets/images/tennessee-whiskey.jpeg");

type RecentCard = {
  id: string;
  title: string;
  image: string | ImageSourcePropType;
};

const recentCards: RecentCard[] = [
  { id: "tennessee", title: "Tennessee...", image: tennesseeCover },
  {
    id: "shower",
    title: "Shower (Official Video)",
    image: "https://picsum.photos/seed/shower-video/300/300",
  },
  {
    id: "intro",
    title: "Intro",
    image: "https://picsum.photos/seed/intro-song/300/300",
  },
  {
    id: "love",
    title: "My Love",
    image: "https://picsum.photos/seed/my-love-song/300/300",
  },
];

const recentQueries = [
  "singing in the shower",
  "cansado ao vivo",
  "tu es o deus dessa nacao",
  "cansado ao vico",
  "hey monalisa come home",
];

const categories = [
  { label: "New releases", icon: "musical-notes-outline" },
  { label: "Charts", icon: "trending-up-outline" },
  { label: "Moods & genres", icon: "happy-outline" },
  { label: "Podcasts", icon: "mic-circle-outline" },
] as const;

function RecentSearchCard({ item }: { item: RecentCard }) {
  const source = typeof item.image === "string" ? { uri: item.image } : item.image;

  return (
    <View style={styles.recentCard}>
      <Image source={source} style={styles.recentImage} />
      <Text numberOfLines={1} style={styles.recentCardTitle}>
        {item.title}
      </Text>
    </View>
  );
}

export default function SearchScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <StatusBar style="light" />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.searchHeader}>
          <View style={styles.searchField}>
            <Pressable
              accessibilityLabel="Go to Home"
              hitSlop={10}
              onPress={() => router.replace("/" as Href)}
            >
              <Ionicons name="chevron-back" size={31} color="#ffffff" />
            </Pressable>
            <Text style={styles.searchPlaceholder}>Type to search</Text>
            <Ionicons name="mic-outline" size={29} color="#ffffff" />
          </View>
          <View style={styles.voiceButton}>
            <Ionicons name="options-outline" size={28} color="#ffffff" />
          </View>
        </View>

        <Text style={styles.sectionLabel}>Recent searches</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recentCards}
        >
          {recentCards.map((item) => (
            <RecentSearchCard item={item} key={item.id} />
          ))}
        </ScrollView>

        <View style={styles.artistResult}>
          <Image
            source={{ uri: "https://picsum.photos/seed/diante-trono/160/160" }}
            style={styles.artistImage}
          />
          <View style={styles.artistDetails}>
            <Text style={styles.artistName}>Diante do Trono</Text>
            <Text style={styles.artistAudience}>3.25M monthly audience</Text>
          </View>
          <Ionicons name="ellipsis-vertical" size={24} color="#ffffff" />
        </View>

        <View style={styles.queryList}>
          {recentQueries.map((query) => (
            <View style={styles.queryRow} key={query}>
              <Ionicons name="time-outline" size={31} color="#ffffff" />
              <Text numberOfLines={1} style={styles.queryText}>
                {query}
              </Text>
              <Ionicons name="arrow-up-outline" size={29} color="#ffffff" />
            </View>
          ))}
        </View>

        <View style={styles.categoryGrid}>
          {categories.map((category) => (
            <View style={styles.categoryCard} key={category.label}>
              <Ionicons name={category.icon} size={25} color="#ffffff" />
              <Text style={styles.categoryLabel}>{category.label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <MiniPlayer
        title="Tennessee Whiskey"
        artist="Chris Stapleton"
        image={tennesseeCover}
        onPress={() => router.push("/player" as Href)}
      />
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
    paddingTop: 18,
    paddingBottom: 24,
  },
  searchHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 14,
  },
  searchField: {
    height: 58,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    paddingHorizontal: 15,
    borderRadius: 30,
    backgroundColor: "#242424",
  },
  searchPlaceholder: {
    flex: 1,
    color: "#b8b8b8",
    fontSize: 21,
  },
  voiceButton: {
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#242424",
  },
  sectionLabel: {
    color: "#a7a7a7",
    fontSize: 16,
    marginTop: 18,
    marginBottom: 13,
    paddingHorizontal: 14,
  },
  recentCards: {
    gap: 13,
    paddingHorizontal: 14,
    paddingRight: 28,
  },
  recentCard: {
    width: 132,
  },
  recentImage: {
    width: 132,
    height: 112,
    borderRadius: 5,
    backgroundColor: "#202020",
  },
  recentCardTitle: {
    color: "#ffffff",
    fontSize: 16,
    marginTop: 7,
  },
  artistResult: {
    minHeight: 79,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 14,
    marginTop: 14,
  },
  artistImage: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#202020",
  },
  artistDetails: {
    flex: 1,
    gap: 4,
  },
  artistName: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  artistAudience: {
    color: "#a8a8a8",
    fontSize: 16,
  },
  queryList: {
    paddingHorizontal: 20,
  },
  queryRow: {
    minHeight: 63,
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },
  queryText: {
    flex: 1,
    color: "#ffffff",
    fontSize: 18,
  },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 14,
    paddingHorizontal: 14,
    marginTop: 22,
  },
  categoryCard: {
    width: "48.5%",
    height: 105,
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 15,
    backgroundColor: "#1b1b1b",
  },
  categoryLabel: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
});
