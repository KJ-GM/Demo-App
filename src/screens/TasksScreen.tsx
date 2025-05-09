/* eslint-disable react-native/no-raw-text */
import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { ThemedCard } from "../components/ThemedCard";
import { ThemedText } from "../components/ThemedText";
import { ThemedInput } from "../components/ThemedInput";
import { createThemedStyles } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";

const TASKS = [
  {
    id: "1",
    title: "Design new login screen",
    due: "Tomorrow",
    status: "In Progress",
  },
  {
    id: "2",
    title: "Fix onboarding bug",
    due: "Today",
    status: "Urgent",
  },
  {
    id: "3",
    title: "Plan marketing campaign",
    due: "Next Monday",
    status: "Pending",
  },
];

export const TasksScreen = () => {
  const styles = useStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Header */}

      <ThemedText variant="heading">Your Tasksss</ThemedText>
      <ThemedInput placeholder="Search tasks..." style={styles.input} />

      {/* Scrollable Tasks */}
      <ScrollView
        contentContainerStyle={styles.taskList}
        showsVerticalScrollIndicator={false}
      >
        {TASKS.map((task) => (
          <TouchableOpacity
            key={task.id}
            onPress={() => navigation.navigate("TaskDetails", { id: task.id })}
            activeOpacity={0.8}
          >
            <ThemedCard style={styles.card}>
              <ThemedText variant="subheading">{task.title}</ThemedText>
              <ThemedText variant="caption">Due: {task.due}</ThemedText>
              <ThemedText variant="body" style={styles.statusText}>
                Status: {task.status}
              </ThemedText>
            </ThemedCard>
          </TouchableOpacity>
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
  input: {
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  taskList: {
    gap: theme.spacing.md,
    paddingBottom: theme.spacing.xl,
  },
  card: {
    padding: theme.spacing.md,
  },
  statusText: {
    marginTop: theme.spacing.sm,
    color: theme.colors.muted,
  },
}));
