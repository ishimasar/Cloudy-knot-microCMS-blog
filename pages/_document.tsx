import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="ja">
        <Head>
          <link rel="icon" href="favicon/favicon.ico" sizes="any" />
          <link rel="icon" href="favicon/favicon.svg" type="image/svg+xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}