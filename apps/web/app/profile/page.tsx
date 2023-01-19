"use client";

import { View, Text, Button } from "react-native";
import Head from "next/head";
import { Link } from "solito/link";

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
        <Link href="/">
          <Button title="Home" />
        </Link>
      </View>
    </View>
  );
}
