import React from "react";
import { View, TouchableOpacity, SafeAreaView, Platform } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createThemedStyles, useTheme } from "../theme";
import { ThemedCard } from "../components/ThemedCard";
import { ThemedText } from "../components/ThemedText";
import { ThemeToggle } from "../components/ThemeToggle";
import type { RootStackParamList } from "../navigation/StackNavigator";

const useStyles = createThemedStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.xl,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing.xl,
    paddingTop: theme.spacing.md,
    paddingHorizontal: Platform.OS === "ios" ? 25 : 0,
  },
  titleWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    paddingTop: theme.spacing.md,
    alignItems: "center",
  },
  contentWrapper: {
    flex: 1,
    justifyContent: "center",
    gap: theme.spacing.lg,
  },
}));

export const TaskDetailsScreen = () => {
  const styles = useStyles();
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, "TaskDetails">>();
  const { id: taskId } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            style={{ color: theme.colors.text }}
            size={24}
          />
        </TouchableOpacity>

        <View style={styles.titleWrapper}>
          <ThemedText variant="heading">Task #{taskId}</ThemedText>
        </View>

        <ThemeToggle />
      </View>

      {/* Content */}
      <View style={styles.contentWrapper}>
        <ThemedCard>
          <ThemedText variant="subheading">Description</ThemedText>
          <ThemedText variant="body">
            This is a detailed description for task #{taskId}. You can include
            due dates, assigned users, and any other relevant details.
          </ThemedText>
        </ThemedCard>

        <ThemedCard>
          <ThemedText variant="subheading">Status</ThemedText>
          <ThemedText variant="body">In Progress</ThemedText>
        </ThemedCard>
      </View>
    </SafeAreaView>
  );
};
