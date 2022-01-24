import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#0586d3"></meta>
          <link
            rel="icon"
            type="image/png"
            href="/favicon32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon16.png"
            sizes="16x16"
          />
          <link rel="shortcut icon" href="/favicons/stack/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple128.jpeg" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#0586d3"
          />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
