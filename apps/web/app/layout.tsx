import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Head>
        <title key="title">Hello and welcome!</title>
        <meta
          content="width=device-width, initial-scale=1"
          name="viewport"
          key="content"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
