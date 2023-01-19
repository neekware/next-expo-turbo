"use client";

import { View, Text, Linking, Button } from "react-native";

export default function Page() {
  return (
    <View>
      <Text style={{ marginBottom: "10px" }}>My Profile</Text>
      <View style={{ width: "100px" }}>
        <Button title="Profile" onPress={() => Linking.openURL("/")}></Button>
      </View>
    </View>
  );
}
