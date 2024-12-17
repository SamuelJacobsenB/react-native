import { Link } from "expo-router";
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
      <Link href={"/about"}>Página sobre</Link>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}