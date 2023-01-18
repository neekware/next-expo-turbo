import Head from "next/head";
import Link from "next/link";
import { Button } from "ui";

export default function Page() {
  return (
    <div>
      <Head>
        <title>My Title</title>
        <meta charSet="utf-8" />
        <link rel="canonical" href="http://foobar.com/example" />
      </Head>
      <h1>My Profile</h1>

      <Link href="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}
