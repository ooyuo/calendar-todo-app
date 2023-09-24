import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { runPracticeDayjs } from "./src/practive-dayjs";
import { getCalendarColumns } from "./src/util";

export default function App() {
  const now = dayjs();
  const columns = getCalendarColumns(now);

  useEffect(() => {
    runPracticeDayjs();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
