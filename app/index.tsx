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
      <Text style={{
        fontFamily: "appFont"
      }}>Hi there! you are on home page</Text>
    </View>
  );
}
