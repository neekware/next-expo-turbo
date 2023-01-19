"use client";

import { View, Text } from "react-native";
import Head from "next/head";
import Link from "next/link";
import { Button } from "ui";

export default function Page() {
  return (
    <View>
      <Head>
        <title>My Title</title>
        <meta charSet="utf-8" />
        <link rel="canonical" href="http://foobar.com/example" />
      </Head>
      <Text>My Profile</Text>

      <Link href="/">
        <Button text="Home" />
      </Link>
    </View>
  );
}
