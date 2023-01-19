"use client";

import Link from "next/link";
import { View, Text } from "react-native";
import { Button } from "ui";

export default function Page() {
  return (
    <View>
      <Text>My Profile</Text>

      <Link href="/profile">
        <Button text="Profile" />
      </Link>
    </View>
  );
}
