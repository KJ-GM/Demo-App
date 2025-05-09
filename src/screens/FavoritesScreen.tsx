import React from "react";
import { View, ScrollView } from "react-native";
import { createThemedStyles } from "../theme";
import { ThemedCard } from "../components/ThemedCard";
import { ThemedText } from "../components/ThemedText";
import { MaterialIcons } from "@expo/vector-icons";

const FAVORITES = [
  {
    id: "f1",
    title: "Finalize project timeline",
    note: "Make sure all milestones are locked.",
  },
  {
    id: "f2",
    title: "Prepare pitch deck",
    note: "Include recent metrics and projections.",
  },
  {
    id: "f3",
    title: "Update brand guidelines",
    note: "New logo colors and fonts to be included.",
  },
];

export const FavoritesScreen = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <ThemedText variant="heading" style={styles.headerText}>
        Favorite Tasks
      </ThemedText>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {FAVORITES.map((item) => (
          <ThemedCard key={item.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <ThemedText variant="subheading">{item.title}</ThemedText>
              <MaterialIcons name="favorite" size={20} color="#e11d48" />
            </View>
            <ThemedText variant="body" style={styles.note}>
              {item.note}
            </ThemedText>
          </ThemedCard>
        ))}
      </ScrollView>
    </View>
  );
};

const useStyles = createThemedStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  headerText: {
    marginBottom: theme.spacing.lg,
    textAlign: "center",
  },
  scrollContainer: {
    gap: theme.spacing.md,
    paddingBottom: theme.spacing.xl,
  },
  card: {
    padding: theme.spacing.md,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
  },
  note: {
    color: theme.colors.muted,
  },
}));
