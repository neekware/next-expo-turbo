"use client";

import { View, Text, Button, Linking } from "react-native";
import Head from "next/head";

export default function Page() {
  return (
    <View>
      <Head>
        <title>My Title</title>
        <meta charSet="utf-8" />
        <link rel="canonical" href="http://foobar.com/example" />
      </Head>
      <Text style={{ marginBottom: "10px" }}>My Profile</Text>
      <View style={{ width: "100px" }}>
        <Button title="Profile" onPress={() => Linking.openURL("/")}></Button>
      </View>
    </View>
  );
}
