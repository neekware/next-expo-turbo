"use client";

import { View, Text, Button } from "react-native";
import { Link } from "solito/link";

export default function Page() {
  return (
    <View>
      <Text style={{ marginBottom: "10px" }}>My Profile</Text>
      <View style={{ width: "100px" }}>
        <Link href="/profile">
          <Button title="Profile" />
        </Link>
      </View>
    </View>
  );
}
