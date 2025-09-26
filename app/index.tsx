import Constants from "expo-constants";
import { checkForUpdateAsync, fetchUpdateAsync, reloadAsync } from "expo-updates";
import { Button, Text, View } from "react-native";

export default function Index() {
  async function checkAndFetchUpdate() {
    const update = await checkForUpdateAsync();
    if (update.isAvailable) {
      console.log(`Update available: Fetching...`);
      await fetchUpdateAsync();
      console.log("Update fetched. Reloading...");
      await reloadAsync();
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Version: ${Constants.expoConfig?.version || "unknown"}</Text>
      <Button onPress={checkAndFetchUpdate} title="Update if you can" />
    </View>
  );
}
