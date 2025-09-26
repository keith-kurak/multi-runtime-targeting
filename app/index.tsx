import Constants from "expo-constants";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Version: ${Constants.expoConfig?.version || "unknown"}</Text>
    </View>
  );
}
