import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function Assistant() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 12, justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "600" }}>Hayat Assistant</Text>
      <Link href="/tasks" asChild><Button title="Go to Tasks" /></Link>
      <Link href="/progress" asChild><Button title="View Progress" /></Link>
      <Link href="/settings" asChild><Button title="Settings" /></Link>
      <Link href="/auth/login" asChild><Button title="Login" /></Link>
    </View>
  );
}
